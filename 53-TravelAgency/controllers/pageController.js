import { Destination } from '../models/Destination.js';

const homePage = (req, res) => {
	res.render('home', {
		title: 'Home',
	});
};

const aboutPage = (req, res) => {
	res.render('about', {
		title: 'About Us',
	});
};

const destinationsPage = async (req, res) => {
	// fetch data from database
	const destinations = await Destination.findAll();

	res.render('destinations', {
		title: 'Upcoming Destinations',
		destinations,
	});
};

const testimonialsPage = (req, res) => {
	res.render('testimonials', {
		title: 'Testimonials',
	});
};

// Show details of a destination
const detailsDestination = async (req, res) => {
	// console.log(req.params);
	const { slug } = req.params;

	try {
		const result = await Destination.findOne({ where: { slug } });
		res.render('destination', {
			title: 'Destination Details',
			result,
		});
	} catch (error) {
		console.log(error);
	}
};

export {
	homePage,
	aboutPage,
	destinationsPage,
	testimonialsPage,
	detailsDestination,
};
