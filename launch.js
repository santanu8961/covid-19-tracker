
var http = require('http');

var main_retrival_func = require("./engine");



http.createServer(function (req, res) {
console.log("data is loading ...")

main_retrival_func().then(x=>{

var str = x.replace(/'/g,`"`);
  console.log(str);

  var data = JSON.parse(str);
  console.log("the data is",data);
  var html =` <html><head>
    <script>
    function aaa(){
      document.body.requestFullscreen();
    }
      function loader(){
        setInterval(() => {
          if(document.getElementById("a").classList.contains("hide")){
            document.getElementById("b").classList.add(["hide"])
            document.getElementById("a").classList.remove(["hide"])
          }else{
            document.getElementById("a").classList.add(["hide"])
            document.getElementById("b").classList.remove(["hide"])
          }
        }, 5000)
      }
    </script>
    <style>
    .hide{
      display:none
    }
    ::backdrop {
      z-index:0;  
      background-color: white !important;
  }
  
  html, *:fullscreen, *:-webkit-full-screen, *:-moz-full-screen {
      background-color: white !important;
      z-index:1;
  }
    table.greyGridTable {
      
  border: 2px solid #FFFFFF;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
table.greyGridTable td, table.greyGridTable th {
  border: 1px solid #FFFFFF;
  padding: 3px 4px;
}
table.greyGridTable tbody td {
  font-size: 40px;
}
table.greyGridTable td:nth-child(even) {
  background: #EBEBEB;
}
table.greyGridTable thead {
  background: #FFFFFF;
  border-bottom: 4px solid #333333;
}
table.greyGridTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  border-left: 2px solid #333333;
}
table.greyGridTable thead th:first-child {
  border-left: none;
}

table.greyGridTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  border-top: 4px solid #333333;
}
table.greyGridTable tfoot td {
  font-size: 14px;
}
     
    </style>
    </head>
    <body onclick="aaa()" onload="loader()"><div>
    <div id="a" class="hide" style="heigh:80vh ; margin:10vh">
    <div style="font-size:55px; text-align: center;">
    INDIA
    
    </div>
      <table  class="greyGridTable">
       <tbody>
         <tr>
            <td>
               Total Count 
            </td>
            <td>
              ${data.india.totalcases}
              </td>

         </tr>
         <tr>
         <td>
         Death in Total
              </td>
              <td>
              ${data.india.deaths}
              </td>
         </tr>
         <tr>
         <td>
              Recovered
              </td>
              <td>
              ${data.india.recovered}
              </td>
         </tr>
       </tbody>
      </table>
     
    </div>
    <div id="b" style="heigh:80vh ; margin:10vh">
    <div style="font-size:55px; text-align: center;">
    WORLD
    </div>
    <table id="b" class="greyGridTable">
    <tbody>
      <tr>
         <td>
            Total Count 
         </td>
         <td>
           ${data.world.totalcases}
           </td>

      </tr>
      <tr>
      <td>
      Death in Total
           </td>
           <td>
           ${data.world.deaths}
           </td>
      </tr>
      <tr>
      <td>
           Recovered
           </td>
           <td>
           ${data.world.recovered}
           </td>
      </tr>
    </tbody>
   </table>
    </div>
  </div></body>
 
  </html>`

  res.write(html);
  res.end();
})
    
 
 
 

  
    
    
    
   

    
    
    
   
  }).listen(8080);


//   res.writeHead(200, {'Content-Type': 'text/html'});




















