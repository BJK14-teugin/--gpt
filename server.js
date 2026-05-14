const express=require("express");

const app=express();

app.use(express.json());

app.use(express.static("./"));

app.post("/chat",async(req,res)=>{

try{

const msg=req.body.message;

const response=
await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[{
parts:[{
text:msg
}]
}]

})

});

const data=
await response.json();

res.json({

reply:
data
.candidates[0]
.content
.parts[0]
.text

});

}catch(err){

res.json({

reply:
"오류:"+err

});

}

});

app.listen(
process.env.PORT||3000
);
