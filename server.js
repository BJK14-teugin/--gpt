const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("./"));

app.get("/", (req,res)=>{

    res.sendFile(
        __dirname + "/index.html"
    );

});

app.post("/chat",(req,res)=>{

    const msg = req.body.message;

    res.json({

        reply:
        "범-GPT 응답: " + msg

    });

});

const PORT =
process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(
        "서버 실행"
    );

});
