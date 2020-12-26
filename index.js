// var http=require('http');
// var data={
//     naam:'Syed Hammad Ahmed',
//     email:'hsyed2633@gmail.com',
//     age:'20'
// }
// http.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'application\json'})
// res.write(JSON.stringify(data));
// res.end();
// }).listen(4000)

// API work ends here

// email work starts

// const { info } = require('console');
// var nodeMailer=require('nodemailer');
// var transport=nodeMailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth: {
//         user:'factualcode.official@gmail.com',
//         pass:'27june2020'
//     }
// });
// var mailOptions={
//     from:'factualcode.official@gmail.com',
//     to:'hsyed2633@gmail.com',
//     subject:'testing node mail',
//     text:'hello from factualcode'
// }

// transport.sendMail(mailOptions,(error,info)=>{
// if(error){
//     console.log(error);
// }else{
//     console.log('email has been sent',info.response)
// }
// })

// email work ends here

// read file work start

// var http = require("http");
// var fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text.html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(4000);

//   read file work ends here

// connection of nodeJS with mysql

// var mysql = require("mysql");
// const nodemon = require("nodemon");
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "resto",
// });
// con.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("connected");
//   }
// });

// connection work ends here


// event emitter work starts here

// var events = require("events");
// var eventEmitter = new events.EventEmitter();

// eventEmitter.on("speak", (name) => {
//   console.log(name, "is speaking");
// });

// eventEmitter.emit("speake", "Hammad");

// event emitter work ends here
