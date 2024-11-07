var express = require('express');
var router = express.Router();

/* Render the home page */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* Redirect '/home' to the root URL to avoid duplication */
router.get('/home', function(req, res, next) {
  res.redirect('/');
});

/* Render the about page */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me'
  });
});

/* Render the projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects'
  });
});

/* Render the contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me'
  });
});

module.exports = router;
