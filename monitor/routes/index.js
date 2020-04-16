const jobs = require('./../middlewares/job')
const dependencies = require('./../middlewares/dependency')
const router = require('express').Router()


// home page
router.get('/', function(req, res) {
    res.render('pages/index');
});

// job page
router.get('/job', jobs.getJobs, function(req, res) {
    var array = []
  
    for(var i in req.body){
      array.push(req.body[i])
    }
  
    res.render('pages/job', {json:array})
  })
  
// dependency page
router.get('/dependency', dependencies.getDependencies, function(req, res) {
    var array = []
  
    for(var i in req.body){
      array.push(req.body[i])
    }
  
    res.render('pages/dependency', {json:array})
  })

// chantier page 
router.get('/chantier', function(req, res) {
    res.render('pages/chantier')
})
  
// ressource page 
router.get('/ressource', function(req, res) {
    res.render('pages/ressource')
})

module.exports = router
