let cardName = document.getElementsByClassName("value")[1].innerHTML.replace(/\s|'|"|,/g, "");
let pageURL = (window.location.href.split("gatherer.wizards.com"))[1];

let jsURL = "https://gatherer.jank.zone/js/embed.min.js";

let scriptNode = document.createElement("script");
let htmlNode = document.createElement("section");

scriptNode.setAttribute("data-isso", "https://gatherer.jank.zone");
scriptNode.setAttribute("data-isso-css", "false");
scriptNode.setAttribute("data-isso-avatar-bg", "transparent");
scriptNode.setAttribute("data-isso-require-author", "true");
scriptNode.setAttribute("src", jsURL);

htmlNode.setAttribute("id", "isso-thread");
htmlNode.setAttribute("data-title", cardName);
htmlNode.setAttribute("data-isso-id", cardName);

let insertLocation = document.getElementsByClassName("smallGreyBorder")[1];
insertLocation.insertBefore(htmlNode, null);
insertLocation.insertBefore(scriptNode, null);

window.addEventListener("resize", resizeFunction);

resizeFunction();

function resizeFunction()
{
    if (window.innerWidth < "750")
    {
        if (document.getElementById("isso-thread").style.display !== "none")
        {
            document.getElementById("isso-thread").setAttribute("style", "display: none");
        }
    }
    else
    {
        if(document.getElementById("isso-thread").style.display === "none")
        {
            document.getElementById("isso-thread").removeAttribute("style");
        }
    }
}