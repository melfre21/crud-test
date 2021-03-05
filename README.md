# Praxio Front-end Test

Projeto prático de desenvolvimento de uma aplicação teste para vaga de front-end.

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Angular v11](https://expo.io/)
- [Laravel(API)](https://laravel.com/)
- [Bootstrap v5](https://getbootstrap.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [TypeScript](https://www.typescriptlang.org/)

Outras bibliotecas e Api's

- [VIACEP](https://viacep.com.br/)
- [ngx-mask](https://github.com/JsDaddy/ngx-mask)
- [sweetAlert2](https://sweetalert2.github.io/)



## Instalação do Projeto Back-end(Laravel)

Como foco do projeto é front-end disponibilizo uma API, com os EndPoints no endereço abaixo.
- [Praxio Back Api](https://praxio.afrenti.com.br/api)

#### Cadastro:
```
POST /users
```
#### login:
```
POST /login
```

## Instalação do Projeto Front-end(Angular v11)


Foi utilizado a versão mais recente do framework Angular e o projeto pode ser inicializado da seguinte forma:

- Instale versão do [NODEJS](https://nodejs.org/en/) (14.15.5):
- Utilizo a versão do [NPMJS](https://www.npmjs.com/) (6.14.11):

Depois das instalações iniciais basta rodar o comando NPM INSTALL ou comente NPM I na raiz do projeto para instalar todas as bibliotecas e dependências.

```
npm install
```

Depois de instaladas pode-se iniciar a aplicação com o seguinte comando e :

```
ng serve <project> [options]
```
mais opções encontra-se na documentação oficial em: [https://angular.io/cli/serve](https://angular.io/cli/serve)

## Estrutura de pastas
![Estrutura de pastas](http://front-praxio.afrenti.com.br/images_readme/estrutura_pastas.png)
- Components - aqui temos os arquivos comuns a toda aplicação tais como Header e Footer.
- Guards - são as guardas de rotas utilizadas para implementar segurança em nossas aplicações.
- Helpers - encontramos aqui o serviço de interceptação de rotas HTTP, antes mesmo de chegar ao servidor. 
- Models - modelos da aplicação tais como de Usuario.ts e UsuarioLogin.ts
- Pages - aqui estão as principais páginas da nossa aplicação como HOME, Cadastro e Login
- Services - nessa pasta temos os serviços que fazem as requisições direto na API.

## Funcionalidades
- Cadastro de Usuários, suas validações e mascaras nos inputs solicitados.
![Cadastro e Validações](http://front-praxio.afrenti.com.br/images_readme/cadstro_validacoes.png)
![Cadastro/Sucesso](http://front-praxio.afrenti.com.br/images_readme/cadastro_com_sucesso.png)
- Login formulário para acesso à aplicação
![Login e Validações](http://front-praxio.afrenti.com.br/images_readme/login_e_validacoes.png)
- Home página no qual para ter acesso o visitante tem que fazer um breve cadastro e efetuar login.
![Home](http://front-praxio.afrenti.com.br/images_readme/home.png)

## Projeto Online
- Projeto pode ser encontrado online no endereço: [Praxio Test](https://front-praxio.afrenti.com.br).

## Autor
- Melfre Diego (web developer fullstack)
- (86)99474-9020
- melfre21@gmail.com

