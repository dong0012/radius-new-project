// src/app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

// 处理 POST 请求
export async function POST(req) {
  const { name, email, message, phone } = await req.json();

  // 创建邮件发送器
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,  // 465端口使用SSL加密
    auth: {
      user: 'radiusmap4less@gmail.com',  // 发送者邮箱
      pass: 'czgt qooa uodf frkb'  // 发送者邮箱的授权码
    }
  });

  try {
    // 配置邮件内容
    await transporter.sendMail({
      from: 'radiusmap4less@gmail.com',  // 发件人地址
      to: 'radiusmap4less@gmail.com',    // 收件人地址
      subject: `New message from ${name}`,  // 邮件主题
      text: `You have received a new message from ${name} (${email}):
  
      Message:
      ${message}`,  // 邮件的文本内容
      html: `
        <h1 style="color: #333;">New Message from ${name}</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p style="border: 1px solid #eee; padding: 10px; background-color: #f9f9f9;">${message}</p>
      `,  // 邮件的HTML内容
      replyTo: email  // 回复邮件的地址
    });

    // 发送成功
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    // 发送失败
    console.error('Error during sendMail:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
}

// 如果其他 HTTP 方法（例如 GET）也需要处理，可以按需添加

// 处理 GET 请求（例如返回一个简单的消息）
export async function GET(req) {
  return new Response(JSON.stringify({ message: 'API is working!' }), { status: 200 });
}
