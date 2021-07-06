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
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(data[0].id);
    res.write(req.url);
    res.write('Response goes in here...'); // Write out the default response
    res.end();
  })
  .listen(port);

console.log(`[Server running on port ${port}]`);
