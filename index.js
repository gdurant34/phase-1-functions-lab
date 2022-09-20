function distanceFromHqInBlocks(block) {
    if(block >= 42) {
        const blocksAway = block - 42;
        return blocksAway;
    } else if(block < 42) {
        const blocksAway = 42 - block;
        return blocksAway;
    }
}

function distanceFromHqInFeet(block) {
    const numberOfBlocks = distanceFromHqInBlocks(block);
    const oneBlockInFeet = 264
    return numberOfBlocks * oneBlockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    if(start >= destination) {
        const oneBlockInFeet = 264;
        return (start - destination) * oneBlockInFeet;
    } else if(start < destination) {
        const oneBlockInFeet = 264;
        return (destination - start) * oneBlockInFeet;    
    }
}

function calculatesFarePrice(start, destination) {
    const numberOfFeet = distanceTravelledInFeet(start, destination);
    if(numberOfFeet <= 400) {
        return 0;
    } else if(numberOfFeet > 400 && numberOfFeet <= 2000) {
        const billableFeet = numberOfFeet - 400;
        return billableFeet * .02;
    } else if(numberOfFeet > 2000 && numberOfFeet <= 2500) {
        return 25;
    } else if(numberOfFeet > 2500) {
        return 'cannot travel that far';
    }
}