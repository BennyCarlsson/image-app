const fs = require("fs");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const dropAllCollections = require("./utils/dropAllCollections");

const request = supertest(app);

// Connects to test database
beforeAll(async () => {
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
});

test("Return 404 for invalid endpoint", async (done) => {
  const response = await request.get("/invalid");
  expect(response.status).toBe(404);
  expect(response.body.message).toBe(`Cannot find /invalid on this server!`);
  done();
});

test("POST /images - upload image", async (done) => {
  const expectedFilePath = "/img/Test.jpeg";

  const response = await request
    .post("/images")
    .field("name", "Test")
    .attach("photo", "test/utils/test.jpeg");

  const fileExists = fs.existsSync(`public${expectedFilePath}`);

  // Clean up by removing file again
  if (fileExists) {
    fs.unlink(`public${expectedFilePath}`, (err) => {
      if (err) throw err;
    });
  }

  expect(response.status).toBe(201);
  expect(response.body.data.data.name).toBe("Test");
  expect(response.body.data.data.path).toBe(expectedFilePath);
  expect(fileExists).toBe(true);

  done();
});
