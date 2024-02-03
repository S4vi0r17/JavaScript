import nodemailer from 'nodemailer';

const emailForgot = async(data) => {
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
        subject: "Reset your password",
        text: `Hello ${name}, reset your password to regain access to your account`,
        html: `
            <h1>Hello ${name}, reset your password to regain access to your account</h1>
            <a href="${process.env.FRONTEND_URL}/forgot-password/${token}">Reset your password</a>
            <p>If you didn't request this, please ignore this email</p>
        `
    });

    console.log("Message sent: %s", info.messageId);
}

export default emailForgot;

// Check 526 video to change the emailRegister