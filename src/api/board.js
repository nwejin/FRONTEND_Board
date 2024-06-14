const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../data/Board.json')); // 경로 확인
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
