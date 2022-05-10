import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9678dd24f72275",
    pass: "3da32239540672"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipa Feedget <oi@feedget.com>',
      to: 'Diogo Rodrigues <dmeneres@gmail.com>',
      subject,
      html: body,
    })
  } 
}