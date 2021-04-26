import { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@util/mailchimp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const list = await mailchimp.lists.getList(
      process.env.MAILCHIMP_SUBSCRIBER_LIST_ID
    );

    res.status(200).json({ count: list.stats.member_count });
  } catch {
    res.status(400).json({ message: 'There has been an error' });
  }
}
