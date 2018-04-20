var monitor = {
    cameras : [
        { video: "http://192.168.101.21:8081", control: "http://192.168.101.21:8080" },
        { video: "http://192.168.101.31:8080/video", control: "http://192.168.101.31:8080" },
        { video: "http://192.168.101.32:8080/video", control: "http://192.168.101.32:8080" },
        { video: "http://192.168.101.33:8080/video", control: "http://192.168.101.33:8080" }
    ],

    toggle : function(hide, show) {
        document.getElementById(hide).style.display = "none";
        document.getElementById(show).style.display = "inline-block";
    },

    createCamera : function(i, video, control) {
        var camId = "cam" + i;
        var camControlId = "cam" + i + "_control";

        var iframe = document.createElement('iframe');
        iframe.style.borderStyle = "none";
        iframe.style.borderColor = "inherit";
        iframe.style.borderWidth = "0px";
        iframe.style.width = "640px";
        iframe.style.height = "480px";
        iframe.src = video;

        var div = document.createElement("div");
        div.setAttribute("id", camId);
        div.setAttribute("class", "cam");
        div.onclick = function() {monitor.toggle(camId, camControlId);};
        div.appendChild(iframe);
        document.body.appendChild(div);


        var aControlBack = document.createElement("a");
        aControlBack.href = "#";
        aControlBack.onclick = function() {monitor.toggle(camControlId, camId);};
        aControlBack.innerHTML = "<- Back to Video";

        var divControlBack = document.createElement("div");
        divControlBack.setAttribute("class", "back");
        divControlBack.appendChild(aControlBack);

        var divControlIFrame = document.createElement('iframe');
        divControlIFrame.style.borderStyle = "none";
        divControlIFrame.style.borderColor = "inherit";
        divControlIFrame.style.borderWidth = "0px";
        divControlIFrame.style.width = "640px";
        divControlIFrame.style.height = "460px";
        divControlIFrame.src = control;

        var divControl = document.createElement("div");
        divControl.setAttribute("id", camControlId);
        divControl.setAttribute("class", "cam_control");
        divControl.style.display = "none";
        divControl.appendChild(divControlBack);
        divControl.appendChild(divControlIFrame);
        document.body.appendChild(divControl);
    },

    init : function() {
        var i;
        for (i = 0; i < this.cameras.length; i++) {
            this.createCamera(i+1, this.cameras[i].video, this.cameras[i].control);
        }
    }
}
