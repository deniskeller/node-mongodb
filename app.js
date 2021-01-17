// const express = require("express");
  
// const app = express();
// // создаем парсер для данных в формате json
// const jsonParser = express.json();
  
// app.post("/user", jsonParser, function (request, response) {
//     console.log(request.body);
//     if(!request.body) return response.sendStatus(400);
     
//     response.json(request.body); // отправляем пришедший ответ обратно
// });
  
// app.get("/", function(request, response){
      
//     response.sendFile(__dirname + "/index.html");
// });
  
// app.listen(3000);

const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
  
// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
 
app.use("/contact", function(request, response){
      
    response.render("contact", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
}); 
 
app.use("/", function(request, response){
      
    response.render("home.hbs");
});
app.listen(3000);