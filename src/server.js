//importar biblioteca / lib
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando a lib express
const server = express();
server
  //utilizar body da requisição
  .use(express.urlencoded({ extended: true })) // config para pode utilizar o body no metodo POST
  //utilizando biblioteca (framework) para criar rotas para
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//ligar o servidor
server.listen(5500); // wsl2 ip is dynamic, check terminal wsl2 and look for netstat
