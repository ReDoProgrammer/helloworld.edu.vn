const router = require('express').Router();
const User = require('../../models/user-model');
const {authenticateAdminToken} = require('../../middlewares/middleware');
const {fullUrl} = require('../../utils/ultility');




router.get('/',authenticateAdminToken,(req,res)=>{
    User.find({})
    .exec()
    .then(users =>{
        res.status(200).json({
            msg:'Load danh sách user thành công!',
            users:users
        });
    })
    .catch(err=>{
        console.log(fullUrl(req));
        console.log(`Load danh sách user thất bại. Lỗi: ${err.message}`);
        res.status(500).json({
            msg:'Load danh sách users thất bại!',
            error:err.message
        });
    });
})

module.exports = router;


