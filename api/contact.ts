import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
    });
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
    });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.MY_EMAIL,
      subject: 'Contact Form Submission - antonharbers.com',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
