// There are N blocks, numbered from 0 to N-1, arranged in a row. A couple of frogs were 
// sitting together on one block when they had a terrible quarrel. Now they want to jump 
// away from one another so that the distance between them will be as large as possible. 
//  The distance between blocks numbered J and K, where J <= K, is computed as K - J + 1. 
//   The frogs can only jump up, meaning that they can move from one block to another only
//    if the two blocks are adjacent and the second block is of the same or greater height 
//    as the first.  What is the longest distance that they can possibly create between each 
//    other, if they also chose to sit on the optimal starting block initially?

// Note: Upload zip file and screenshots of your output or git link here at canvas.



// Write a function:

// function solution(blocks);

// that, given an array blocks consisting of N integers denoting the heights of the blocks, 
// returns the longest possible distance that the two frogs can make between each other starting 
// from one of the blocks.

// Examples:

// Given blocks = [2, 6, 8, 5], the function should return 3.  If starting from blocks[0], 
// the first frog can stay where it is and the second frog can jump to blocks[2] (but not to blocks[3]).

// Screenshot 2022-11-29 115127.png

//     2. Given blocks = [1, 5, 5, 2, 6], the function should return 4.  If starting from blocks[3],
//  the first frog can jump to blocks[1], but not blocks[0], and the second frog can jump to blocks[4].

function solution(blocks) {
    let ans= 0;
    for(let i=0; i<blocks.length; i++){
        let leftMax=i;
        let rightMax=i;
        //go to left
        while(leftMax-1 >= 0 && blocks[leftMax] <= blocks[leftMax-1]){
            leftMax--;
        }
        while(rightMax+1 < blocks.length && blocks[rightMax] <= blocks[rightMax+1]){
            rightMax++;
        }
        ans= Math.max(ans, rightMax - leftMax +1);
    }
    return ans;
}

console.log(solution([2, 6, 8, 5])) // 3
console.log(solution([1, 5, 5, 2, 6])) // 4