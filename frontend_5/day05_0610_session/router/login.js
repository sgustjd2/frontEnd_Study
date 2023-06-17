// route login 
const { 
  getLogin, 
  postLogin, 
  getSearchid, 
  postSearchid,  
  getSearchPwd,
  postSearchPwd,
  delCookies
} = require('../control/login');

const express = require('express');
const router =  express.Router();

// localhost:3000/login
router.get('/', getLogin )
router.post('/', postLogin )
router.delete('/', delCookies ); // 쿠키 지우는 역활

// localhost:3000/searchid 에서 다음으로 변경
// localhost:3000/login/searchid
// localhost:3000/login/searchpwd
router.get('/searchid', getSearchid) 
router.post('/searchid', postSearchid)
router.post('/searchpwd', postSearchPwd )
router.get('/searchpwd', getSearchPwd )

module.exports = router; 