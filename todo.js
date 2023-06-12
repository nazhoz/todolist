window.addEventListener("load",() =>{

    const form = document.querySelector("#task-form")
    const input = document.querySelector("#task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener("submit",(e) =>{
        e.preventDefault()
        
        const task = input.value
        if(!task){
            alert("Fill the box")
            return
        }   
        const task_ele = document.createElement("div")
        task_ele.classList.add("task")

        const content_ele = document.createElement("div")
        content_ele.classList.add("content")

        task_ele.appendChild(content_ele)

        const input_ele = document.createElement("input")
        input_ele.classList.add("text")
        input_ele.type = "text"
        input_ele.value = task
        input_ele.setAttribute("readonly","readonly")

        content_ele.appendChild(input_ele)

        const action_ele = document.createElement("div")
        action_ele.classList.add("actions")
        
        task_ele.appendChild(action_ele)
        
        const edit_ele = document.createElement("button");
        edit_ele.classList.add("edit");
        edit_ele.innerText = "Edit";

        const delete_ele = document.createElement("button");
        delete_ele.classList.add("delete");
        delete_ele.innerText = "Delete";

        
        action_ele.appendChild(edit_ele);
        action_ele.appendChild(delete_ele);

        list_el.appendChild(task_ele)

        edit_ele.addEventListener("click", (e) =>{
            if (edit_ele.innerText.toLowerCase() == "edit") {
                edit_ele.innerText = "save";
                input_ele.removeAttribute("readonly");
                input_ele.focus();
              } else {
                edit_ele.innerText = "edit";
                input_ele.setAttribute("readonly", "readonly");
              }
        })



            delete_ele.addEventListener("click",(e) =>{ 
                list_el.removeChild(task_ele)
            })
    })
})