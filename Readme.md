# <center> API Labook

O Labook é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Os usuários cadastrados podem criar e curtir publicações.


## Tecnologias utilizadas 🔨✅

-   **NodeJS**: uma plataforma de desenvolvimento backend baseada em JavaScript.
-   **Typescript**: um superset do JavaScript que traz recursos adicionais de tipagem estática.
-   **Express**: um framework web utilizado para criar aplicativos e APIs em NodeJS.
-   **SQLite**: linguagem de consulta estruturada e sistema de gerenciamento de banco de dados relacionais.
-   **Knex**: uma biblioteca para construção de consultas SQL de forma simples e intuitiva.
-   **Programação Orientada a Objetos (POO)**: um paradigma de programação que organiza o código em objetos e classes.
-   **Arquitetura em camadas**: uma abordagem que divide a aplicação em camadas para uma melhor organização e manutenção do código.
-   **Geração de UUID**: a criação de identificadores únicos universalmente.
-   **Geração de hashes**: o processo de converter dados em uma sequência alfanumérica de tamanho fixo.
-   **Autenticação e autorização**: mecanismos utilizados para garantir a segurança e controle de acesso aos recursos da aplicação.
-   **Roteamento**: a definição de rotas para acessar diferentes recursos da API.
-   **Postman**: uma plataforma para testar e documentar APIs.
-   **Banco de dados**: o armazenamento de informações relacionais utilizadas pela aplicação.
***Com base nesses conhecimentos, a API Labook foi construída seguindo as melhores práticas de desenvolvimento e busca fornecer uma experiência segura e eficiente para os usuários da rede social Labook.***

## Funcionalidades

A coleção de endpoints da API Labook no Postman foi criada para gerenciar uma plataforma de rede social. Ela inclui vários endpoints para gerenciar usuários, posts e curtidas. Abaixo estão detalhes dos endpoints disponíveis:

-   **`Singup`**: Realiza o cadastro de um usuário ao sistema.
    
-   **`Login`**: Retorna um token após a verificação do usuário e senha .
    
-   **`CreatePost`**: Permite a criação de um post atrelado ao id do usuário.
    
-   **`GetPost`**: Recebe um Token e retorna todos os posts referente ao usuário que criou.
    
-   **`EditPost`**: Permite a edição de um post já criado.
    
-   **`DeletePost`**: Permite excluir um post existente com base no ID de cadastrado.
        
-   **`LikeOrDislike`**: Permite que um determinado usuário dê um like ou um dislike no post de outro usuário.
    

Em suma, a coleção Labook oferece uma variedade de endpoints de API completos para gerenciar usuários, postes e curtidas em uma rede social. Esses endpoints são acessíveis por desenvolvedores e outras partes interessadas por meio de chamadas de API bem definidas.

A documentação completa está nesse link:

[https://documenter.getpostman.com/view/24823254/2s93sXcZou](https://documenter.getpostman.com/view/24823254/2s93sXcZou)

## Instalação  💻  🎆


Para utilizar a API Labook em seu ambiente local, siga as instruções abaixo para a instalação e configuração adequadas.

### Pré-requisitos

Antes de iniciar a instalação, verifique se o seu sistema possui os seguintes pré-requisitos:

-   Node.js (versão 14 ou superior)
-   NPM (Node Package Manager) ou Yarn

### Passo a passo✅

1.  Faça o download ou clone o repositório da API Labook em seu ambiente local.
    
2.  Abra o terminal e navegue até o diretório raiz do projeto.
    
3.  Execute o seguinte comando para instalar as dependências necessárias:
    
   

        `npm install` 
    
    ou, se estiver utilizando o Yarn:
    

        `yearn` 
    
4.  Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:
    
        DB_HOST=seu_host,
        DB_USER=seu_usuario
        DB_PASSWORD=sua_senha
        DB_DATABASE=seu_banco_de_dados
        JWT_SECRET=sua_chave_secreta
   
    Certifique-se de substituir os valores `seu_host`, `seu_usuario`, `sua_senha` e `seu_banco_de_dados` pelas informações correspondentes ao seu banco de dados.
    
    A variável `JWT_SECRET` é utilizada para a geração de tokens JWT e pode ser definida como uma string de sua escolha.
    
5.  Execute o seguinte comando para criar as tabelas no banco de dados:
    
    `npm run create-tables`    
    
    ou, se estiver utilizando o Yarn:
        `yarn create-tables`    

6.  Finalmente, inicie a API Labook executando o seguinte comando:
    
     
    `npm start` 
    
    ou, com o Yarn:
    
  
    `yarn start` 
    
    A API estará disponível no endereço `http://localhost:3000`.
    

Agora você pode utilizar a API Labook para criar, editar, excluir e interagir com publicações e usuários na rede social Labook. Certifique-se de consultar a documentação dos endpoints para obter mais detalhes sobre como utilizar cada funcionalidade.

## Status do Projeto  🚧

Em correção. 
