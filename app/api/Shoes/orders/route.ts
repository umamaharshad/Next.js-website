import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, items } = body;

    if (!userId || !items || items.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid data" }), { status: 400 });
    }

    const total = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    const order = await prisma.order.create({
      data: {
        userId,
        total,
        status: "PENDING",
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });

    return new Response(JSON.stringify({ message: "Order placed", order }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
