const generateArray = (size, max_num) => {
    let arr = [];
    for(let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * max_num);
    }
    return arr
}


const swap = (x, y, arr) => {
    console.log(`Checking ${arr[x]} and ${arr[y]} right now`);
    let temp = arr[y];
    arr[y] = arr[x];
    arr[x] = temp;
  };

export { generateArray, swap }