// method 1 optimized code
function(candies, extraCandies){
    let mx=Math.max(...candies)
    return candies.map((item)=>(item + extraCandies) >=mx)
}

// bruteforce method
function(candies, extraCandies) {
    let max = candies[0];
    const arr=[];
    for(let i=1;i<candies.length;i++){
        if(max < candies[i])  max = candies[i];
    }
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies  >= max ){
            arr.push(true);
        }
        else{
            arr.push(false);
        }
    }
    return arr;

};
