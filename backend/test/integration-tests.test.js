const fs = require("fs");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const dropAllCollections = require("./utils/dropAllCollections");

const request = supertest(app);

const testImageName = "Testååäö test;";
const millisecondsToMock = 1619517600;
const expectedFilePath = `/img/testaaao-t_${millisecondsToMock}.jpeg`;
const mockDateNow = () => {
  return millisecondsToMock;
}

// Connects to test database
beforeAll(async () => {
  originalDateNow = Date.now;
  Date.now = mockDateNow;
  process.env.ENV = "test";
  const url = `mongodb://127.0.0.1/image-app-test-db`;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Clean up test database and drop connection
afterAll(async () => {
  await dropAllCollections();
  await mongoose.connection.close();
  Date.now = originalDateNow;
});

test("Return 404 for invalid endpoint", async (done) => {
  const response = await request.get("/invalid");
  expect(response.status).toBe(404);
  expect(response.body.message).toBe(`Cannot find /invalid on this server!`);
  done();
});

test("POST /images - upload image", async (done) => {
  const response = await request
    .post("/images")
    .field("name", testImageName)
    .attach("photo", "test/utils/test.jpeg");

  const fileExists = fs.existsSync(`public${expectedFilePath}`);

  // Clean up by removing file again
  if (fileExists) {
    fs.unlink(`public${expectedFilePath}`, (err) => {
      if (err) throw err;
    });
  }

  expect(response.status).toBe(201);
  expect(response.body.data.data.name).toBe(testImageName);
  expect(response.body.data.data.path).toBe(expectedFilePath);
  expect(fileExists).toBe(true);

  done();
});

test("GET /images - returns array of metadata for uploaded images", async (done) => {
  const response = await request.get("/images");

  expect(response.status).toBe(200);
  expect(response.body.data.length).toBe(1);
  expect(response.body.data[0].name).toBe(testImageName);
  expect(response.body.data[0].path).toBe(expectedFilePath);

  done();
});
