const parseHTTPRequest = (data) => {
  let parsedReq = {};
  let req = data.split('\r\n\r\n');
  let header = req[0];
  let body = req[1];

  // Parse headers
  let headers = {};
  let headerArr = header.split('\r\n');
  let method = headerArr[0].split(' ')[0];
  let url = headerArr[0].split(' ')[1];
  let chunks = [];
  let arr = [];

  for (let i = 1; i < headerArr.length; i++) {
    chunks = headerArr[i].split(': ');
    arr = [chunks.shift(), chunks.join(': ')];
    headers[arr[0]] = arr[1];
  }

  parsedReq.method = method;
  parsedReq.url = url;
  parsedReq.headers = headers;
  parsedReq.body = body;
  return parsedReq;
};

export default {
  parseHTTPRequest
};
