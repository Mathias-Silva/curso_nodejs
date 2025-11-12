import express from 'express';

const servidor = express();

servidor.get('/helloworld', (req, resp) => {
    resp.send('Hello world!!');
});

servidor.get('/mensagem/boasvindas',(req,resp) => {
    resp.send('Olá, sejam bem-vindos e bem vindas!');
});

servidor.get('/v2/mensagem/boasvindas',(req,resp) => {
    resp.send('Que bom que você está aqui!!!');
});
servidor.get('/mensagem/ocupado',(req,resp)=>{
    resp.send("Estou ocupado no momento!")
});
servidor.get('/mensagem/ocupado/recado',(req,resp)=>{
    resp.send("Estou ocupado no momento, deixe uma mensagem no email contato@meusite.com")
});



servidor.get('/calculadora/soma/:n1/:n2',(req,resp)=>{
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const soma = n1 + n2;
    resp.send(`A soma entre ${n1} e ${n2} é igual a ${soma}`);
})



servidor.listen(5001, () => {
    console.log('Servidor rodando na porta 5001');
});