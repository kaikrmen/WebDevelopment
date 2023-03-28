const express = require('express');
const app = express();
const port = 8090;
const postRoute = require("./routes/postRoute")
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/api', postRoute)

const start = () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();