import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('[ping.ts] PING HANDLER STARTED');
  res.status(200).json({ message: 'pong' });
} 