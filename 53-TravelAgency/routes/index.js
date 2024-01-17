import express from 'express';
import {
	homePage,
	aboutPage,
	destinationsPage,
	testimonialsPage,
	detailsDestination,
} from '../controllers/pageController.js';
import { saveTestimonial } from '../controllers/testimonialController.js';

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

router.get('/destinations/:slug', detailsDestination);

router.get('/testimonials', testimonialsPage);
router.post('/testimonials', saveTestimonial);

export default router;
