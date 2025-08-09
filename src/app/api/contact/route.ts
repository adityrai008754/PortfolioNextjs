import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Configure transporter for Gmail
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "adityrai7692@gmail.com",
      pass: "qgmnnmfysffsvumi", // your Gmail App Password
    },
    tls: {
      rejectUnauthorized: false, // for localhost testing
    },
  });

  try {
    await transporter.sendMail({
      from: 'adityrai7692@sendermail.com', // Can be custom, but must be verified in production
      to: "adityrai008754@gmail.com", // receiver
      subject: `${subject} - Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log("Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
