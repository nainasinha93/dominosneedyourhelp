const http=require("http");
const port= 8081;
const server= http.createServer((req,res)=>{
    if(req.url=="/welcome"){
     res.writeHead(200,{
         "Content-Type":"text/plain"
         })
         res.end("Welcome to Dominos!")
    } if(req.url=="/contact"){
        res.writeHead(200,{
            "Content-Type":"application/json"
            })
            res.end(JSON.stringify({
                phone: '18602100000',
                email: 'guestcaredominos@jublfood.com'
            }))
    }
     

    
   res.end();
})
server.listen(8081,()=>{
    console.log("server started on 8081");
})
