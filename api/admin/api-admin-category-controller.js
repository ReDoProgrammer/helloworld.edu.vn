const router = require('express').Router();
const Category = require('../../models/category-model');
const {authenticateAdminToken} = require('../../middlewares/middleware');
const {fullUrl} = require('../../utils/ultility');

router.get('/',authenticateAdminToken,(req,res)=>{
    Category.find({})
    .exec()
    .then(categories=>{
        res.status(200).json({
            msg:'Load danh sách chủ đề thành công!',
            categories:categories
        });
    })
    .catch(err=>{
        console.log(fullUrl(req));
        console.log(`Lỗi load danh sách chủ đề: ${err.message}`);
        res.status(500).json({
            msg:'Load danh sách chủ đề thất bại!',
            error:err.message
        });
    })
});

router.post('/',authenticateAdminToken,(req,res)=>{
    let category = new Category();
    
})

router.post('/',)



module.exports = router;