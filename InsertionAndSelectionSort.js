function selction_sort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[min]){
                min = j;
            }
        }
        if(i!==min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}
// INsertion sort 
function insertion_sort(arr){
for(let i=1;i<arr.length;i++){
    let cur = arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>cur){
        arr[j+1] = arr[j];
        console.log("inside while loop :" +arr);   
        j--;
    }
    arr[j+1] = cur;
}
}
