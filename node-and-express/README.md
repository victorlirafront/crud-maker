# CRUD API com Node.js e Express

Uma API REST simples para operações CRUD de usuários usando Node.js, Express e TypeScript.

## 🚀 Como executar

### Instalar dependências
```bash
npm install
```

### Executar em desenvolvimento
```bash
npm run dev
```

### Executar em produção
```bash
npm run build
npm start
```

## 📋 Endpoints da API

### Usuários

#### Criar usuário
- **POST** `/api/users`
- **Body:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25
}
```

#### Listar todos os usuários
- **GET** `/api/users`

#### Buscar usuário por ID
- **GET** `/api/users/:id`

#### Atualizar usuário
- **PUT** `/api/users/:id`
- **Body:**
```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@email.com",
  "age": 26
}
```

#### Deletar usuário
- **DELETE** `/api/users/:id`

### Outros endpoints

#### Health Check
- **GET** `/api/health`

#### Informações da API
- **GET** `/`

## 🛠️ Tecnologias utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Linguagem tipada
- **CORS** - Cross-Origin Resource Sharing
- **Body Parser** - Parsing de requisições

## 📁 Estrutura do projeto

```
src/
├── types/
│   └── user.ts          # Interfaces TypeScript
├── services/
│   └── userService.ts   # Lógica de negócio
├── controllers/
│   └── userController.ts # Controladores HTTP
├── routes/
│   └── userRoutes.ts    # Definição de rotas
├── app.ts               # Configuração do Express
└── server.ts            # Inicialização do servidor
```

## 🔧 Scripts disponíveis

- `npm run dev` - Executa com nodemon (desenvolvimento)
- `npm start` - Executa em produção
- `npm run build` - Compila TypeScript para JavaScript

## 📝 Exemplos de uso

### Criar um usuário
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@email.com",
    "age": 30
  }'
```

### Listar usuários
```bash
curl http://localhost:3000/api/users
```

### Atualizar usuário
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos Silva",
    "age": 31
  }'
```

### Deletar usuário
```bash
curl -X DELETE http://localhost:3000/api/users/1
```
