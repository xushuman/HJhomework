const CategoryModel = require("../models/category");
const Locals = (req, res, next) => {
    CategoryModel.find({is_nav:1}).then(doc=>{
        res.locals.categoryList = doc
        res.locals.error = req.flash('error');
        res.locals.loginUser = req.session.loginUser;
        next();
    });
}
module.exports = Locals;