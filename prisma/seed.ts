import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Nike Air Max",
        description: "Classic running shoe with air cushioning",
        price: 120.0,
        stock: 10,
        categoryId: 1,
      },
      {
        name: "Adidas Ultraboost",
        description: "High-performance running shoe",
        price: 150.0,
        stock: 15,
        categoryId: 1,
      },
      {
        name: "Puma RS-X",
        description: "Bold retro-inspired sneaker",
        price: 110.0,
        stock: 8,
        categoryId: 1,
      },
      {
        name: "Converse Chuck Taylor",
        description: "Timeless canvas sneakers",
        price: 60.0,
        stock: 20,
        categoryId: 2,
      },
      {
        name: "Vans Old Skool",
        description: "Classic skate shoe with side stripe",
        price: 70.0,
        stock: 18,
        categoryId: 2,
      },
      {
        name: "Nike Air Force 1",
        description: "Iconic streetwear sneaker",
        price: 100.0,
        stock: 12,
        categoryId: 1,
      },
      {
        name: "Adidas Stan Smith",
        description: "Minimal leather sneaker",
        price: 90.0,
        stock: 14,
        categoryId: 2,
      },
      {
        name: "Reebok Classic Leather",
        description: "Old-school running-inspired sneaker",
        price: 85.0,
        stock: 10,
        categoryId: 1,
      },
      {
        name: "New Balance 574",
        description: "Comfortable everyday sneaker",
        price: 95.0,
        stock: 11,
        categoryId: 1,
      },
      {
        name: "Jordan 1 Retro",
        description: "Legendary basketball sneaker",
        price: 180.0,
        stock: 7,
        categoryId: 3,
      },
    ],
  });
}

main()
  .then(() => console.log("Seeding done"))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
