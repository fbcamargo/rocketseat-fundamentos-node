/**
 * Netflix & Spotify
 *
 * Importacao de clientes via CSV (Excel)
 * 1GB - 1.000.000 de linhas
 * POST /upload import.csv
 *
 * Fluxo Comum:
 * Upload a 10mb/s -> 100s para finaliza
 * Ao finalizar -> Processa dados
 *
 * Fluxo Stream:
 * Upload a 10mb/s -> 1s -> 10.000 registros
 * Processa dados enquanto faz upload
 *
 * Readable Streams / Writable Streams
 */

import { Readable, Writable, Transform } from "node:stream";

// Leitura
class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

// Transformacao
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

// Escrita
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
