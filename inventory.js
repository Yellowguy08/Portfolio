let inventory_items = document.querySelectorAll("#content div");
let index = 0;

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
            console.log("down");
            removeClass();
            index ++;
            if (index >= inventory_items.length) {
                index = 0;
            }

            inventory_items[index].firstElementChild.classList.add("selected");
        } else if (event.key == "w" || event.key == "W" || event.key == "ArrowUp") {
            console.log("up");
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

    let resize = document.createElement("div");
    resize.classList.add("resize");

    app_info.appendChild(resize);

    document.body.appendChild(app_info);
}