let inventory_items = document.querySelectorAll("#content div");
let index = 0;

function removeClass() {
    inventory_items.forEach(obj => {
        obj.firstElementChild.classList.remove("selected");
    })
}

document.body.addEventListener("keydown", function(event) {

    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
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
		removeClass();

        index = i;

        obj.firstElementChild.classList.add("selected");

	});
});