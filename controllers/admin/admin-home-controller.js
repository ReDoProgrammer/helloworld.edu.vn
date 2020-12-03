const router = require('express').Router();
const {authenticateAdminToken} = require('../../middlewares/middleware');

router.get('/',(req,res)=>{
    res.render('admin/home/index',{
        layout:'layouts/backend_layout'
    });
})

router.get('/login',(req,res)=>{
    res.render('layouts/admin_login',{
        layout:'layouts/admin_login'
    })
})

module.exports = router;
