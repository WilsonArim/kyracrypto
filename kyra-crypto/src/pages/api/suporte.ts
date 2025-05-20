import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('[suporte.ts] MINIMAL HANDLER STARTED');
  if (req.method === 'GET') {
    console.log('[suporte.ts] MINIMAL HANDLER - GET request');
    res.status(200).json({ message: 'Minimal API Test OK' });
  } else {
    console.log('[suporte.ts] MINIMAL HANDLER - Method not GET');
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  // Nenhum return explícito aqui, o Next.js deve lidar com o fim da resposta.
} 