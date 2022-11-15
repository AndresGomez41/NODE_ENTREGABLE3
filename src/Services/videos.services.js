const Videos = require("../models/videos.models");


class VideosServices {

  static async addVideo(data) {
    try {      
      const result = await Videos.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delVideo(id) {
    try {      
      const result = await Videos.destroy({
        where: id ,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideosServices;