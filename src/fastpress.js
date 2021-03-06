import net from 'net';
import HTTPParser from './http-parser';
import Response from './Response';
import { DEFAULT_HOSTNAME, DEFAULT_PORT } from './constants';

export default class Fastpress {
  constructor(s) {
    this.sock = s;
    this.host = DEFAULT_HOSTNAME;
    this.port = DEFAULT_PORT;
    this.routes = {};
  }

  listen(port, callback) {
    const _port = port ? port : this.port;

    // Create a server instance, and chain the listen function to it
    // The function passed to net.createServer() becomes the event handler for the 'connection' event
    // The sock object the callback function receives UNIQUE for each connection
    const server = net.createServer((sock) => {
      let res = new Response(sock);

      sock.on('end', () => {
        console.log('client disconnected');
      });

      // We have a connection - a socket object is assigned to the connection automatically
      // console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
      // Add a 'data' event handler to this instance of socket
      sock.on('data', (request) => {
        let req = HTTPParser.parseHTTPRequest(request);
        let route = req.method + ' ' + req.url.split('?')[0];

        console.log(route);
        this.routes[route] ? this.routes[route](req, res) : null;
      });

      // Add a 'close' event handler to this instance of socket
      sock.on('close', (data) => {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
      });
    });

    server.on('error', (err) => {
      throw err;
    });

    server.listen(_port, this.host, () => {
      console.log(`Server started listening to port ${_port}`);
    });
    callback();
  };

  get(path, cb) {
    this.routes[`GET ${path}`] = cb;
  };

  post(path, cb) {
    this.routes[`POST ${path}`] = cb;
  };
}
