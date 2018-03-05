const ArticleModel = require('../models/article');
const CategoryModel = require("../models/category");
const Home = {
    /**
     * 首页
     */
    index:(req, res, next)=>{

        //列表 分页 搜索 排序

        //搜索关键字
        let key = req.query.key;
        let regex = new RegExp(key);

        //分页
        let count = 0;
        let limit = 2;
        let page = req.query.page?req.query.page:1;
        let totalPage = 0;
        let where = {};
        if(key){
            where = {title:{$regex:regex}};
        }
        ArticleModel.find(where).count().then(doc=>{
            count = doc;
            totalPage = Math.ceil(count/limit);
            //console.log(key);
            ArticleModel.find(where).skip((page-1)*limit).limit(2).sort({create_at:'desc'}).then(doc=>{
               // res.json(doc);
                res.render('index', {
                    list:doc,
                    count:count,
                    page:page,
                    totalPage:totalPage
                });
            })
        });
    },
    /**
     * 栏目页
     */
    category:(req, res, next)=>{
        let categoryPath = req.params.category;
        console.log(categoryPath);
        //列表 分页 搜索 排序
        CategoryModel.findOne({path:'/'+categoryPath}).then(doc=>{
            //搜索关键字
            let key = req.query.key;
            let regex = new RegExp(key);

            //分页
            let count = 0;
            let limit = 2;
            let page = req.query.page?req.query.page:1;
            let totalPage = 0;
            let where = {
                category_id:doc._id
            };
            if(key){
                where.title = {$regex:regex};
            }
            ArticleModel.find(where).count().then(doc=>{
                count = doc;
                totalPage = Math.ceil(count/limit);
                //console.log(key);
                ArticleModel.find(where).skip((page-1)*limit).limit(2).sort({create_at:'desc'}).then(doc=>{
                    // res.json(doc);
                    res.render('index', {
                        list:doc,
                        count:count,
                        page:page,
                        totalPage:totalPage
                    });
                })
            });
        })
    }
};
module.exports = Home;