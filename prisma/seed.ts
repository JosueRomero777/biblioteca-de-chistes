import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  
    const push = await prisma.admin.create({
        data: {
            
            name:'Josue',
            lastname: 'Romero',
            email: 'rimero782@gmail.com',
            password: 'root'
        }
       
    });
    console.log({push})
}

    main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })

    .finally(async() => {
        await prisma.$disconnect();
    });


