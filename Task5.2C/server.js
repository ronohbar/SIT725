const express = require("express");
const app = express();
const catsController  = require('./controllers/cats.controller')
const projectsController = require('./controllers/projects.controller')

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/api/projects',projectsController.getProjects)
app.get("/api/cats", catsController.getCats );
  
  app.post("/api/cats", catsController.addCat);
const port = process.env.PORT || 3000

app.listen(port,()=>{
    require('./db')
    console.log("App running on port "+port);
    
})