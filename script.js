
// const mainHeading= document.getElementById("main-heading");
// console.log(mainHeading)


// const navsel=document.querySelector(".container")
//  navsel.style.border="2px solid white"


// const link =document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href" , "www.google.com");
// console.log(link.getAttribute("href"));

// const navItems =document.getElementsByTagName("a");
// for(let i=0;i<navItems.length;i++){
//     const navItem=navItems[i];
//     navItem.style.color="black";
//     navItem.style.backgroundColor="white"
// }


// const navArr=Array.from(navItems);
// console.log(Array.isArray(navArr));

// const headline =document.querySelector(".headline")
// console.log(headline.innerHTML)
// headline.innerHTML="<h1>inner Html changed!!</h1>"
// headline.innerHTML="<button class=\"btn\">Learn More</button>"

// const rootNode=document.getRootNode();
// console.log(rootNode.childNodes[1]);


// const sectionTodo=document.querySelector(".section-todo")
// sectionTodo.classList.add("kala")


// sectionTodo.classList.contains("container")
// console.log(sectionTodo.classList.contains("container"));
// sectionTodo.classList

    // const todoList =document.querySelector(".todo-list")
    // console.log(todoList.innerHTML)

// todoList.innerHTML=todoList.innerHTML+"<li>Todo2</li>"
// todoList.innerHTML+="<li>New Student </li>"

// const todo3=document.querySelector(".todo-list li");
// todo3.remove();

// const todof=document.querySelector(".todo-list li")
// todof.textContent="hello"
// const todoList=document.querySelector(".todo-list")
// todoList.append(todof);

// const ul = document.querySelector(".todo-list")
// const li=document.createElement("li")
// li.textContent="new Hero"

// const referenceNode=document.querySelector(".todo-list li")
// ul.insertBefore(li,referenceNode);

// const info =ul.getBoundingClientRect().height
// console.log(info)

// const btn = document.querySelector(".btn-headline")
// btn.onclick = function(){
//     console.log("hiiii")
//     alert("chhhu lo!!!!!!!!!!!!!!!")
// }
// function clicked(){
//     console.log("chhhhhuuuuuuuuuuuuuuuuuuu!!")
// }
// btn.addEventListener('click',clicked);


// btn.addEventListener('click',()=>{
//     alert("helllllllo")
// })
const todoList=document.querySelector(".todo-list")
const inputdata=document.querySelector(".form-todo input[type='text']")
const data=document.querySelector(".form-todo")
data.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoAdd= inputdata.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`<span>
    ${todoAdd}
</span>
<div>
<button class="todo-btn done" >  Done </button>
<button class="todo-btn remove">Remove</button>`
newLi.innerHTML=newLiInnerHtml;
todoList.append(newLi);

    inputdata.value="";
    
})

// event delegation
todoList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('remove')){
        const targetedli=e.target.parentNode.parentNode;
        targetedli.remove();
    }
    if(e.target.classList.contains('done')){
       const targetedli = e.target.parentNode.previousElementSibling;
       
       targetedli.style.textDecoration="line-through";
    }
    
    
})