const express = require('express');
const app = express();
const PORT = 3000;

// Cria uma rota principal que responde à nossa mensagem de teste
app.get('/', (req, res) => {
  // Esta é a mensagem exata que o nosso workflow está verificando
  res.send('Minha aplicação Docker está funcionando!');
});

// Inicia o servidor e o faz "escutar" na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});