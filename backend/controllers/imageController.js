const multer = require("multer");
const sharp = require('sharp');
const ImageMetadata = require("../models/ImageMetadataModel");

const IMG_DIRECTORY_PATH = "public/img";
const IMG_PATH = "/img";
const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    if(extension === "jpeg" || extension === "png"){
      cb(null,true)
    }else {
      cb(null,false)
    }
  }
});

exports.getAllImages = async (req, res, next) => {
  const data = await ImageMetadata.find();

  return res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.uploadImage = upload.single("photo");

const createFileName = (extension, originalname) => {
  const newName = originalname.trim().substring(0,10).toLowerCase().replace(/å|ä/g,'a').replace(/ö/g,'o').replace(/([^a-z0-9 ]+)/g,'').replace(/ /g,'-')
  return `${newName}_${Date.now()}.${extension}`
}

exports.createImageMetadata = async (req, res, next) => {
  const extension = req.file.mimetype.split("/")[1];
  const newFileName = createFileName(extension, req.body.name)
  const path = `${IMG_DIRECTORY_PATH}/${newFileName}`
  await sharp(req.file.buffer).resize(400, 400).toFile(path);

  const doc = await ImageMetadata.create({
    name: req.body.name,
    path:`${IMG_PATH}/${newFileName}`
  });

  if (!doc) {
    return res.status(400).json({
      status: "fail",
      message: "invalid input",
    });
  }

  return res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};
