import { PrismaClient } from "@prisma/client";

declare global{
  var prisma: PrismaClient | undefined;
}

if(process.env.NODE_ENV == 'production'){
  prisma = global.prisma || new PrismaClient();
} else{
  global.prisma = prisma;
}

export default prisma;