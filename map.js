//                0       1        2         3        4
const legend = ["peak", "valley", "plain", "forrest", "h2o"];

const peak_types = ["mt", "butte", "hill"];

const h2o_types = ["lake", "sea", "river"];

class mapItem {

    constructor (name, icon, desc, date) {

        self.name = name;
        self.icon = icon;
        self.desc = desc;
        self.date = date;
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