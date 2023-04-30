// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(distanceInFeet) {
    let blocks = distanceFromHqInBlocks(distanceInFeet);
    return (blocks * 264);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let distance = (Math.abs(destination - start) * 264);
    if (distance >= 2500) {
        return 'cannot travel that far';
    } else if (distance >= 2000 && distance < 2500) {
        return 25;
    } else if (distance <= 400) {
        return 0;
    } else {
        return ((distance - 400) * .02);
    }
}