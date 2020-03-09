const express = require('express')
const app = express();
app.get('/',(req, res)=>{
  res.status(200).send({message: 'Olá Mundo esse e meu rep clonado!'});
})
app.listen(4001, ()=>{
  console.log('Api rodando na porta 4001');
})      
