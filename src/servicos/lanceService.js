const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createLance(data) {
  try {
    const newLance = await prisma.lance.create({ data });
    return newLance;
  } catch (error) {
    throw new Error('Erro ao criar lance');
  }
}

module.exports = {
  createLance
};
