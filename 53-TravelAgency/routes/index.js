import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	// req: Lo que enviamos
	// res: Lo que Express nos responde
	res.send('home');
});

router.get('/about', (req, res) => {
	// req: Lo que enviamos
	// res: Lo que Express nos responde
	res.send('about');
});

router.get('/contact', (req, res) => {
	// req: Lo que enviamos
	// res: Lo que Express nos responde
	res.send('contact');
});

export default router;
