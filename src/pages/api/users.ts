import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            const user = await prisma.email.create({
                data: { email }
            });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Failed to create user" });
        }
    } else if (req.method === 'GET') {
        try {
            const users = await prisma.email.findMany();

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
