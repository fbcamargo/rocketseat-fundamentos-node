// CommonJS => required
//const http = required("http");

// ESModules => from
import http from "node:http";
import { json } from "./middleware/json.js";
import { routes } from "./routes.js";
import { extractQueryParams } from "./utils/extract-query-params.js";

/**
 * Funcionalidades da aplicação:
 * - Criar usuário
 * - Listar usuários
 * - Editar usuário
 * - Remover usuário
 *
 * Conceitos HTTP:
 * - Método HTTP (GET, POST, PUT, PATCH, DELETE)
 * - URL
 *
 * Métodos:
 *   - GET: Buscar informações
 *   - POST: Criar uma informação
 *   - PUT: Editar ou substituir uma informação
 *   - PATCH: Atualizar parcialmente uma informação
 *   - DELETE: Remover uma informação
 *
 * Exemplos de rotas:
 *   - GET /users      => Buscar usuários no back-end
 *   - POST /users     => Criar um usuário no back-end
 *
 * Conceitos de estado:
 *   - Stateful vs Stateless
 *
 * JSON (JavaScript Object Notation):
 *   - Formato utilizado para troca de dados entre cliente e servidor
 *
 * Cabeçalhos (Headers) de Requisição/Resposta:
 *   - Utilizados para enviar metadados
 *
 * Códigos de status HTTP (HTTP Status Code):
 *   - Indicam o resultado da requisição
 *
 * UUID (Universally Unique Identifier):
 *   - Identificador único para recursos
 *
 * Tipos de parâmetros:
 *   - Query Parameters: Filtros e paginação (ex: /users?userId=1)
 *   - Route Parameters: Identificação de recurso (ex: /users/1)
 *   - Request Body: Envio de dados via formulário (ex: POST /users)
 */

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // Middleware responsável por processar o corpo das requisições JSON
  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQueryParams(query) : {};
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

// Inicia o servidor HTTP na porta 3333 (acesse http://localhost:3333)
server.listen(3333);
