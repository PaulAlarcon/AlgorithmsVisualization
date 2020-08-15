import * as util from "../utils/util.js";
import * as Canvas from "../utils/canvas.js";
import * as modal from "../utils/modal.js";


  const activeButtons = () => {
    let finalIteration = canvasBlobs.length - 1;
    let i = finalIteration;

    const buttons = document.querySelectorAll(".control");
    buttons.forEach( b => {
      b.addEventListener('click', () => {
        if(b.id == 'prevButton'){
          if(i > 0) {
            i = i - 1;
          Canvas.renderImage(canvasBlobs[i]);
          }
        }
        else if(b.id =='nextButton' ){
          if(i <= finalIteration){
          Canvas.renderImage(canvasBlobs[++i]);
          }
        }
        else if(b.id == 'finalButton'){

          i = finalIteration;
          Canvas.renderImage(canvasBlobs[i]);
        }
      }
      )
    }
    )

  }

    let arr = util.generateArray(10, 50);
    // let arr = [20., 22, 3, 4, 5, 7, 8, 11, 12, 22, 23, 44, 6,25];
    let originY = Canvas.height - 20;
    let width = Canvas.width/arr.length;
    let spacing = width * 0.1;
    let heightScale = Canvas.height * 0.1;
    let margin = spacing / 2;

    let canvasBlobs = [];

    const drawArray = (arr) => {
        arr.forEach((element, index) => {
          let posX = index * width + margin;
          let rectHeight = heightScale + element * 10;
          Canvas.ctx.fillStyle = "white";
          Canvas.ctx.fillRect(
            posX,
            originY -rectHeight ,
            width - spacing,
            rectHeight
          );
        });
      };

     //bubble sort
    const bubbleSort  = () => {
    let i = 0;
    const currentInterval = setInterval(() => {

      if (i == arr.length){
        clearInterval(currentInterval);
        // modal.openModal();
        console.log(arr);
        Canvas.canvas.toBlob( c => canvasBlobs.push(c));
        activeButtons();
      } 

      for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] > arr[j]) {
          util.swap(j - 1, j, arr);
          //Repaint canvas everytime
          Canvas.paintCanvas("black");
          //Draw array to the canvas;
          drawArray(arr);
          //Adds the current state of the canvas to the screen
          Canvas.canvas.toBlob( c => canvasBlobs.push(c));
        }
      }
      i++;
    }, 1000/15);

  }




bubbleSort();







