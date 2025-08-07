# 🚀 Fundamentos Node.js - API RESTful

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Rocketseat](https://img.shields.io/badge/Course-Rocketseat-purple.svg)](https://rocketseat.com.br/)

> Projeto desenvolvido durante o curso da Rocketseat para aprender os fundamentos do Node.js, criando uma API RESTful sem frameworks ou bibliotecas externas.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido no primeiro módulo do curso da Rocketseat, focado nos **fundamentos do Node.js**. O objetivo é criar uma API RESTful completa utilizando apenas os módulos internos do Node.js, especialmente HTTP e Streams, sem depender de frameworks ou bibliotecas externas.

### 🎯 Objetivos de Aprendizado

- **Módulos internos do Node.js**: HTTP, Streams, File System, Crypto
- **Fundamentos HTTP**: Requests, Responses, Headers, Status Codes
- **Tipos de parâmetros**: Query Parameters, Route Parameters, Request Body
- **Conceitos de estado**: Stateful vs Stateless
- **JSON**: Formato de troca de dados
- **UUID**: Identificadores únicos para recursos

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **ES Modules** - Sistema de módulos
- **HTTP** - Módulo nativo para criação do servidor
- **File System** - Persistência de dados em JSON
- **Crypto** - Geração de UUIDs
- **Streams** - Processamento de dados

## 🚀 Como Iniciar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- NPM ou Yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd 01-fundamentos-node
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Servidor rodando em: `http://localhost:3333`

## 📡 Endpoints da API

### 👥 Usuários

| Método   | Endpoint              | Descrição                        | Status Code |
| -------- | --------------------- | -------------------------------- | ----------- |
| `GET`    | `/users`              | Lista todos os usuários          | `200`       |
| `GET`    | `/users?search=termo` | Busca usuários por nome ou email | `200`       |
| `POST`   | `/users`              | Cria um novo usuário             | `201`       |
| `PUT`    | `/users/:id`          | Atualiza um usuário existente    | `204`       |
| `DELETE` | `/users/:id`          | Remove um usuário                | `204`       |

### 📝 Exemplos de Uso

#### Criar usuário

```bash
curl -X POST http://localhost:3333/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@email.com"}'
```

#### Listar usuários

```bash
curl http://localhost:3333/users
```

#### Buscar usuários

```bash
curl "http://localhost:3333/users?search=joão"
```

#### Atualizar usuário

```bash
curl -X PUT http://localhost:3333/users/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva Atualizado", "email": "joao.novo@email.com"}'
```

#### Deletar usuário

```bash
curl -X DELETE http://localhost:3333/users/123e4567-e89b-12d3-a456-426614174000
```

## 📁 Estrutura do Projeto

```
01-fundamentos-node/
├── src/
│   ├── server.js          # Servidor HTTP principal
│   ├── routes.js          # Definição das rotas da API
│   ├── database.js        # Classe para gerenciamento do banco
│   ├── db.json           # Arquivo de persistência
│   ├── middleware/
│   │   └── json.js       # Middleware para processar JSON
│   └── utils/
│       ├── build-route-path.js    # Utilitário para construção de rotas
│       └── extract-query-params.js # Extração de parâmetros de query
├── streams/
│   ├── fundamentos.js     # Exemplos de streams
│   ├── buffer.js          # Trabalhando com buffers
│   ├── stream-http-server.js # Servidor HTTP com streams
│   └── fake-upload-to-http-stream.js # Upload simulado
├── package.json
└── README.md
```

## 🔧 Funcionalidades Implementadas

### ✅ CRUD Completo de Usuários

- **Create**: Criar novos usuários com UUID único
- **Read**: Listar e buscar usuários por nome/email
- **Update**: Atualizar dados de usuários existentes
- **Delete**: Remover usuários do sistema

### ✅ Sistema de Persistência

- Armazenamento em arquivo JSON (`db.json`)
- Operações assíncronas com File System
- Estrutura de dados organizada

### ✅ Middleware JSON

- Processamento automático de requisições JSON
- Headers adequados para Content-Type

### ✅ Sistema de Rotas

- Roteamento dinâmico com parâmetros
- Suporte a query parameters
- Extração de parâmetros de URL

### ✅ Streams (Exemplos)

- Fundamentos de streams do Node.js
- Trabalho com buffers
- Servidor HTTP utilizando streams
- Simulação de upload de arquivos

## 🎓 Conceitos Aprendidos

### HTTP Fundamentals

- **Métodos HTTP**: GET, POST, PUT, DELETE
- **Status Codes**: 200, 201, 204, 404
- **Headers**: Content-Type, Content-Length
- **Request/Response Cycle**

### Node.js Core Modules

- **http**: Criação de servidor HTTP
- **fs/promises**: Operações de arquivo assíncronas
- **crypto**: Geração de UUIDs
- **path**: Manipulação de caminhos

### JavaScript Moderno

- **ES Modules**: Import/Export
- **Async/Await**: Operações assíncronas
- **Destructuring**: Extração de dados
- **Arrow Functions**: Funções modernas

## 🤝 Contribuição

Este é um projeto educacional desenvolvido durante o curso da Rocketseat. Contribuições são bem-vindas para melhorar a documentação ou adicionar funcionalidades extras.

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com 💜 durante o curso da [Rocketseat](https://app.rocketseat.com.br/journey/node-js-2023)**
