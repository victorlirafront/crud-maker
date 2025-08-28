# CRUD API com Node.js, Express e Prisma

Uma API REST moderna para operações CRUD de usuários usando Node.js, Express, Prisma e TypeScript.

## 🚀 Como executar

### Instalar dependências
```bash
npm install
```

### Configurar o banco de dados
```bash
# Gerar o cliente Prisma
npm run db:generate

# Criar o banco e aplicar o schema
npm run db:push

# (Opcional) Executar seed para dados de exemplo
npm run db:seed
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
- **Prisma** - ORM moderno
- **SQLite** - Banco de dados local
- **Zod** - Validação de schemas
- **CORS** - Cross-Origin Resource Sharing

## 📁 Estrutura do projeto

```
src/
├── types/
│   └── user.ts          # Schemas Zod e tipos TypeScript
├── services/
│   └── userService.ts   # Lógica de negócio com Prisma
├── controllers/
│   └── userController.ts # Controladores HTTP
├── routes/
│   └── userRoutes.ts    # Definição de rotas
├── app.ts               # Configuração do Express
└── server.ts            # Inicialização do servidor

prisma/
├── schema.prisma        # Schema do banco de dados
└── seed.ts             # Dados iniciais
```

## 🔧 Scripts disponíveis

- `npm run dev` - Executa com hot reload (desenvolvimento)
- `npm start` - Executa em produção
- `npm run build` - Compila TypeScript
- `npm run db:generate` - Gera cliente Prisma
- `npm run db:push` - Aplica schema no banco
- `npm run db:migrate` - Executa migrations
- `npm run db:studio` - Abre Prisma Studio
- `npm run db:seed` - Popula banco com dados de exemplo

## 🎯 Vantagens do Prisma

### **1. Developer Experience**
- **Type Safety** - Tipagem automática baseada no schema
- **Auto-completion** - IntelliSense completo no VS Code
- **Schema-first** - Definição clara do modelo de dados

### **2. Performance**
- **Query Optimization** - Queries otimizadas automaticamente
- **Connection Pooling** - Gerenciamento eficiente de conexões
- **Lazy Loading** - Carregamento sob demanda

### **3. Produtividade**
- **Migrations** - Controle de versão do banco
- **Prisma Studio** - Interface visual para o banco
- **Seed** - Dados iniciais automatizados

## 📝 Exemplos de uso

### Criar um usuário
```bash
curl -X POST http://localhost:3002/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos",
    "email": "maria@email.com",
    "age": 30
  }'
```

### Listar usuários
```bash
curl http://localhost:3002/api/users
```

### Atualizar usuário
```bash
curl -X PUT http://localhost:3002/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Santos Silva",
    "age": 31
  }'
```

### Deletar usuário
```bash
curl -X DELETE http://localhost:3002/api/users/1
```

## 🔍 Validações Implementadas

- **Nome**: String obrigatório com mínimo de 1 caractere
- **Email**: Formato de email válido e único
- **Idade**: Número entre 0 e 150
- **ID**: Conversão automática de string para number
- **Tratamento de erros**: 400, 404, 409 para conflitos

## 🗄️ Prisma Studio

Para visualizar e editar dados diretamente no banco:

```bash
npm run db:studio
```

Acesse: `http://localhost:5555`

## 🚀 Próximos passos

1. **Migrations** - Configurar controle de versão do banco
2. **Relacionamentos** - Adicionar outras entidades
3. **Autenticação** - Implementar JWT
4. **Cache** - Adicionar Redis
5. **Testes** - Configurar Jest
6. **Deploy** - Configurar para produção
