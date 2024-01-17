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

export { homePage, aboutPage, destinationsPage, testimonialsPage };
