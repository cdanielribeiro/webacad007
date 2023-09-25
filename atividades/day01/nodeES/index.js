import * as http from 'http';
import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
import { back, createLink } from "./utils.mjs";

const PORT = process.env.PORT ?? 3333;

const server = http.createServer(function (req, res) {
  const path = process.argv[2];
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write("Instituto de Computação");
    res.write("<h1>lista de arquivos</h1>");
    res.write("<h1>Teste nodemon</h1>");

    // Pega
    const filenames = fs.readdirSync(path);
    // console.log("Teste nodemon");

    filenames.map((filename) => {
      if (filename.endsWith(".txt")) {
        // res.write(filename);
        res.write(createLink(filename));
        res.write("<br>");
      }
    });
    res.end();
  } else if(req.url.includes('.txt')) {
    const filePath = path+req.url.replace('/', '')
    console.log(req.url)
    const arquivo = fs.readFileSync(filePath, "utf-8");

    res.write(back());
    res.write(arquivo);

    // console.error('<br>');

    res.end();
  }
});

server.listen(PORT);
