const {Post} = require("../models");

const dashboardController = {

    createNewPost: (req, res) => {
        console.log(req.body);
        Post.create({
            title: req.body.title,
            content_txt: req.body.content_txt,
            user_id: req.session.user_id,
        }).then((dbData) => {
            res.render('homepage');
        });
    },

    showAllUserPosts: (req,res) => {

    },

    editPost: (req,res) => {

    },

    showAllPostsHomepage: (req, res) => {
        Post.findAll().then((dbPostData) => {
            //console.log(dbPostData);
            res.render('homepage', dbPostData);
            // res.render('homepage', dbPostData);
        });
    }

};

module.exports = dashboardController;