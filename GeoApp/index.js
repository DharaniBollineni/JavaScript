// console.log(5)
// const x=5
// console.log(x+2)


const express = require('express');
const app= express();
app.listen(3000,()=> console.log('listening at 3000'));
app.use(express.static('public'));
// server to get the incomming data that needs to be understood by the server
    //   http://expressjs.com/en/api.html#express.json
    app.use(express.json({limit:'1mb'}));
    

// POST method route
/* app.post('/', function (req, res) { // address and call back fuction 
  res.send('POST request to the homepage')
 })*/

 app.post('/api', (request, response)=> {  // api is name of the address and request, response are two arguments of the request
  // request has all the data sent details to api // client send details using post fetch()
  // response is sent things back to the client.
  console.log("I got the request");  
  console.log(request.body);
  const data= request.body;
  // send the response 
  response.json({ status: 'success', 
                  latitude: data.latt, 
                  longitude: data.long,
                  timeCheck: data.timestamp
                }); 
 });