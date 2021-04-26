import { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@util/mailchimp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mail } = req.body;

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_SUBSCRIBER_LIST_ID,
      {
        email_address: mail,
        status: 'pending',
      }
    );

    res.status(200).json({ mail });
  } catch {
    res.status(400).json({ message: 'There has been an error' });
  }
}
