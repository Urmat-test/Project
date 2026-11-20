
let students = [
  { id: 1, name: "Адахан", age: 20 },
  { id: 2, name: "Эрлан", age: 19 },
  { id: 3, name: "Мириш", age: 21 }
];

function createStudent(id, name, age) {
  students.push({ id, name, age });
  console.log("Create кийин:", students);
}

function readStudents() {
  students.forEach(student => {
    console.log(`ID: ${student.id}, Аты: ${student.name}, Жашы: ${student.age}`);
  });
  console.log("Read кийин:", students);
}

function updateStudentAge(id, newAge) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.age = newAge;
  } else {
    console.log(`ID ${id} менен студент табылган жок`);
  }
  console.log("Update кийин:", students);
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  console.log("Delete кийин:", students);
}

createStudent(4, "Урмат", 22);
readStudents();
updateStudentAge(2, 23);
deleteStudent(1);







// const jokeBtn=document.querySelector('#btn')
// const text=document.querySelector('#text')

// const _baseUrl="https://v2.jokeapi.dev/joke/Any?blacklistFlags=political"
// function getJoke(){
//     fetch(_baseUrl)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//     })
// }
// getJoke()






// const baceUrl='https://fakestoreapi.com/products/1'

// function getProducts(){
//     fetch(baceUrl)
//             .then(res=>res.json())            
//             .then(data=>{
//                 console.log(data)
//             })
// }
// getProducts()









// const input = document.querySelector("#taskInput");
// const addBtn = document.querySelector("#addBtn");
// const list = document.querySelector("#taskList");

// // Маалыматтарды сактайбыз
// let tasks = [];
// let editId = null;

// // CREATE жана UPDATE
// addBtn.addEventListener("click", function() {

//     const value = input.value.trim();

//     if (value === "") return;

//     if (editId === null) {

//         tasks.push({
//             id: Date.now(),
//             title: value
//         });

//     } else {

//         tasks = tasks.map(task => {
//             if (task.id === editId) {
//                 return { ...task, title: value };
//             }
//             return task;
//         });

//         editId = null;
//         addBtn.textContent = "Кошуу";
//     }

//     input.value = "";

//     renderTasks();
// });


// // READ
// function renderTasks() {

//     list.innerHTML = "";

//     tasks.forEach(task => {

//         const li = document.createElement("li");

//         const text = document.createElement("span");
//         text.textContent = task.title;

//         // UPDATE
//         const editBtn = document.createElement("button");
//         editBtn.textContent = "Өзгөртүү";

//         editBtn.addEventListener("click", function() {
//             input.value = task.title;
//             editId = task.id;
//             addBtn.textContent = "Сактоо";
//         });

//         // DELETE
//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Өчүрүү";

//         deleteBtn.addEventListener("click", function() {

//             tasks = tasks.filter(t => t.id !== task.id);

//             renderTasks();
//         });

//         li.append(text, editBtn, deleteBtn);

//         list.append(li);
//     });
// }


