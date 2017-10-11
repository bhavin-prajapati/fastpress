import net from 'net';
import HTTPParser from './http-parser';
import { Response } from './Response';

const HOST = '127.0.0.1';
const routes = {};

const createServer = (port) => {
  // Create a server instance, and chain the listen function to it
  // The function passed to net.createServer() becomes the event handler for the 'connection' event
  // The sock object the callback function receives UNIQUE for each connection
  net.createServer(function (sock) {
    let res = new Response(sock);

    // We have a connection - a socket object is assigned to the connection automatically
    // console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function (data) {
      let req = HTTPParser.parseHTTPRequest(data.toString());
      let route = req.method + ' ' + req.url.split('?')[0];

      console.log(route);
      routes[route] ? routes[route](req, res) : null;
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function (data) {
      // console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
  }).listen(port, HOST);
  console.log('Server listening on ' + HOST + ':' + port);
};

const get = (path, cb) => {
  routes[`GET ${path}`] = cb;
};

const post = (path, cb) => {
  routes[`POST ${path}`] = cb;
};

export default {
  createServer,
  get,
  post
};
