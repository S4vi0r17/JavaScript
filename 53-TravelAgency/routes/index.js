import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	// req: Lo que enviamos
	// res: Lo que Express nos responde
	res.render('home', {
		title: 'Home',
	});
});

router.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Us',
	});
});

router.get('/destinations', (req, res) => {
	res.render('destinations', {
		title: 'Destinations',
	});
});

router.get('/testimonials', (req, res) => {
	res.render('testimonials', {
		title: 'Testimonials',
	});
});

export default router;
