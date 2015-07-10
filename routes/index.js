var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Quiz', errors: [] });
});
router.get('/author', function(req, res, next) {
	res.render('author',
		{ author: 'Ramón M. Gómez',
		  photo: 'http://www.informatica.us.es/~ramon/ramon.jpg',
		  errors: []
		});
});

// Carga de identificadores de preguntas.
router.param('quizId', quizController.load);

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);

module.exports = router;
