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
// }).listen(3900)

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