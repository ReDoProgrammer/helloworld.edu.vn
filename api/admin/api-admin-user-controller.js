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

router.get('/profile',authenticateAdminToken,(req,res)=>{
    User.findById(req.user._id)
    .select("fullname avatar is_admin")
    .exec((err, user) => {
      if (err) return res.sendStatus(404);
      if (user == null) return res.sendStatus(403);
      return res.status(200).json({
        profile: user,
        msg: "load profile successfully",
      });
    });
})


module.exports = router;


