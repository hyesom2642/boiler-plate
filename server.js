// * express 설정 
const express = require('express');
const app = express();
const port = 8080;

// * config 불러오기 
const config = require('./config/key');

// * mongoose 설정
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI ,{
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then( () => {
  console.log("mongoDB 연결")
}).catch( (error) => {
  console.log(error);
})

// * User 가져오기 
const { User } = require('./models/User');

// * body-parser
const bodyParser = require('body-parser');
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json 
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello Node.js, Nodemon을 사용 중 입니다.');
});

app.post('/register', (req, res) => {
  // 회원가입할 때 필요한 정보들을 clinet에서 가져오면 그것들을 데이터 데이터베이스에 넣어준다.
  // req.body에는 { id: ~~, password: ~~, ... }가  JSON형태로 들어있다.
  // body-parser가 있기 때문에 req.body가 가능        
  const user = new User(req.body);
  user.save((err, userInfo) => { // mongodb에서 오는 데이터들
    if(err) return res.json({ success: false, err}) // error발생시
    return res.status(200).json({ // error가 발생하지않고 성공(res.status(200))시
      success: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// 

// 1. npm install express --save
// mongodb cluster 생성
// 2. npm install mongoose --save
