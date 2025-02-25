var express = require('express');
var router = express.Router();
var user = require("../Controller/usercontroller");

router.get("/", user.index);
router.post("/Add", user.Add);
router.get("/one_data", user.Get_id);

module.exports = router;
