const fs = require("fs");
const post = require('../services/post')


const addToFile = async (data) => {
    let fileContents =  fs.readFileSync('./../server/database/posts.json');
    fileContents = JSON.parse(fileContents);
    fileContents.push(data);
    fs.writeFile('./../server/database/posts.json', JSON.stringify(fileContents, null, 2), function(err) {
              if (err) throw err;
              console.log('complete');
         }
    );
};

module.exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await post.getAllPosts()
        res.status(201).json(allPosts)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports.getOnePost = async (req, res) => {
    const id = req.params.id
    let fileContents =  fs.readFileSync('./../server/database/posts.json');
    fileContents = JSON.parse(fileContents);
    if(isNaN(id)){
        res.status(404).json({message: 'Invalid post id provided'})
    } 
    if(id < 0 || id > fileContents.length-1) {
       res.status(404).json({message: 'No post found'})
    }
    // fileContents.findIndex(post => post.id === id)
    res.status(201).send(fileContents[id])

}

module.exports.createPost = async (req, res) => { 
    try {
        const {title, autor, date, description} = req.body
        const data = {
            title,
            autor,
            date,
            description
        }
        if (!title.length || !description.length || !date.length || !autor.length) {
           return res.status(400).json({message: 'Required fields missing'}) 
        }
        await addToFile(data)
      
        res.status(201).json({message:'Post created successfully'})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}