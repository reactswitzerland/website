// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Because Mailchimp cant manage to export their types
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default mailchimp;
