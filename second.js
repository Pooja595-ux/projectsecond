// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  let name = document.getElementById("name").ariaValueMax.trim();
  let email = document.getElementById("email").ariaValueMax.trim();
  let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(name === || email === ""){
    alert("Please fill all fields!");
    return;
    }
  if(!email.match(emailpattern)){
    alert("Please enter a valid email adress!");
    return;
  }
  alert("Form Submitted Successfully!");
});

// TO- Do List Functionality
function addTask(){
    let taskInput = document.getElementById(taskInput);
    let task = taskInput.ariaValueMax.trim();

    if(task === ""){
        alert("Please enter a task!");
        return;
    }

    let li= document.createElement("li");
    li.textContent = task;

    let removeBtn = document.createElement("button");
    removeBtn. textContent = "X";
    removeBtn. style.background = "none";
   removeBtn.style.border = "none"
    removeBtn. style.cursor = "pointer";
    removeBtn. onclick = function(){ li.remove(); };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    }
