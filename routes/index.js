
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Perfumes', userAgent: req.headers['user-agent'] });
};