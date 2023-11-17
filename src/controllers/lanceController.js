const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllLances(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.json(lances);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar lance' });
  }
}

async function createLance(req, res) {
  
}

async function updateLance(req, res) {
  
}

async function deleteLance(req, res) {
  
}

module.exports = {
  getAllLances,
  createLance,
  updateLance,
  deleteLance
};