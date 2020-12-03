const router = require('express').Router();
const User = require('../../models/user-model');

router.get('/init',(req,res)=>{
    User.countDocuments({})
    .exec()
    .then(count=>{
        if(count == 0){
            let user = new User();
            user.username = 'root';
            user.password = 'root';
            user.fullname = 'Administrator';
            user.is_admin = true;
            user.save()
            .then(admin=>{
                console.log(admin);
            })
            .catch(error=>{
                console.log(`Lưu root user thất bại. Lỗi: ${error.message}`);
            })
        }
    })
    .catch(err=>{
        console.log(`Khởi tạo root user thất bại. Lỗi: ${err.message}`);
    })
})

module.exports = router;