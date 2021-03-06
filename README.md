## Título
<h1 align="center"> Thaynara OG - Página de Contato </h1>


## Índice 

* [Título](#Título)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Estrutura GitHub](#estrutura-github)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Conclusão](#conclusão)

## Descricao do Projeto
Esse projeto é um site institucional feito de forma fictícia para Thaynara-OG, de uma forma resumida é uma página de contato, onde pessoas podem entrar em contato com a equipe da Thaynara para desenvolver diversos assuntos.

## Status do Projeto
<h4 align="center"> 
    ✔️Projeto Concluído ✔️
</h4>

## :hammer: Funcionalidades do projeto e Demonstração da Aplicação

- **`Funcionalidade 1`: Salva os Contacts Forms enviados ao banco de dados da Firebase.**
	![envio_form](https://user-images.githubusercontent.com/101679780/173464793-ac0efab0-5ace-4415-b9f7-5fdc03897de8.gif)
	![firebase_form](https://user-images.githubusercontent.com/101679780/173464807-cd957aa2-71e4-4bd1-a3c4-183881c8a0c7.png)
- **`Funcionalidade 2`: Envia e-mails de confirmação de recebimento de e-mail.**
	 ![mensagem_confirmacao](https://user-images.githubusercontent.com/101679780/173464866-c674f984-06d6-445b-b357-ee49ccb0b010.png)
- **`Funcionalidade 2a`: Recebe e-mail dos forms. (apenas e-mail cadastrado na biblioteca)**
	![mensagem_para_thay](https://user-images.githubusercontent.com/101679780/173464965-9b72fd9a-2a0c-42df-ba2e-1e41ea50d7bb.png)
- **`Funcionalidade 3`: Página de autenticação /admin, onde irá administrar todos os forms recebidos.**
	![admin_dashboard](https://user-images.githubusercontent.com/101679780/173465213-20af1ecd-0ebf-459a-9a20-5984946ca4af.gif)
	
	
## 🌝 Estrutura Github
**A estrutura do projeto no GitHub funciona básicamente assim:
	<ul>
		<li>1 - Tenho 2 Branchs, uma Production e a outra Develop.</li>
		<li>2 - Eu crio uma branch a partir da develop seja ela uma feature ou um fix/bug</li>
		<li>3 - Após resolvido, faço merge pra develop e na develop efetuo testes, caso ok?</li>
		<li>4 - Eu dou push para production</li>
		<li>5 - Quando eu dou push para production, acontece um GATILHO no GITHUB ACTIONS.</li>
		<li>6 - GitHub Actions roda um código onde ele faz deploy automaticamente para o FireBase</li>
	</ul>
		Obs: Ou seja, consigo fazer deploy da aplicação de qualquer lugar :moon:**
	![Production](https://user-images.githubusercontent.com/101679780/173465840-ac8a3847-5d09-4174-8ad6-0b1331bb78b6.png)



## 📁 Acesso ao projeto

**Você pode acessar o código fonte do projeto clicando aqui <a>https://github.com/GabriellDev0/thaynara-og</a> ou baixa-lo <a>https://github.com/GabriellDev0/thaynara-og/archive/refs/heads/production.zip</a>**

## 🛠️ Abrir e rodar o projeto

**Após baixar o projeto, você pode abrir com o Visual Studio Code. Para isso, na tela de launcher clique em:**
    <ul>
        <li>Abrir projeto existente ( ou algum similar )</li>
        <li>Procure o local onde o projeto está e o selecione ( Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo )</li>
        <li>Por fim clique OK</li>
        <li>Abra o terminal em "Terminal" -> "New Terminal" e execute o comando **npm install**</li>
	<li>Inicie o servidor local com: **npm run serve**</li>
    </ul>
    
## 👨‍💻 Tecnologias Utilizadas
**Tecnologias nas quais usei:**
   	<ul>
		<li>Vue 3 ( HTML, CSS, JS )</li>
		<li>Firebase: FireStore</li>
		<li>Firebase: Hosting</li>
		<li>Firebase: Auth</li>
	</ul>

## 📚 Bibliotecas Utilizadas
**Bibliotecas nas quais usei:**
	<ul>
		<li> npm install vue3-recaptcha2 </li>
		<a>https://www.npmjs.com/package/vue3-recaptcha2/v/1.7.0</a>
	</ul>
	<ul>
		<li> npm install @emailjs/browser --save </li>
		<a>https://www.emailjs.com/</a>
	</ul>
	<ul>
		<li> npm install firebase </li>
		<a>https://firebase.google.com/?hl=pt</a>
	</ul>
	<ul>
		<li>npm i mdb-ui-kit</li>
		<a>https://mdbootstrap.com/docs/standard/getting-started/installation/</a>
	</ul>

## ㊗️ Conclusão
   **Aprendi bastante coisa nesse projeto, cometi vários erros, poderia ter melhorado muito mais o projeto e deixado ele 100%, algumas coisas estão incompletas como     100% Responsive layout, 100% lighthouse google, entre outras coisas...Mas infelizmente meu tempo acabou. Enfim, este projeto foi muito bom para meu aprendizado no Geral.**
