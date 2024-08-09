# Sellit Product Service

Este repositório contém um serviço de backend desenvolvido para o desafio de backend da Sellit. O serviço oferece uma API RESTful para gerenciar produtos, permitindo a criação, consulta por ID e busca por nome ou fornecedor.

## Funcionalidades

### 1. Criar Produto

Endpoint para criar um novo produto com as seguintes informações:

- `id`: Identificador único do produto (ULID).
- `category_id`: Identificador único da categoria do produto (ULID).
- `name`: Nome do produto ou serviço.
- `description`: Descrição do produto ou serviço.
- `producer_name`: Nome do produtor ou responsável pelo produto/serviço.
- `producer_email`: Endereço de e-mail do produtor ou responsável.
- `cover`: URL da imagem de capa do produto ou serviço.
- `thumbnail`: URL da imagem em miniatura do produto ou serviço.
- `price`: Preço do produto ou serviço.
- `updated_at`: Data e hora da última atualização do registro (ISO 8601).
- `created_at`: Data e hora da criação do registro (ISO 8601).

### 2. Carregar Produto pelo ID

Endpoint para recuperar um produto específico baseado no seu `id`.

### 3. Buscar Produtos

Endpoint para buscar produtos com base no nome (`name`) ou no nome do produtor (`producer_name`).

## Tecnologias Utilizadas

- **Next.js** com **TypeScript**: Framework de desenvolvimento.
- **PostgreSQL**: Banco de dados utilizado para armazenar as informações dos produtos.
- **Drizzle**: ORM utilizado para interagir com o banco de dados.
- **ULID**: Identificador único para produtos e categorias.

## Instalação e Execução

### Pré-requisitos

- Node.js v16+ instalado.
- PostgreSQL instalado e configurado.

### Passos para Rodar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/jhonatansarmento/sellit-challenger
   cd sellit-product-service
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/sellit
   ```

   **Nota:** Para fins de testes, você pode utilizar a seguinte string de conexão com o banco de dados:

   ```env
   DATABASE_URL=postgresql://neondb_owner:Lns8MfQG4jle@ep-shrill-field-a52ne7p0.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

   **Atenção:** Esta string de conexão é fornecida apenas para testes e não deve ser usada em produção.

4. Execute as migrações do banco de dados:

   ```bash
   npx drizzle-kit migrate
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação em `http://localhost:3000`.

### Documentação da API

- **POST /api/products/create**: Cria um novo produto.
- **GET /api/products/{{product_id}}**: Retorna os detalhes de um produto específico.
- **GET /api/products/search?query={{producer_name}}**: Busca produtos com base no nome ou nome do produtor.

### Colocando em Produção

Para colocar o serviço em produção, siga estes passos:

1. Configure o ambiente de produção, incluindo as variáveis de ambiente necessárias (`DATABASE_URL`).
2. Compile a aplicação:
   ```bash
   npm run build
   ```
3. Inicie o servidor em modo de produção:

   ```bash
   npm start
   ```

4. Configure seu servidor para servir a aplicação em produção (NGINX, PM2, etc.).

### Acessando o Serviço em Produção

Caso prefira não rodar o projeto localmente, você pode acessar o serviço já em produção através da seguinte URL:

[https://sellit-challenger.vercel.app/api/products](https://sellit-challenger.vercel.app/api/products)

### Importando Rotas no Postman

Para facilitar o teste da API, um arquivo de coleção do Postman foi exportado e está disponível no próprio projeto. Você pode encontrá-lo no seguinte caminho:

```
Product CRUD Operations.postman_collection.json
```

Este arquivo pode ser importado diretamente no Postman para testar as rotas.

## Considerações Finais

Este projeto foi desenvolvido seguindo boas práticas de código, arquitetura limpa e padrões de design. Caso tenha alguma dúvida ou sugestão, fique à vontade para abrir uma issue.

---

Jhonatan Tibiquera Sarmento de Souza  
[LinkedIn](https://www.linkedin.com/in/jhonatansarmento/) | [jsarmento.dev](https://www.jsarmento.dev/) | jhonatan.sarmento@gmail.com
