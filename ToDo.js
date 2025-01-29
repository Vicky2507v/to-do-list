

// let inputs=document.getElementById("inp");
// let text=document.querySelector(".text");

// function Add()
// {
//     if(inputs.value == "") 
//     {
//         alert("Please Enter Task !!");
//     }else{
//         let newEle=document.createElement("ul");
//         newEle.innerHTML = `${inputs.value}`;
//         text.appendChild(newEle); // with it we can  append the text which was stored in newEle variable, and text.appendChild() method will displaying the past task that you will/was done.  
//         // inputs.value=""; 
//         //  newEle.querySelector("i").addEventListener("click", remove);

//         // <i class="fa-solid fa-xmark"></i>
//         // function remove()
//         // {
//         //     newEle.remove()
//         // }
//     }
// }


let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task !!");
    } else {
        let newEle = document.createElement("div");
        newEle.classList.add("task");

        newEle.innerHTML = `
            <ul>${inputs.value}</ul>
            <button class="delete-btn">Delete</button>
        `;

        text.appendChild(newEle);

        // Clear input field after adding task
        inputs.value = "";

        // Add event listener to delete button
        newEle.querySelector(".delete-btn").addEventListener("click", function () {
            newEle.remove();
        });
    }
}
