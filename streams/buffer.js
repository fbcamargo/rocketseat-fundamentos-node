// Buffer representa um espaco na memoria do computador
// Buffer sao binarios
// A leitura e escrita de dados fica muito mais rápida com binarios
const buf = Buffer.from("hello");
console.log(buf);
console.log(buf.toJSON());
