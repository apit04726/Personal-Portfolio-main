const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // CORS Preflight headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Successful preflight" }),
    };
  }

  // Only allow POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse incoming JSON body
    const body = JSON.parse(event.body);
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ success: false, message: "Please fill in all details (Name, Email, and Message)." }),
      };
    }

    // Load environment variables set in Netlify
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER; // Your Gmail ID
    const smtpPass = process.env.SMTP_PASS; // Your Gmail App Password

    if (!smtpUser || !smtpPass) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          message: "Email configuration is missing on the server. Please set SMTP_USER and SMTP_PASS in Netlify dashboard."
        }),
      };
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Dynamically get base URL of the website
    const siteUrl = process.env.URL || "https://vishalbaria.com"; // Netlify sets process.env.URL automatically

    // Beautiful premium HTML email content (matching the PHP email design)
    const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Portfolio Message</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                background-color: #f6f5fa;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
            }
            .wrapper {
                width: 100%;
                background-color: #f6f5fa;
                padding: 50px 0;
            }
            .container {
                max-width: 890px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 15px 45px rgba(108, 52, 131, 0.08);
                border: 1px solid #eae6f2;
            }
            .top-bar {
                background: linear-gradient(90deg, #fbd9ad 0%, #b061df 50%, #6c3483 100%);
                height: 6px;
                width: 100%;
            }
            .header {
                background: linear-gradient(135deg, #1e0b29 0%, #3a154c 50%, #541c6e 100%);
                padding: 45px 30px;
                text-align: center;
            }
            .header-icon {
                display: inline-block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                background-color: rgba(251, 217, 173, 0.1);
                border: 2px solid #fbd9ad;
                border-radius: 50%;
                margin-bottom: 15px;
                color: #fbd9ad;
                font-size: 20px;
                font-weight: bold;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.5px;
            }
            .header p {
                margin: 8px 0 0 0;
                font-size: 14px;
                color: #fbd9ad;
                font-weight: 500;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .content {
                padding: 40px 35px;
                background-color: #ffffff;
            }
            .greeting {
                font-size: 16px;
                color: #4a3e56;
                margin-top: 0;
                margin-bottom: 30px;
                line-height: 1.6;
            }
            .card {
                background-color: #ffffff;
                border: 1px solid #f0ecf7;
                border-radius: 16px;
                padding: 30px;
                margin-bottom: 35px;
                box-shadow: 0 4px 25px rgba(108, 52, 131, 0.02);
            }
            .detail-section {
                border-bottom: 1px solid #f4effa;
                padding-bottom: 20px;
                margin-bottom: 20px;
            }
            .detail-section:last-child {
                border-bottom: none;
                padding-bottom: 0;
                margin-bottom: 0;
            }
            .label {
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                color: #8e44ad;
                letter-spacing: 1.5px;
                margin-bottom: 8px;
            }
            .value {
                font-size: 16px;
                color: #1f1b24;
                font-weight: 500;
                padding-left: 14px; /* Align with label text */
                word-wrap: break-word;
                word-break: break-word;
            }
            .value a {
                color: #6c3483;
                text-decoration: none;
                font-weight: 600;
                border-bottom: 1.5px solid rgba(108, 52, 131, 0.2);
            }
            .message-box {
                background-color: #fbfaff;
                border-left: 4px solid #b061df;
                border-radius: 4px 12px 12px 4px;
                padding: 20px;
                margin-top: 10px;
                margin-left: 14px; /* Align with label text */
                font-size: 15px;
                color: #4a4552;
                line-height: 1.7;
                white-space: pre-wrap;
                font-style: italic;
            }
            .cta-wrapper {
                text-align: center;
                margin-top: 10px;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #8e44ad 0%, #6c3483 100%);
                color: #ffffff !important;
                text-decoration: none;
                padding: 14px 35px;
                border-radius: 12px;
                font-size: 15px;
                font-weight: 600;
                text-align: center;
                box-shadow: 0 8px 24px rgba(108, 52, 131, 0.2);
            }
            .footer {
                background-color: #fbfaff;
                border-top: 1px solid #f0ecf7;
                padding: 30px;
                text-align: center;
            }
            .footer p {
                margin: 0;
                font-size: 13px;
                color: #8c8594;
                line-height: 1.6;
            }
            .footer a {
                color: #6c3483;
                text-decoration: none;
                font-weight: 700;
                border-bottom: 2px solid #fbd9ad;
                padding-bottom: 2px;
            }

            /* Mobile screens: 200px to 795px */
            @media screen and (max-width: 795px) {
                .wrapper {
                    padding: 15px 10px !important;
                }
                .container {
                    width: 100% !important;
                    max-width: 100% !important;
                    border-radius: 12px !important;
                    box-shadow: 0 8px 30px rgba(108, 52, 131, 0.05) !important;
                }
                .header {
                    padding: 30px 20px !important;
                }
                .header-icon {
                    width: 40px !important;
                    height: 40px !important;
                    line-height: 40px !important;
                    font-size: 16px !important;
                }
                .header h1 {
                    font-size: 22px !important;
                }
                .header p {
                    font-size: 12px !important;
                }
                .content {
                    padding: 25px 15px !important;
                }
                .greeting {
                    font-size: 14px !important;
                    margin-bottom: 20px !important;
                }
                .card {
                    padding: 15px !important;
                    margin-bottom: 25px !important;
                    border-radius: 12px !important;
                }
                .value {
                    font-size: 14px !important;
                    padding-left: 5px !important;
                    word-break: break-all !important;
                }
                .message-box {
                    padding: 12px !important;
                    margin-left: 5px !important;
                    font-size: 13.5px !important;
                    word-break: break-word !important;
                }
                .cta-button {
                    padding: 12px 25px !important;
                    font-size: 14px !important;
                    border-radius: 10px !important;
                }
                .footer {
                    padding: 20px 15px !important;
                }
                .footer p {
                    font-size: 11.5px !important;
                }
            }

            /* Tablet/Medium screens: 795px to 995px */
            @media screen and (min-width: 796px) and (max-width: 995px) {
                .wrapper {
                    padding: 30px 15px !important;
                }
                .container {
                    width: 95% !important;
                    max-width: 95% !important;
                }
                .header {
                    padding: 35px 25px !important;
                }
                .content {
                    padding: 30px 25px !important;
                }
                .card {
                    padding: 20px !important;
                }
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="top-bar"></div>
                <div class="header">
                    <div class="header-icon">✉</div>
                    <h1>New Connection Request</h1>
                    <p>Personal Portfolio Inquiry</p>
                </div>
                <div class="content">
                    <p class="greeting">Hello Vishal, you have received a new contact submission from your portfolio website. Here are the sender's details:</p>
                    
                    <div class="card">
                        <div class="detail-section">
                            <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
                                <tr>
                                    <td style="padding-right: 6px; vertical-align: middle; line-height: 1;">
                                        <span style="color: #fbd9ad; font-size: 18px; font-family: Arial, sans-serif; line-height: 1;">&#8226;</span>
                                    </td>
                                    <td class="label" style="margin: 0; padding: 0; line-height: 1; vertical-align: middle;">
                                        Sender Name
                                    </td>
                                </tr>
                            </table>
                            <div class="value">${name}</div>
                        </div>
                        
                        <div class="detail-section">
                            <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
                                <tr>
                                    <td style="padding-right: 6px; vertical-align: middle; line-height: 1;">
                                        <span style="color: #fbd9ad; font-size: 18px; font-family: Arial, sans-serif; line-height: 1;">&#8226;</span>
                                    </td>
                                    <td class="label" style="margin: 0; padding: 0; line-height: 1; vertical-align: middle;">
                                        Email Address
                                    </td>
                                </tr>
                            </table>
                            <div class="value">
                                <a href="mailto:${email}">${email}</a>
                            </div>
                        </div>
                        
                        <div class="detail-section">
                            <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
                                <tr>
                                    <td style="padding-right: 6px; vertical-align: middle; line-height: 1;">
                                        <span style="color: #fbd9ad; font-size: 18px; font-family: Arial, sans-serif; line-height: 1;">&#8226;</span>
                                    </td>
                                    <td class="label" style="margin: 0; padding: 0; line-height: 1; vertical-align: middle;">
                                        Message Detail
                                    </td>
                                </tr>
                            </table>
                            <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
                        </div>
                    </div>

                    <div class="cta-wrapper">
                        <a href="mailto:${email}?subject=Re: Your portfolio inquiry" class="cta-button">Reply Directly</a>
                    </div>
                </div>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} <a href="${siteUrl}">Vishal Baraiya</a>. All rights reserved.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Beautiful premium HTML thank you email for the user
    const thankYouHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Reaching Out</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                background-color: #f6f5fa;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
            }
            .wrapper {
                width: 100%;
                background-color: #f6f5fa;
                padding: 50px 0;
            }
            .container {
                max-width: 900px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 15px 45px rgba(108, 52, 131, 0.08);
                border: 1px solid #eae6f2;
            }
            .top-bar {
                background: linear-gradient(90deg, #fbd9ad 0%, #b061df 50%, #6c3483 100%);
                height: 6px;
                width: 100%;
            }
            .header {
                background: linear-gradient(135deg, #1e0b29 0%, #3a154c 50%, #541c6e 100%);
                padding: 45px 30px;
                text-align: center;
            }
            .header-icon {
                display: inline-block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                background-color: rgba(251, 217, 173, 0.1);
                border: 2px solid #fbd9ad;
                border-radius: 50%;
                margin-bottom: 15px;
                color: #fbd9ad;
                font-size: 20px;
                font-weight: bold;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.5px;
            }
            .header p {
                margin: 8px 0 0 0;
                font-size: 14px;
                color: #fbd9ad;
                font-weight: 500;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .content {
                padding: 40px 35px;
                background-color: #ffffff;
            }
            .greeting {
                font-size: 16px;
                color: #4a3e56;
                margin-top: 0;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            .card {
                background-color: #ffffff;
                border: 1px solid #f0ecf7;
                border-radius: 16px;
                padding: 30px;
                margin-bottom: 35px;
                box-shadow: 0 4px 25px rgba(108, 52, 131, 0.02);
            }
            .message-preview {
                background-color: #fbfaff;
                border-left: 4px solid #b061df;
                border-radius: 4px 12px 12px 4px;
                padding: 20px;
                margin-top: 10px;
                font-size: 15px;
                color: #4a4552;
                line-height: 1.7;
                white-space: pre-wrap;
                font-style: italic;
            }
            .footer {
                background-color: #fbfaff;
                border-top: 1px solid #f0ecf7;
                padding: 30px;
                text-align: center;
            }
            .footer p {
                margin: 0;
                font-size: 13px;
                color: #8c8594;
                line-height: 1.6;
            }
            .footer a {
                color: #6c3483;
                text-decoration: none;
                font-weight: 700;
                border-bottom: 2px solid #fbd9ad;
                padding-bottom: 2px;
            }

            /* Mobile screens: 200px to 795px */
            @media screen and (max-width: 795px) {
                .wrapper {
                    padding: 15px 10px !important;
                }
                .container {
                    width: 100% !important;
                    max-width: 100% !important;
                    border-radius: 12px !important;
                    box-shadow: 0 8px 30px rgba(108, 52, 131, 0.05) !important;
                }
                .header {
                    padding: 30px 20px !important;
                }
                .header-icon {
                    width: 40px !important;
                    height: 40px !important;
                    line-height: 40px !important;
                    font-size: 16px !important;
                }
                .header h1 {
                    font-size: 22px !important;
                }
                .header p {
                    font-size: 12px !important;
                }
                .content {
                    padding: 25px 15px !important;
                }
                .greeting {
                    font-size: 14px !important;
                    margin-bottom: 20px !important;
                }
                .card {
                    padding: 15px !important;
                    margin-bottom: 25px !important;
                    border-radius: 12px !important;
                }
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="top-bar"></div>
                <div class="header">
                    <div class="header-icon">✓</div>
                    <h1>Thank You, ${name}!</h1>
                    <p>Message Received</p>
                </div>
                <div class="content">
                    <p class="greeting">Hi <strong>${name}</strong>,</p>
                    <p class="greeting">Thank you for reaching out! I have successfully received your message and will get back to you as soon as possible (usually within 24 hours).</p>
                    
                    <p class="greeting" style="margin-top: 30px; margin-bottom: 0;">
                        Best regards,<br>
                        <strong>Vishal Baraiya</strong>
                    </p>
                </div>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} <a href="${siteUrl}">Vishal Baraiya</a>. All rights reserved.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Email configuration details (to Admin)
    const mailOptions = {
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: "vishalbaria7096@gmail.com", // Destination email
      replyTo: email, // Reply goes to sender
      subject: `New Portfolio Message from ${name}`,
      html: emailHtml,
    };

    // Email configuration details (Thank you to User)
    const thankYouMailOptions = {
      from: `"Vishal Baraiya" <${smtpUser}>`,
      to: email, // Send to the user who filled the form
      subject: `Thank you for reaching out, ${name}!`,
      html: thankYouHtml,
    };

    // Send both emails in parallel using Promise.all
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(thankYouMailOptions),
    ]);

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true, message: "Message sent successfully!" }),
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, message: "Server failed to send email. " + error.message }),
    };
  }
};
