import express from 'express';
import {
	homePage,
	aboutPage,
	destinationsPage,
	testimonialsPage,
} from '../controllers/pageController.js';

const router = express.Router();

// router.get('/', (req, res) => {
// 	// req: Lo que enviamos
// 	// res: Lo que Express nos responde
// 	res.render('home', {
// 		title: 'Home',
// 	});
// });

router.get('/', homePage);

router.get('/about', aboutPage);

router.get('/destinations', destinationsPage);

router.get('/testimonials', testimonialsPage);

export default router;
