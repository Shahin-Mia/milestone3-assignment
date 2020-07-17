//No.1 assignment feet to mile converter function
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can not be negetive";
    } else {
        let mile = feet / 5280;
        return mile;
    }
}


//No.2 assignment Wood calculating function
function woodCalculator(chair, table, bed) {
    let totalVolumeOfWood = (chair * 1) + (table * 3) + (bed * 5);
    return totalVolumeOfWood;
}


//No.3 assignment Brick calculating function 
function brickCalculator(floors) {
    const bricksForEveryFeet = 1000;
    let totalBricksForFloor = 0;
    if (floors <= 10) {
        totalBricksForFloor += floors * bricksForEveryFeet * 15;
        return totalBricksForFloor;
    } else if (floors <= 20) {
        totalBricksForFloor += floors * bricksForEveryFeet * 12 + 30000;
        return totalBricksForFloor;
    } else {
        totalBricksForFloor += floors * bricksForEveryFeet * 10 + 70000;
        return totalBricksForFloor;
    }
}


//No.4 assignment Tiny Friend Function
function tinyFriend(array) {
    let friend = "";
    let smallName = array[0].length;
    for (let i = 0; i < array.length; i++) {
        let element = array[i].length;
        if (element < smallName) {
            smallName = element;
            friend = array[i];
        }
    }
    return friend;
}