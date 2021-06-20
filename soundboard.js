function playAir () {
    document.getElementById("airs").play();
}

let AirButton = document.getElementById("air");


AirButton.onclick = function () {
    playAir();
}

function playDoor () {
    document.getElementById("doors").play();
}

let DoorButton = document.getElementById("door");


DoorButton.onclick = function () {
    playDoor();
}

function playExp () {
    document.getElementById("exps").play();
}

let ExpButton = document.getElementById("explosion");


ExpButton.onclick = function () {
    playExp();
}