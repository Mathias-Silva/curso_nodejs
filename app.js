import express from 'express';

const servidor = express();
servidor.use(express.json());

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


// endpoint com parametros de rota
servidor.get('/calculadora/soma/:n1/:n2',(req,resp)=>{
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const soma = n1 + n2;
    resp.send(`A soma entre ${n1} e ${n2} é igual a ${soma}`);
})



servidor.get('/calculadora/subtrair/:n1/:n2',(req,resp)=>{
const n1 = Number(req.params.n1);
const n2 = Number(req.params.n2);
const subtracao = n1 - n2;
resp.send(`A subtração de ${n1} - ${n2} é igual a ${subtracao}`);
})


// endpoint com parametros de query string e number
servidor.get('/mensagem', (req,resp)=>{
	const nome = req.query.nome ?? 'visitante';
    resp.send(`Olá, ${nome}!`);
});
servidor.get('/calculadora/somar2', (req,resp)=>{
	const n1 = Number(req.query.n1);
	const n2 = Number(req.query.n2);
	const soma = n1 + n2;
	 resp.send(`A soma entre ${n1} e ${n2} é igual a ${soma}`);
});

//endoint com parametros de corpo da requisição - POST


servidor.post('/media', (req,resp)=>{
	let n1 = req.body.nota1;
	let n2 = req.body.nota2;
	let n3 = req.body.nota3;
		
	let media = (n1+n2+n3) / 3;

	resp.send(' A média é '+ media);
})

servidor.listen(5001, () => {
    console.log('Servidor rodando na porta 5001');
});