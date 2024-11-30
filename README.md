## Instalação do projeto

Instale o projeto com `npm install`.

## Endpoints

Execute `npm start` na pasta-raiz do projeto. Certifique-se que a porta `3000` esteja disponível.

Este projeto disponibiliza os seguintes endpoints:
`http://localhost:3000/music`
`http://localhost:3000/music/{id}`
`http://localhost:3000/users`
`http://localhost:3000/users/{id}`

## Requisitos

* Requisito 1: Informada uma pessoa, exibir todas as músicas que ela ouviu
* Requisito 2: Informada uma pessoa, mostrar a música favorita dela
* Requisito 3: Informada uma pessoa, listar todos estilos musicais que ela ouviu


### Requisitos Extras

* Extra 1: Faça automação de testes e sua documentação. X
* Extra 2: Use Docker e crie uma imagem para a sua aplicação
* Extra 3: Faça o deploy da sua aplicação usando algum serviço gratuito como Render.

Endpoints adicionados para os requisitos 1, 2 e 3 respectivamente:
`http://localhost:3000/users/{id}/songs`
`http://localhost:3000/users/{id}/songs/favorite`
`http://localhost:3000/users/{id}/genres`

### Para testar o projeto

* Depois de rodar o `npm install` e o `npm start` para iniciar o servidor, abra um novo terminal e coloque o comando `npm test`, ela testa todas as rotas possíveis e se elas estão disponíveis, um log é feito para todos os resultados dos teste."# estudo-backend" 
