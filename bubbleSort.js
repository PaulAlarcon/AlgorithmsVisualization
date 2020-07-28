let arr = [2, 6, 7, 9, 2, 3 ,4 , 5];

const canvas = document.querySelector(".myCanvas");
const context = canvas.getContext("2d");
const paintCanvas = (color ) => {
    context.fillStyle = color
    context.fillRect(0, 0, canvas.width, canvas.height)
}

paintCanvas("black");

let originX = 10;
let originY = canvas.height - 20;
let width = canvas.width/ arr.length ;
let spacing = width*.1;
let heightScale = canvas.height * 0.1;
let margin = spacing/2;

const drawArray = (arr) =>{
    arr.forEach( (element, index) => {
        let posX = index * width + margin;
        context.fillStyle = "white"
        context.fillRect( posX , originY - (heightScale * element), width - spacing, (heightScale * element)  );
    });
}

let i = 0;

drawArray(arr)

console.log(arr.length)

const currentInterval = setInterval(() => {
   if(i  == arr.length ) clearInterval(currentInterval);
    for(let j  = 1 ; j < arr.length ; j++){
        if(arr[j - 1]  > arr[j]) {
            paintCanvas("black");
            drawArray(arr);
            swap(j - 1, j, arr);
        }
    }    
    i++;
    console.log(i);
}, 1000)


const swap = (x, y, arr) => {
    console.log(`Checking ${arr[x]} and ${arr[y]} right now`)
    let temp = arr[y];
    arr[y] = arr[x];
    arr[x] = temp;
}