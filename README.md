# diary-for-Vue
基于Vue+Webpack+Mongodb的个人账号日记本项目，可实现纯文本及图文记录

## 第一步 安装vue-cli
```
$ npm install -g vue-cli
```

## 第二步 创建项目
```
$ vue init webpack my-project
```

## containers是容器级组件 页面级组件
* views
* pages
> 每个页面级 以名字大写开头

## components 基础组件 可复用
* base

## 组件的特点 可维护 可复用
## 使用less `npm install less less-loader --save-dev`

## main.js最后会打包成js文件插入到index.html

## 后台提供接口
* vue+node 前后台分离 后端只需返回对应的数据
* ／api/getSliders

## axios
* 不支持跨域，不支持jsonp，如果想支持需要再安装jsonp模块，别人写的模块
```
npm install axios --save
```
```
axios.post().then(function(res){})
```

## vuex
```
 npm install vuex --save

```


## 安装express
```
npm install express --save
```

## 使用请求体解析器
```
 npm install body-parser --save

```

# 安装依赖
```
npm install cookie-parser body-parser express-session connect-mongo connect-flash multer ejs mongoose debug bootstrap -S
```
