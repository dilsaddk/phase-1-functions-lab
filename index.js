function distanceFromInBlocks(pickUpLocation,scuberLocation){
    return pickUpLocation - scuberLocation;
    

}
console.log(distanceFromInBlocks(50,scuberLocation));
const scuberLocation=42

function distanceTravelledInFeet(start,destination){
    return (destination - start) * 264
   
}
console.log(distanceTravelledInFeet(34,38));

function calculatesFarePrice(start,destination){
    const distance=destination-start;
    
    if (distance < 400) return 0;
    if (distance> 400 && distance < 2000) return (destination - start) * 2
    if (distance > 2000 && distance < 2500) return flatFare
    if (distance > 2500) return 'cannot travel that far'
}
console.log(calculatesFarePrice(800,1000))
