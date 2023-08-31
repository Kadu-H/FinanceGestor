# FinanceGestor - Gerenciador de finanças (Node.js Backend)

O Gestor de Finanças é uma aplicação que permite aos usuários controlar suas finanças pessoais, monitorando receitas e despesas. O backend é responsável por fornecer uma API robusta para interagir com o frontend do sistema.

## Funcionalidades

1. Adição, subtração, visualização, atualização e exclusão de transações financeiras.
2. Adição, subtração, visualização, atualização e exclusão de metas financeiras.
3. Categorização de transações.
4. Categorização de metas.
5. Cálculo de balanço financeiro com base nas transações.
6. Cálculo de balanço financeiro com base nos aportes dentro das metas.

## Fluxo de Trabalho

O FinanceGestor é fácil de usar:

1. O usuário acessa a aba de receitas e despesas do FinanceGestor.
2. Insere a transação desejada no campo apropriado.
3. Clique no botão "Criar" para criar uma despesa ou receita.
4. Um bloco de transição é criado contendo informações sobre a transição.
5. O usuario acessa a aba de metas do FinanceGestor.
6. Insere a meta no campo apropriado.
7. Clique no botão "Criar" para criar uma meta.
8. O usuario insere os aportes dentro das metas.
9. Os usuários podem visualizar, criar, editar e remover as transações, metas e aportes.

## Requisitos e Instalação

Certifique-se de ter o Node.js instalado em seu ambiente. Para usar o FinanceGestor:

1. Clone este repositório para o seu ambiente local ou faça o download dos arquivos.
2. Abra um terminal e navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:
```
npm install
```
4. Após a instalação, execute o seguinte comando para iniciar o servidor:  
```
npm start
```
5. Abra o navegador e acesse `http://localhost:3000/costs` para acessar a aba de receitas e despesas do FinanceGestor.
6. Abra o navegador e acesse `http://localhost:3000/goals` para acessar a aba de metas do FinanceGestor.

## Estrutura do Projeto

A estrutura do projeto é bastante simples:

- `server.js`: O arquivo principal que define o servidor Express e as rotas.
- `routes/`: pasta que define as rotas.
- `db/connectMongoDB.js`: O arquivo que faz a conexão com o MongoDB.
- `src/controler/`: Armazena os arquivos de controle de requisições usado pelo Express.
- `src/models/`: Armazena os arquivos de modelagem de dados usados pelo banco MongoDB.
- `src/views/`: Armazena os arquivos de visualização usados pelo Express.


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests ou fornecer sugestões para melhorias do projeto.