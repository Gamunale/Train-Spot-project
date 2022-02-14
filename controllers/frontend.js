const router = require('express').Router();
const db = require('../models');

router.get("/profile/:id",(req,res)=>{
    db.User.findOne({
        where:{
            id:req.params.id
        },
    }).then(dbUser=>{
        const hbsUser = dbUser.toJSON();
        res.render("profile",hbsUser)
    })
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/main',(req,res)=>{
    if(!req.session.user){
        res.redirect('/login')
    } else {
        db.User.findOne({
            where:{
                id:req.session.user.id
            },
        }).then(userObj=>{
            console.log(userObj)
            const userObjJSON = userObj.toJSON();
            console.log('-------------')
            console.log(userObjJSON)
            res.render("main",userObjJSON)
        })
    }
})

module.exports = router;