const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

async function createUser(req, res) {
  
}

async function updateUser(req, res) {
  
}

async function deleteUser(req, res) {
  
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};