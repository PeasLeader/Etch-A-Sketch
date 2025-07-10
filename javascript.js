let container = document.getElementById("container")
let grid = document.getElementById("Grid")
let reset = document.getElementById("Reset")
let items = document.querySelectorAll(".item")

grid.addEventListener("click",()=>{
    let input = document.getElementById("inpt").value
    console.log(input)
    const squareSize = container.clientWidth/input;
  if (isNaN(input)){
    alert("please enter a valid number")
  } else if (input >100 || input<1){
    alert("please enter a valid number")
  } else {
    container.textContent = " "
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
                            column.addEventListener("mouseenter",()=>{
                                column.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
                            })
                    } 
        }
    }
})



// function changeColor(e){
//     for (let i=0;i<items.length;i++){
//         e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//     }
// }

// document.addEventListener('mouseenter',(e)=>{
//     if (e.target.classList.contains("item")){
//         for (let j=0;j<items.length;j++){
//           e.target.style.backgroundColor =  `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`  
//         }
//     }
// })






// for (let j=0;j<items.length;j++){
//     self = items[j]
//     self.addEventListener("mouseenter",(e)=>{
//         for (let p=0;p<items.length;p++){
//              e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//         }
//     })
// }


// const squareSize = container.clientWidth/20;

// for (let i=0;i<20;i++){
//     let row = document.createElement("div")
//     row.className = "box"
//     row.style.width = `${squareSize}px`
//     row.style.height = `${squareSize}px`
//     container.appendChild(row)
//         for (j=0;j<20;j++){
//             let column = document.createElement("div")
//              column.className ="item"
//              column.style.width = `${squareSize}px`
//              column.style.height = `${squareSize}px`
//              row.appendChild(column)
//              column.addEventListener("mouseenter",()=>{
//                 column.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//              })
//         }
// } 

// function changeColor(e){
//     for (let i=0;i<items.length;i++){
//          e.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*122},${Math.random()*255})`
//     }
// }


// items.forEach(item =>{
//     item.addEventListener("mouseover",changeColor)
// })