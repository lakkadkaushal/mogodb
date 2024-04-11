var express = require('express');
const usermodel = require('../model/usermodel');
var router = express.Router();
let user = require("../controller/usercontroller");

/* GET home page. */
router.get('/', user.find_data);
router.post('/', user.insert_data);
router.post('/update/:id', user.update_data);
router.post('/delete/:id', user.delete_data);

module.exports = router;
