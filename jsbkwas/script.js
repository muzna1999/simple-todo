// document.getElementById('form-task').addEventListener('submit',saveTask);


// //save todo

// function saveTask(e){
//     let title=document.getElementById('title').value;
//     let des=document.getElementById('des').value;

//     let task={
//         title,
//         des
//     };
//     if(localStorage.getItem('tasks')===null){
//         let tasks=[];
//         tasks.push(tasks);
//         localStorage.setItem('tasks',JSON.stringify(tasks));

//     }
//     else{
//         let tasks=JSON.parse(localStorage.getItem('tasks'));
//         tasks.push(task);
//         localStorage.setItem('tasks',JSON.stringify(tasks));
//     }
//     gettask();

//     document.getElementById('form-task').requestFullscreen();
//     e.preventDefault();
// }

// // delete todo
// function deletetask(title){
//     let tasks= JSON.parse(localStorage.getItem('tasks'));
//     for(let m=0;m<tasks.length;m++){
//         if(tasks[i].title==title){
//             tasks.splice(m,1);
//         }
//     }
//     localStorage.setitem('tasks',JSON.stringify(tasks));
//     gettask()
// }

// function gettask(){
//     let tasks=JSON.parse(localStorage.getitem('tasks'));
//     let tasksView = document.getElementById('todos');
//     tasksView.innerHTML='';

//     for(let m=0;m<tasks.length;m++){
//         let title=tasks[m].title;
//         let des=tasks[m].des;

//         tasksView.innerHTML += 
//         ` <div class="card mb-3">
//         <div class="card-body">
//             <div class="row">
//                 <div class="col-3 text-left">
//                     <p>${title}</p>
//                 </div>
//                 <div class="col-7 text-left">
//                     <p>${des}</p>
//                 </div>
//                 <div class="col-7 text-right">
//                     <a href="#" onclick="deletetask('${title}')" class="btn btn-danger">X</a>
//                 </div>
//             </div>
//         </div>
//     </div>`
        

//     }
// }
// gettask();