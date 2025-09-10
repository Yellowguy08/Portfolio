//                0       1        2         3        4
const legend = ["peak", "valley", "plain", "forrest", "water"];

const peak_types = ["mt", "butte", "hill"];

const water_types = ["lake", "sea", "river"];

let svg = document.getElementById("Map-Background");
let width = svg.getBoundingClientRect().width;
let height = svg.getBoundingClientRect().height;

const START_HEIGHT = 10;
const JUMP = 20;
const RATE = 20;

class mapItem {

    constructor (name, icon, desc, date) {

        self.name = name;
        self.icon = icon;
        self.desc = desc;
        self.date = date;
    }

}

class mapSvg {

    constructor() {
        self.points = [];
        self.X_dist = 0;
        self.Y_dist = 0;
    }

    addPoint(point) {
        self.points.push(point);
    }

    setDists(Xdist, Ydist) {
        self.X_dist = Xdist;
        self.Y_dist = Ydist;
    }

    getXDist() {
        return self.X_dist;
    }

    getYDist() {
        return self.Y_dist;
    }

    getPoints() {
        return self.points;
    }

}

let mapFeatures = [

    new mapItem("First Hour of Code", legend[2], "My first experience with coding was in 1st grade doing Code.org's 'Hour of Code'", new Date("2013")),
    new mapItem("Expedition Scratch", legend[3], "Starting a scratch account with my friend taking my coding outside of the classroom for the first time.", new Date("2019")),
    new mapItem("Scratch Egg Takeout Released", legend[0], "My first original working game to be published to my scratch account and the main project I would focus on for a long while.", new Date("2020-12-22")),
    new mapItem("Godot Migration", legend[1], "Due to the unity runtime fee and other leadership issues I migrated over to the godot game engine and started to remake my projects in the new engine.", new Date("2023-10-04")),
    new mapItem(),
    new mapItem(),
    new mapItem(),

];

function CreateOldMap() {

    // build to half width from both sides. then average middle point.

    var dist = 0;
    const THRESHOLD = height / 25;

    var currMapHeight = height / START_HEIGHT;

    console.log("Starting Map Height: " + currMapHeight);
    console.log("Threshold: +/- " + THRESHOLD);

    let m0 = new mapSvg();

    while (dist < width / 2 - 10) {
        let rNum = (Math.random() * (width / RATE)) + (width / RATE);

        console.log("Random Number: " + Math.round(rNum));

        dist += rNum;

        console.log("Distance/Width: " + Math.round(dist) + "/" + Math.round(width));

        console.log(Math.round(rNum) % 3);

        if (Math.round(rNum) % 3 == 0) {

            let min = Math.min(JUMP,Math.abs((height / START_HEIGHT - THRESHOLD)- currMapHeight)); // SOLVE ON WHITEBOARD

            m0.addPoint([rNum, -min]);
            currMapHeight -= min;
            
            console.log("...Rise " + Math.round(min) + "px");

        } else if (Math.round(rNum) % 3 == 1) {

            let max = Math.min(JUMP, Math.abs(height / START_HEIGHT + THRESHOLD - currMapHeight));

            m0.addPoint([rNum, max]);
            currMapHeight += max;

            console.log("...Fall " + Math.round(max) + "px");

        } else {
            m0.addPoint([rNum, 0]);
            console.log("...Keep Straight");
        }

        console.log("");
        console.log("Current Height: " + currMapHeight);
        console.log("");

    }

    console.log("--------------------------------------------------------");
    console.log("");

    m0.addPoint([dist, currMapHeight]);

    console.log("Points: " + m0.getPoints());

    return m0.getPoints();

}

// function createMapBackground() {

//     let svg = document.getElementById("Map-Background");
//     let width = svg.getBoundingClientRect().width;
//     let height = svg.getBoundingClientRect().height;

//     var path = "<path d='M0 ";

//     path += (height / 8) + " ";

//     var dist = 0;

//     while (dist < width) {
//         let rNum = (Math.random() * (width / 20)) + (width / 20);

//         dist += rNum;

//         path += `l ${rNum} `

//         if (Math.round(rNum) % 3 == 0) {
//             path += "-30 ";   
//         } else if (Math.round(rNum) % 3 == 1) {
//             path += "0 ";
//         } else {
//             path += "30 ";
//         }
//     }

//     path += `L ${width} `

//     path += (7 * (height / 8)) + " ";

//     dist = width;
//     let m1 = new mapSvg();

//     while (dist > 0) {
//         let rNum = (Math.random() * (width / 20)) + (width / 20);

//         dist -= rNum;

//         path += `l ${-rNum} `

//         if (Math.round(rNum) % 3 == 0) {
//             path += "-30 ";
//             m1.addPoint([rNum, -30]);
//         } else if (Math.round(rNum) % 3 == 1) {
//             path += "0 ";
//             m1.addPoint([rNum, 0]);
//         } else {
//             path += "30 ";
//             m1.addPoint([rNum, 30]);
//         }
//     }

//     path += "'X />"

//     svg.innerHTML = path;
//     // console.log("old method" + m1.getPoints());
// }

// createMapBackground();

function ReadMapData(mapData_topL, mapData_topR, mapData_bottomL, mapData_bottomR) {

    var path = "<path d='M0 ";

    path += height / START_HEIGHT + " ";

    var dist = 0;

    for (var i = 0; i < mapData_topL.length -2; i++) {

        path += `l ${mapData_topL[i][0]} ${mapData_topL[i][1]} `
    }

    path += `L ${mapData_topR[mapData_topR.length-1][0]} ${mapData_topR[mapData_topR.length-1][1]} `;

    for (var i = 1; i < mapData_topR.length - 2; i++) {

        path += `l ${mapData_topR[i][0]} ${-mapData_topR[i][1]} `
    }

    path += `L ${width + 10} ${height / START_HEIGHT} `;

    path += `L ${width + 10} ${(START_HEIGHT-1) * height / START_HEIGHT} `

    for (var i = mapData_bottomR.length - 2; i > 0; i--) {

        path += `l ${-mapData_bottomR[i][0]} ${mapData_bottomR[i][1]} `
    }

    path += `L ${width - mapData_bottomL[mapData_bottomL.length-1][0]} ${height - mapData_bottomL[mapData_bottomL.length-1][1]} `;

    for (var i = mapData_bottomL.length-2; i > 0; i--) {

        path += `l ${-mapData_bottomL[i][0]} ${mapData_bottomL[i][1]} `
    }

    path += "L-10 ";

    path += ((START_HEIGHT-1) * height / START_HEIGHT) + " ";

    path += "' />";


    svg.innerHTML = path;
}

ReadMapData(CreateOldMap(), CreateOldMap(), CreateOldMap(), CreateOldMap());