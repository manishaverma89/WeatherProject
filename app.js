const express = require("express");
const app = express();
const https = require("https");

app.get("/" , function(req,res){

const url = " https://api.openweathermap.org/data/2.5/weather?q=jagadhri&appid=2fd7f8813620b5e1839ebe6705007416&units=metric"

// https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

    https.get(url, function(response){
        console.log("statusCode : " + response.statusCode);
        
        
       // JavaScript has a built in function for converting JSON strings into JavaScript objects:JSON.parse()
        
       // " on " method
        
        response.on("data",function(data){
         const weatherData = JSON.parse(data);
         const temp = weatherData.main.temp;
         console.log("Temperature : " + temp );
         const weatherDescription = weatherData.weather[0].description;
         console.log("DEsciption : " + weatherDescription);
        
         // got the icon url from "https://openweathermap.org/weather-conditions"

          const weatherIcon = weatherData.weather[0].icon;
          const imageUrl = " http://openweathermap.org/img/wn/"+ weatherIcon + "@2x.png "  
         //   we can send multiple responses to the server with res.write() method as there can be only one res.send() in any given app method 
         res.write("<p>The Weather is currently : " + weatherDescription + "</p>");
        res.write("<h1>The Temperature in Jagadhri is : " + temp + " degrees celcius </h1>" );
        res.write("<img src=" + imageUrl + ">") ;
          res.send()
        })
    })

    // res.send("server is up and get started");
})

    





app.listen(3000 , function(){
    console.log("Server is running on port 3000");
});