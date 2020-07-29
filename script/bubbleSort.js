import * as util from "./util.js";
import * as canvas from "./canvas.js";
import * as modal from "./modal.js";


    let arr = util.generateArray(75, 50);

    let originX = 10;
    let originY = canvas.height - 20;
    let width = canvas.width/arr.length;
    let spacing = width * 0.1;
    let heightScale = canvas.height * 0.1;
    let margin = spacing / 2;

    const drawArray = (arr) => {
        arr.forEach((element, index) => {
          let posX = index * width + margin;
          let rectHeight = heightScale + element * 10;
          canvas.ctx.fillStyle = "white";
          canvas.ctx.fillRect(
            posX,
            originY -rectHeight ,
            width - spacing,
            rectHeight
          );
        });
      };


      console.log(arr);

    const bubbleSort = () => {

    }

    let i = 0;
    const currentInterval = setInterval(() => {

      if (i == arr.length){
        clearInterval(currentInterval);
        modal.openModal();
        console.log(arr);
      } 

      for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] > arr[j]) {
          util.swap(j - 1, j, arr);
          canvas.paintCanvas("black");
          drawArray(arr);
        }
      }

      i++;
    }, 1000/18);






