/**
 * The Server can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to implement a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details
{
  id: '001',
  name: '鲜鸡蛋 30枚',
  image: '/images/product/001.jpg',
  price: 44.9,
  tags: ['鸡蛋', '早餐'],
  isActive: true,
}
*/

const http = require('http');
const { url } = require('inspector');
const data = require('./data');

const port = 3000;

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http
  .createServer((req, res) => {
    // .. Here you can create your data response in a JSON format
    res.setHeader('Content-Type', 'text/html;charset=UTF-8');
    res.writeHead(200, {
      'Access-Control-Allow-Origin': 'http://localhost:9000',
      'Access-Contorl-Allow-Headers': 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,Origin',
      'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS, POST',
    });
    //  could update the method later to only get url parameter
    req.setEncoding('UTF-8');
    const urlText = req.url;
    const ipos = urlText.indexOf('=');
    const decoded = decodeURIComponent(urlText.substring(ipos + 1, urlText.length));
    res.write(decoded);
    res.end();
  })
  .listen(port);

// eslint-disable-next-line no-console
console.log(`[Server running on port ${port}]`);
