import styles.css;
  
  var res; 
  var urLimit;
  function myCal() {
   var gm=document.getElementById("male").checked;
   var age = document.getElementById("age").value;
   var h = document.getElementById("height").value;
   var w = document.getElementById("weight").value;
   urLimit=document.getElementById("urcal").value;
  
   
    if(gm ==true){
        res=864-9.72*age + 14.2*w + 503*h;
       document.getElementById("app").innerHTML="The maximum amount of intake calories for you is "+res;
   }
   else{
       res=387-7.31*age + 10.9*w + 660.7*h;
     document.getElementById("app").innerHTML='The maximum amount of intake calories for you is '+ res;
   }
}

function addItem() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML=`<input type="text" style="width:100%;" >`;
    cell2.innerHTML=`<input type="number" step="any" class="calorie" style="width:100%;" >`;
}

function calculateFood() {
    var x = document.querySelectorAll(".calorie");
    var total =0;
    for(var i=0; i<x.length ;i++){
        total+=Number(x[i].value);
    }
     document.getElementById("app2").innerHTML="total =" + total;
     if(total<=res){
         alert("it is safe to have more food");
     }else{
         alert("WARNING!! : YOU HAVE EXCEEDED YOUR INTAKE LIMIT")
     }
     
     if(urLimit){if(total<=urLimit){
         document.getElementById("app3").innerHTML="The total amount of calories you had is less than limit set by you";
     }else
    {
              document.getElementById("app3").innerHTML="WARNING!! : YOU HAVE EXCEEDED LIMIT SET BY YOU";
   
    }
    } 
}
