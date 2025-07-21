let container = document.getElementById("container")
let grid = document.getElementById("Grid")
let reset = document.getElementById("Reset")
let items = document.getElementsByClassName("item")





grid.addEventListener("click",()=>{
    let input = document.getElementById("inpt").value
    const squareSize = container.clientWidth/input;
    if (isNaN(input)){
        alert("please enter a valid value")
    } else if (input>100 || input <1){
        alert("please enter valid value")
    } else {
            container.textContent = ""
     for (let i=0;i< input;i++){
        let  row = document.createElement("div")
            row.className = "box"
            row.style.width = `${squareSize}px`
            row.style.height = `${squareSize}px`
            container.appendChild(row)
            for (let k=0;k<input;k++){
                let column = document.createElement("div")
                column.className = "item"
                 column.style.width = `${squareSize}px`
                 column.style.height = `${squareSize}px`
                row.appendChild(column)
            } 
    }
    // instead of using this you can also use column.addEventListner which will be much simpler 
    // used for loop instead of forEach because getElementByClassName because it is HTMLCollection, not an array 
    for (let i=0;i<items.length;i++){
    self = items[i]
    self.addEventListener("mouseenter",(e)=>{
        for (let i=0;i<items.length;i++){
             e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
        }
    })
}
    }

})


reset.addEventListener("click",(e)=>{
    for (let i=0;i<items.length;i++){
        self = items[i]
        self.style.backgroundColor = "#FAF0E6"
    }
})




// function changeColor(e){
//     for (let i=0;i<items.length;i++){
//         e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//     }
// }




// for (let i=0;i<items.length;i++){
//     self = items[i]
//     self.addEventListener("mouseenter",(e)=>{
//         for (let i=0;i<items.length;i++){
//              e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//         }
//     })
// }
