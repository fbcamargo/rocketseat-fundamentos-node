// Middleware para processar o corpo das requisições com conteúdo JSON.
// Lê os chunks recebidos, concatena e faz o parse para req.body.
// Caso o JSON seja inválido, req.body será null.
// Também define o cabeçalho de resposta para application/json.
export async function json(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}
