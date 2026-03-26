import "server-only";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render, pretty } from "@react-email/render";
import AdminEmail from "@/emails/contact-us/AdminEmail";
import ClientEmail from "@/emails/contact-us/ClientEmail";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { name, email, phoneNumber, service, timeline, details } =
    await request.json();

  if (!name || !email || !phoneNumber || !service || !timeline || !details)
    return NextResponse.json(
      { status: "ERROR", message: "Missing required fields" },
      { status: 400 },
    );

  const adminEmailHtml = await pretty(
    await render(
      AdminEmail({ name, email, phoneNumber, service, timeline, details }),
    ),
  );
  const userEmailHtml = await pretty(await render(ClientEmail({ name })));

  // Email to admin
  await transporter.sendMail({
    from: `"Hazem Ahmed | UI/UX Designer" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: "New Contact Form Submission",
    html: adminEmailHtml,
  });

  // Auto-reply to client
  await transporter.sendMail({
    from: `"Hazem Ahmed | UI/UX Designer" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Your message has been received",
    html: userEmailHtml,
  });

  return NextResponse.json(
    {
      status: "SUCCESS",
      data: { name, email, phoneNumber, service, timeline, details },
      message: "Message sent successfully",
    },
    { status: 200 },
  );
}
