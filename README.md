# Missão Prática | Nível 4 | Mundo 2 - Catálogo de Livros em Angular

Este repositório contém o código fonte de um catálogo de livros desenvolvido com o framework Angular, utilizando TypeScript, serviços, componentes e formulários. O projeto foi criado como parte da missão prática do 4º nível, com o objetivo de demonstrar o conhecimento adquirido sobre o framework.

## Funcionalidades

A aplicação permite:

*   Listar livros: Exibe uma lista de livros com informações como título, autores, editora e resumo.
*   Cadastrar livros: Permite adicionar novos livros ao catálogo através de um formulário.
*   Navegação: A navegação entre a lista de livros e o formulário de cadastro é feita através de rotas.

## Tecnologias utilizadas

*   **Angular:** Framework front-end para desenvolvimento de aplicações web.
*   **TypeScript:** Linguagem de programação tipada que estende o JavaScript.
*   **Bootstrap:** Framework CSS para estilização e layout da aplicação.

## Como executar

1.  Clone este repositório: `git clone https://[endereço-do-repositorio]`
2.  Navegue até a pasta do projeto: `cd livros-angular`
3.  Instale as dependências: `npm install`
4.  Inicie o servidor de desenvolvimento: `ng serve`
5.  Acesse a aplicação no navegador: `http://localhost:4200/`

## Observações

*   Os dados dos livros e editoras são armazenados em arrays nos serviços (`ControleEditoraService` e `ControleLivrosService`).
*   O formulário de cadastro utiliza `ngModel` paraTwo-Way Data Binding com os dados do livro.
*   A navegação é feita utilizando o componente `router-outlet` e as diretivas `routerLink`.

## Autor
Rafael Uchôa Ribeiro
