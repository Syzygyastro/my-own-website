// src/app/api/form/route.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  if (req.method === 'POST') {

    const body = await req.json();
    console.log('POST request received:', body);
    
    const { name, email, message } = body;
    console.log('', name, email, message);

    try {
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });

      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}

export function GET(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET requests here
}

export function PUT(req: NextApiRequest, res: NextApiResponse) {
  // Handle PUT requests here
}

export function DEL(req: NextApiRequest, res: NextApiResponse) {
  // Handle DELETE requests here
}
