import nodemailer from 'nodemailer';

const emailRegister = async(data) => {
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // console.log(data);
    const { email, token, name } = data;
    // Send email to the veterinarian
    const info = await transporter.sendMail({
        from: "VPM - Veterinary Practice Management",
        to: email,
        subject: "Confirm your email",
        text: `Hello ${name}, confirm your email to complete the registration`,
        html: `
            <h1>Hello ${name}, confirm your email to complete the registration</h1>
            <a href="${process.env.FRONTEND_URL}/confirm-account/${token}">Confirm your email</a>
            <p>If you didn't request this, please ignore this email</p>
        `
    });

    console.log("Message sent: %s", info.messageId);
}

export default emailRegister;

// Check 526 video to change the emailRegister