// how many approach for the stairway

const climbingStairway = steps =>{
    if(steps <= 2){
        return steps;
    }
    return climbingStairway(steps -1) + climbingStairway(steps-2)
}

console.log(climbingStairway(5))