export default class Response {
  constructor(s) {
    this.socket = s;
  }

  status(s) {
    this.status = s;
  }

  send(body) {
    // this.socket.write(`HTTP/1.x ${this.status} OK
    //     Transfer-Encoding: chunked
    //     Date: Sat, 28 Nov 2009 04:36:25 GMT
    //     Server: Fastpress
    //     Connection: close
    //     X-Powered-By: W3 Total Cache/0.8
    //     Pragma: public
    //     Expires: Sat, 28 Nov 2009 05:36:25 GMT
    //     Etag: "pub1259380237;gz"
    //     Cache-Control: max-age=3600, public
    //     Content-Type: application/json; charset=UTF-8
    //     Last-Modified: Sat, 28 Nov 2009 03:50:37 GMT
    //     X-Pingback: http://net.tutsplus.com/xmlrpc.php
    //     Content-Encoding: gzip
    //     Vary: Accept-Encoding, Cookie, User-Agent`);
    this.socket.write('meow\r\n');
    this.socket.pipe(this.socket);
  }
}
