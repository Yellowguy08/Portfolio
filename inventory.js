let inventory_items = document.querySelectorAll("#content div");
let index = 0;

var highestZ = 1;

function removeClass() {
    inventory_items.forEach(obj => {
        obj.firstElementChild.classList.remove("selected");
    })
}

document.body.addEventListener("keydown", function(event) {

    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        if (event.key == " ") {
           checkForInfoBox(inventory_items[index]);
        }

        if (event.key == "s" || event.key == "S" || event.key == "ArrowDown") {
            removeClass();
            index ++;
            if (index >= inventory_items.length) {
                index = 0;
            }

            inventory_items[index].firstElementChild.classList.add("selected");
        } else if (event.key == "w" || event.key == "W" || event.key == "ArrowUp") {
            removeClass();
            index --;
            if (index < 0) {
                index = inventory_items.length-1;
            }
            inventory_items[index].firstElementChild.classList.add("selected");
        }
    }

})

inventory_items.forEach(function callback(obj, i) {
	obj.addEventListener("click", function(event){
        checkForInfoBox(obj)

		removeClass();

        index = i;

        obj.firstElementChild.classList.add("selected");

	});
});

function checkForInfoBox(app) {

    if (app.firstElementChild.classList.contains("selected")) {
        if (!document.getElementById(app.children[1].textContent+"-info")) {
            createInfoBox(app.children[1].textContent);
        } else if (highestZ < 900) {
            document.getElementById(app.children[1].textContent+"-info").style.zIndex = highestZ+1;
            highestZ++;
        }
    }

}

function createInfoBox(name) {
    let app_info = document.createElement("div");
    app_info.id = name + "-info";
    app_info.classList.add("app-info");

    let top_bar = document.createElement("div");
    top_bar.classList.add("top-bar");

    let app_title = document.createElement("div");
    app_title.classList.add("app-title");
    app_title.textContent = name;
    app_title.addEventListener("mousedown", function(event) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        event.preventDefault();

        pos3 = event.clientX;
        pos4 = event.clientY;

        document.onmouseup = function() {
            document.onmousemove = null;
        }

        document.onmousemove = function(event) {
            event.preventDefault();
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            pos3 = event.clientX;
            pos4 = event.clientY;
            app_info.style.top = (app_info.offsetTop - pos2) + "px";
            app_info.style.left = (app_info.offsetLeft - pos1) + "px";
        };
    });

    let x = document.createElement("div");
    x.classList.add("x");
    x.textContent = "x";
    x.addEventListener("click", function(event) {
        x.parentElement.parentElement.remove();
    })

    top_bar.appendChild(app_title);
    top_bar.appendChild(x);

    app_info.appendChild(top_bar);

    let desc = document.createElement("div");

    let desc_content = document.createElement("div");
    desc_content.textContent = getInfoDesc(name);
    desc.classList.add("app-desc");

    desc.appendChild(desc_content);

    app_info.appendChild(desc);

    let resize = document.createElement("div");
    resize.innerHTML = "<svg stroke-width='3' stroke='#fff' viewBox='0 0 50 50'><path d='M45 5 L5 45 M45 20 L20 45 M45 35 L35 45'/></svg>"
    resize.classList.add("resize");
    resize.addEventListener("mousedown", function(event) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        event.preventDefault();

        pos3 = event.clientX;
        pos4 = event.clientY;

        let width = app_info.getBoundingClientRect().width;
        let height = app_info.getBoundingClientRect().height;

        document.onmouseup = function() {
            document.onmousemove = null;
        }

        document.onmousemove = function(event) {
            event.preventDefault();
            pos1 = event.clientX - pos3;
            pos2 = event.clientY - pos4;

            app_info.style.width = (width + pos1) + "px";
            app_info.style.height = (height + pos2) + "px";
        };
    });

    app_info.appendChild(resize);

    app_info.addEventListener("mousedown", function() {
        if (highestZ < 900 && app_info.style.zIndex != highestZ) {
            app_info.style.zIndex = highestZ + 1;
            highestZ++;
        }
    })

    if (highestZ < 900) {
        app_info.style.zIndex = highestZ + 1;
        highestZ ++;
    }

    document.body.appendChild(app_info);
}

function getInfoDesc(name) {

    switch (String(name).toLowerCase()) {

        case "vs code":
            return "I have reasonable understanding of Visual Studio Code. I am able to confidantly navigate and use many of its features. I still lack an adept understanding of shortcuts and complex features.";
        case "unity":
            return "I can roughly navigate around Unity's UI and systems and can create simple game systems and scripts.";
        case "godot":
            return "I am able to navigate and create nodes, resources, and scripts (in C#) somewhat confidently.";
        case "scratch":
            return "I have a deep understanding how most of the blocks function as well as how to use extensions to create complex systems.";
        case "github":
            return "I have a basic understanding of the platform that allows me to use it with teams in for most basic and stardard purposes.";
        defualt:
            return "No Entry Available.";
    }
}