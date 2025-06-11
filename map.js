const legend = ["mt", "valley", "plain", "forrest", "h2o"];

const mt_types = ["mt", "butte", "hill"];

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

    new mapItem(),
    new mapItem(),
    new mapItem(),
    new mapItem(),
    new mapItem(),
    new mapItem(),
    new mapItem(),

];