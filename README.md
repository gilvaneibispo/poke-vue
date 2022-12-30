# Poke

![Logo UPTAdmin](http://www.upt.uefs.br/uploads/img/logo_upt_admin.png)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Índice

- [UPTAdmin](#uptadmin)
    - [Índice](#índice)
    - [Resumo do projeto](#resumo-do-projeto)
    - [Funcionalidades do projeto](#funcionalidades-do-projeto)
    - [Acesso ao projeto](#acesso-ao-projeto)
    - [Rodar o projeto](#rodar-o-projeto)
    - [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
    - [Autor](#autor)

## Resumo do projeto

Front-end desenvolvido com Vue.JS durante o período de aprendizado do framework.
O UPTAdmin é um sistema de gerenciamento para o programa Universidade para Todos e
engloba um banco de dados com MariaDB, a API com PHP 7.4 e o *front-end* com VueJS.

## Funcionalidades do projeto

- `Funcionalidade 1`: Matrículas de alunos;
- `Funcionalidade 1a`: Acompanhar/Confirmar matriculas de alunos;
- `Funcionalidade 2`: Cadastrar espaços de aulas;
- `Funcionalidade 2a`: Gerenciar os espaços cadastrados (CRUD completo);
- `Funcionalidade 3`: Incluir cidades;
- `Funcionalidade 4`: Gerar relatórios sobre matrículas e espaços.

## Acesso ao projeto

Clone este projeto por meio de SSH ou link HTTPS ou baixe o código compactado.
Os arquivos `.php` (não classes) na raiz do projeto são referente ao site atual e
floram incluídos nesse projeto provisoriamente, assim como os diretórios:

- `/admin`
- `/artigos`
- `/dist`
- `/estude-em-casa`
- `/includes`
- `/parts`
- `/simulado`
- `/src`

## Rodar o projeto

1. Clone o projeto
2. Instale as dependências: `composer install`
3. *Crie um banco de dados e rode o script do arquivo `uptadmin_db.sql`*
4. *Configure o arquivo `.env` com as informações do banco criado*
5. *Execute as migrations: `composer run-script database:migrate`*
6. ***Obs.:** O front-end deve ser reconstruído com endereço correto da API antes do deploy*

## Técnicas e tecnologias utilizadas

- `PHP 7.4`
- `VueJS`
- `MariaDB 10.4.17`




# poke

## Description

This application was created in my introduction to vue.js. It uses PokeAPI and the main concepts of development with vue, trying to use everything that is necessary for most real applications.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
