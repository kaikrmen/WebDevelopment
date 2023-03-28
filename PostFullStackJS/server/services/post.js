const post = require('../models/post')

module.exports.getAllPosts = async () => {
    const info = await post.getPostInfo()
    if(info == false) {
      throw "ERROR";
    }
    else {
      return info;
    }
}

