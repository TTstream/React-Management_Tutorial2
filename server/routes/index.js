var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send(
        [
            {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'옹',
            'birthday':'969666',
            'gender':'남자',
            'job':'대학생'
          },
          {
            'id':2  ,
            'image':'https://placeimg.com/64/64/2',
            'name':'홍길',
            'birthday':'321232',
            'gender':'남자',
            'job':'프로그래머'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name':'현아',
            'birthday':'123',
            'gender':'남자',
            'job':'펀드매니저'
          }
          ]
    );
});
module.exports = router;