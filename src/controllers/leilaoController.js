const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getLeilao(req, res) {
  try {
    const users = await prisma.user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar leilao' });
  }
}

async function createLeilao(req, res) {
  
}

async function updateLeilao(req, res) {
  
}

async function deleteLeilao(req, res) {
  
}

module.exports = {
  getLeilao,
  createLeilao,
  updateLeilao,
  deleteLeilao
};