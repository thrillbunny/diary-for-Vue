let express=require('express');
let router=express.Router();
let {Diary} =require('../model');

//增加文章
router.post('/add',(req,res)=>{
    let diaryAdd=req.body;
    diaryAdd.author=req.session.user._id;
    Diary.findOne({title:diaryAdd.title},(err,oldDiaryTitle)=>{
        if(err){
            req.flash('error',err.toString());
            res.send({'error':err.toString()});
        }
        else {
            console.log(oldDiaryTitle);
            if(oldDiaryTitle){
                req.flash('error','标题名重复');
                res.send({'error':'标题名重复'});
            }
            else {
                Diary.create(diaryAdd,(err,doc)=>{
                    if(err) {
                        req.flash('error',err.toString());
                        res.send({'error':err.toString()});
                    }
                    else {
                        req.flash('success','添加文章成功');
                        res.send({'success':'添加文章成功'});
                        //res.redirect('/');
                    }
                })
            }
        }
    })
});

//查看日记列表
router.get('/list',(req,res)=>{
    //populate把一个属性从ID变成此ID对应的对象
    Diary.find({author:req.session.user._id}).populate('author').exec((err,articles)=>{
        res.send(articles)//从模版根目录下面找
    });
});
/*
//修改文章
router.get('/update/:_id',(req,res)=>{
    let _id=req.params._id;
    Category.find({user:req.session.user._id},(err,categories)=>{
        Article.findById(_id).exec((err,article)=>{
            res.render('article/add',{article,categories,title:'修改文章'});
        })
    })
});
router.post('/update/:_id',(req,res)=>{
    let _id=req.params._id;
    let article=req.body;
    Article.update({_id},article,(err,result)=>{
        if(err){
            req.flash('error',err.toString());
            res.redirect('back');
        }
        else {
            req.flash('success','修改文章成功');
            res.redirect('/');
        }
    })
});
//删除文章
router.get('/delete/:_id',(req,res)=>{
    let _id=req.params._id;
    Article.remove({_id},(err,result)=>{
        if(err) {
            req.flash('error',err.toString());
            res.redirect('back');
        }
        else {
            req.flash('success','删除成功');
            res.redirect('/');
        }
    })
});
//展示文章
router.get('/detail/:_id',(req,res)=>{
    let _id=req.params._id;
    Article.findById(_id).populate('category').populate('author').exec((err,article)=>{
        res.render('article/detail',{article});
    })
});
*/
module.exports=router;