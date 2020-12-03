const router = require('express').Router();



router.get('/',(req,res)=>{
    res.render('admin/category/index',{
        layout:'layouts/backend_layout'
    });
})

module.exports = router;