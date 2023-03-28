let post = require('./../database/posts.json')

exports.getPostInfo = async () => {
    try {
        return post
    } catch (error) {
        return false
    }
}