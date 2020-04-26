const {spawn} = require("child_process");


var data_1 = ""


var main_retrival_func = async function() {
    var final_data_1 = "";
    
    const run_script_py = spawn("python3",["script.py"]);
    var final_data = new Promise((resolve,reject)=>{
       console.log(1111111)


       run_script_py.stdout.on("data", (data) => {
        console.log(`the data came back from pyscript is ${data.toString()}`);
        final_data +=  data.toString();
         resolve(data.toString())
       
    });

            console.log(223232323)
    run_script_py.stdout.on("close",(code)=>{
        
        console.log(`the process exited and the code is ${code}`);
        
        
    
    });
    })

     var x="";
     
      final_data_1 = await final_data

    //  return x;

 
    return final_data_1
}


module.exports = main_retrival_func;


  
      

      
  
  

