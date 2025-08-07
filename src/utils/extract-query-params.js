// Exemplo de query string:
//   ?search=Teste
// Após o split:
//   ["search=Teste"]
// Após o split de cada parâmetro:
//   ["search", "Teste"]
//
// Função utilitária para extrair os parâmetros de consulta (query params) de uma URL e retorná-los como objeto.
export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");
      queryParams[key] = value;
      return queryParams;
    }, {});
}
