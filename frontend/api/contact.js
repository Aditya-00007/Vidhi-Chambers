import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone, courts, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    await transporter.sendMail({
      from: `"Vidhi Chambers Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f8f8f8; padding:30px;">
          <div style="max-width:700px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #ddd;">

            <div style="background:#304669; color:#fff; padding:20px;">
              <h2 style="margin:0;">Vidhi Chambers</h2>
              <p style="margin:5px 0 0;">New Contact Form Submission</p>
            </div>

            <div style="padding:25px;">

              <table style="width:100%; border-collapse:collapse;">

                <tr>
                  <td style="padding:10px; border:1px solid #ddd; font-weight:bold; width:180px;">
                    Full Name
                  </td>
                  <td style="padding:10px; border:1px solid #ddd;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px; border:1px solid #ddd; font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:10px; border:1px solid #ddd;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px; border:1px solid #ddd; font-weight:bold;">
                    Phone
                  </td>
                  <td style="padding:10px; border:1px solid #ddd;">
                    ${phone || "Not Provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px; border:1px solid #ddd; font-weight:bold;">
                    Court
                  </td>
                  <td style="padding:10px; border:1px solid #ddd;">
                    ${courts || "Not Selected"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px; border:1px solid #ddd; font-weight:bold;">
                    Message
                  </td>
                  <td style="padding:10px; border:1px solid #ddd;">
                    ${message.replace(/\n/g, "<br>")}
                  </td>
                </tr>

              </table>

              <p style="margin-top:30px; color:#666;">
                This inquiry was submitted through the Vidhi Chambers website.
              </p>

              <p style="color:#666;">
                Submitted on:
                ${new Date().toLocaleString("en-IN", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </p>

            </div>

          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send inquiry. Please try again later.",
    });
  }
}
