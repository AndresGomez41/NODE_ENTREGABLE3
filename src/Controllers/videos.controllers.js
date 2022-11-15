const VideosServices = require("../Services/videos.services");

const createVideo = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await VideosServices.addVideo(newVideo);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

const deleteVideo = async (req, res, next) => {
  try {
    const id = req.params;
    console.log(id, typeof(id));
    const result = await VideosServices.delVideo(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createVideo,
  deleteVideo,
}