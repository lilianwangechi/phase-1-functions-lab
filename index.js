// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
//   const hqLocation = 42;
// let distanceInBlocks;

// hqLocation > 42 ?(Number(blocks)-42):(42 -Number(blo));
  if (Number(blocks) > 42){
    return Number(blocks) - 42;
      }else if(42 > Number(blocks)){
    return 42 - Number(blocks)
  }

}

function distanceFromHqInFeet(blocks){
let distanceInBlocks =distanceFromHqInBlocks(blocks)

return distanceInBlocks * 264;
}
function distanceTravelledInFeet(start,destination){
  if (Number(destination) > Number(start)){
return (Number(destination)-Number(start)) * 264;
  }else 
  return (Number(start) -Number(destination)) * 264;
}
function calculatesFarePrice(start,destination){
  let distanceInFeet = distanceTravelledInFeet(start,destination)
  if(distanceInFeet <= 400){
    return 0
  }else if(distanceInFeet > 400 && distanceInFeet < 2000){
  return ((distanceInFeet -400)* 0.02)
  }else if (distanceInFeet > 2001 && distanceInFeet < 2500){
    return 25
  }else{
    return 'cannot travel that far'
  }
}