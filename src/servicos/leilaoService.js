const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createLeilao(data) {
  try {
    const newLeilao = await prisma.leilao.create({ data });
    return newLeilao;
  } catch (error) {
    throw new Error('Erro ao criar leilao');
  }
}

module.exports = {
  createLeilao
};
