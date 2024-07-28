function addItem() {
    const newItem = document.createElement("li");
    newItem.className = "li"
    newItem.textContent = document.getElementById("input").value
    if (newItem.textContent == "") {
        window.alert("You cannot Add an empty task")
    }
    else {
        const check = document.createElement("input")
        check.type = "checkbox"
        check.className = "checked"
        check.addEventListener("change", () =>{
            if(check.checked){
                newItem.style.backgroundColor = "rgb(31, 30, 30)"
                newItem.style.color = "lime"
                newItem.style.textDecoration = "line-through"
                newItem.style.textDecorationColor="hsl(0, 0%, 95%)"
                delBtn.style.backgroundColor = "lime"
                delBtn.style.color = "black"
            }
            else{
               newItem.style.backgroundColor = "lime"
               newItem.style.color = "black"
               newItem.style.textDecoration = "none"
               delBtn.style.backgroundColor = "black"
               delBtn.style.color = "lime"
            }
            
        })
        
        const delBtn = document.createElement("button")
        delBtn.className = "fa fa-trash-o del"
        document.getElementById("input").value = ""
        const toDolist = document.getElementById("list");
        newItem.append(check,delBtn)
        toDolist.append(newItem)
        delBtn.addEventListener("click", () => {
        toDolist.removeChild(newItem)
        })



    }
}
function clearList() {
    document.getElementById("list").innerHTML = ""
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addItem()
    }
})
