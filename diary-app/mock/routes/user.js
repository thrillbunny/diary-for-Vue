let express=require('express');
let router=express.Router();
let {User} =require('../model');
//解析上传文件的中间件
//只会处理enctype="multipart/form-data"
let multer=require('multer');
//调用此multer方法，传入配置参数，在参数中指定上传后的文件保存位置
//此处的.指代的是当前目录，其实指的是server.js（启动文件）的所在目录
let upload=multer({dest:'./public'});

router.get('/signup',(req,res)=>{
    //res.locals 真正渲染模版的对象
    //参数1是相对于模版的根目录的相对路径
    res.render('user/signup');
});
//提交用户注册表单
//upload.single('avatar')会得到一个中间件函数，此中间件函数会在路由匹配之后执行
//single意思是此表单里只有一个文件字段，字段的名称叫avatar
//引入此中间件之后，req.file指向上传的文件对象，req.body存放着所有其他的文本类型的字段
router.post('/signup',upload.single('avatar'),(req,res)=>{
    //得到bodyparser中间件解析得到的user中间件
    let user=req.body;
    user.avatar=`/${req.file.filename}`;
    //找一个数据库里有没有跟自己用户名相同的用户
    User.findOne({username:user.username},(err,oldUser)=>{
        if(err) {
            //写入一个错误的消息
            req.flash('error',err.toString());
            res.redirect('back');
        }
        else {
            if(oldUser){
                //写入一个失败的消息
                req.flash('error','用户名已存在');
                res.redirect('back');
            }
            else {
                User.create(user,(err,doc)=>{
                    if(err) {
                        //写入一个错误的消息
                        req.flash('error',err.toString());
                        res.redirect('back');
                    }
                    else {
                        //写入一个成功的消息
                        req.flash('success','注册成功');
                        res.redirect('/user/signin');
                    }
                })
            }
        }
    });
});
router.get('/signin',(req,res)=>{
    res.render('user/signin',{title:'用户登陆'});
});
router.post('/signin',(req,res)=>{
    let user=req.body;
    //找一个数据库里有没有跟自己用户名相同的用户
    User.findOne(user,(err,oldUser)=>{
        if(err) {
            req.flash('error',err.toString());
            res.redirect('back');
        }
        else {
            if(oldUser){
                req.flash('success','登陆成功');
                //如果登陆成功之后，会把查询到的用户对象赋给会话对象的user属性
                req.session.user=oldUser;
                res.redirect('/');
            }
            else {
                req.flash('error','用户名或密码错误');
                res.redirect('back');

            }
        }
    });
});
router.get('/signout',(req,res)=>{
    //把session的user属性设置为null就变成了未登录态
    req.session.user=null;
    res.redirect('/user/signin');
});

module.exports=router;