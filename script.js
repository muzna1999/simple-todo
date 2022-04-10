let title = document.getElementById('title')
let des = document.getElementById('des')
let btn = document.getElementById('btn')
let todos = document.getElementById('todos')

btn.addEventListener('click' ,() =>{
    
   if(title.value.length == 0 && des.value.length == 0){
        
    }else{
        todos.style.display ="flex";
        output()
     
         title.value='';
         des.value='';
    }
    }
)
function output(){
    var key = title.value;
    var value = des.value;
    todos.innerHTML += `
    <div class="col-sm-5 col-lg-3 d-flex  rapper p-3">
             <div class="wrapper">
                 <h1 class="headingt">${key.toUpperCase()}</h1>
                 <div class="description">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${value}</div>
             </div>
            <div class="b-wrapper">
             <button id="close" onclick="changestyle()"  class="btn btn-primary">close</button>
             </div>
         </div>
    `;
}

function changestyle(){
    let button = document.getElementById('close');
    var tmpField = button.parentNode.parentNode;
    tmpField.remove();
}
