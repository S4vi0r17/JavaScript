const saveTestimonial = async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const errors = [];

    if (nombre.trim() === '') {
        errors.push({ message: 'The name field is required' });
    }

    if (email.trim() === '') {
        errors.push({ message: 'The email field is required' });
    }

    if (mensaje.trim() === '') {
        errors.push({ message: 'The message field is required' });
    }

    if (errors.length > 0) {
        // Show the view with errors
        res.render('testimonials', {
            title: 'Testimonials',
            errors,
            nombre,
            email,
            mensaje,
        });
    } else {
        // Save in database
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje,
            });

            res.redirect('/testimonials');
        } catch (error) {
            console.log(error);
        }
    }

};

export { saveTestimonial };