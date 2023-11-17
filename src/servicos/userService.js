const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(data) {
  try {
    const newUser = await prisma.user.create({ data });
    return newUser;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
}


module.exports = {
  createUser
};
