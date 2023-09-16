import { PrismaClient } from "@prisma/client";

globalThis.prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalThis.prisma = globalThis.prisma;

module.exports = globalThis.prisma;
