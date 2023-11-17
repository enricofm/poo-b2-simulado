const express = require('express');
const userRoute = require('./userRoute');
const leilaoRoute = require('./leilaoRoute');
const lanceRoute = require('./lanceRoute');

const app = express();
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/leilao', leilaoRoute);
app.use('/api/lance', lanceRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
