const express = require('express')

const app = express()

app.get("/addTwoNumbers/:num1/:num2",function (req,res) {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const result = num1+num2    
    return res.json({statusCode:200,result}).status(200)
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("App listening on port " + port);
})