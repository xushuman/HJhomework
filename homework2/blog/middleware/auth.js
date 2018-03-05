const Auth = (req, res, next) => {
    let user = req.session.loginUser;
    if(user){
        next();
    }else{
        res.redirect('/users/login');
    }
}
module.exports = Auth;