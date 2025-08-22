let app_titles = document.querySelectorAll(".app-title");

app_titles.forEach(function callback(obj, i) {
	obj.addEventListener("mousedown", function(event){
        console.log("mouseDown");
        dragMouseDown(event);
	});
});

    function dragMouseDown(event) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // event.preventDefault();

        pos3 = event.clientX;
        pos4 = event.clientY;

        document.onmouseup = closeDragElement(event);
        document.onmousemove = elementDrag(event);

        function elementDrag() {
            event.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            pos3 = event.clientX;
            pos4 = event.clientY;
            // set the element's new position:
            app_info.style.top = (app_info.offsetTop - pos2) + "px";
            app_info.style.left = (app_info.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }