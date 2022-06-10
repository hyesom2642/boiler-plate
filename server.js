// * express 설정 
const express = require('express');
const app = express();
const port = 8080;

// * mongoose 설정
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kimhyesom:rlaguswn123@cluster0.uk1ok.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then( () => {
  console.log("mongoDB 연결")
}).catch( (error) => {
  console.log(error);
})


app.get('/', (req, res) => {
  res.send('Hello Node.js!');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// 

// 1. npm install express --save
// mongodb cluster 생성
// 2. npm install mongoose --save
