const express = require('express');
const app = express();
const port = 3000;

var http = require('http');
var dt = require('./myfirstmodule');
var pg0 = require('./pg0module');
var cad = require('./cadastromodule');
var log = require('./loginmodule');
var user = require('./usermodule');
var consul = require('./consultasmodule');
var medc = require('./medicmodule');
var plan = require('./planosmodule');
var agend = require('./agendamentosmodule');
var sobre = require('./sobrenosmodule');
var config = require('./configmodule');
var pag = require('./paymodule');
var supt = require('./suportmodule');

app.get('/', (req, res) => {
  res.sendFile(__dirname + './');
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + './');
    });

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.write(pg0.mypg0());
  res.write(cad.mycadastro());
  res.write(log.mylogin());
  res.write(user.myuser());
  res.write(consul.myconsultas());
  res.write(medc.mymedicos());
  res.write(plan.myplanos());
  res.write(agend.myagendamentos());
  res.write(sobre.mysobreUS());
  res.write(config.myconfig());
  res.write(pag.mypay());
  res.write(supt.mysuporte())
  res.end();
}).listen(5012);

