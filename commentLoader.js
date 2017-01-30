let cardName = document.getElementsByClassName("value")[1].innerHTML.replace(/\s|'|"|,/g, "");
let pageURL = (window.location.href.split("Details"))[0] + cardName + "/";

let modKey = "&mod=%241%24wq1rdBcg%24NVvSZ6qsTGzqKD9aCvQ.X%2F";
let optKey = "&opts=16798&num=10&ts=1485771478900";

let htmlURL = "https://www.htmlcommentbox.com/jread?page=" + pageURL + modKey + optKey;

let xhr = new XMLHttpRequest();
xhr.open('GET', htmlURL, true);
xhr.onreadystatechange = responseCallback;
xhr.send();

window.addEventListener("resize", resizeFunction);

function responseCallback()
{
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
    {
        let mainContainerDIV = document.getElementById("ctl00_ctl00_ctl00_MainContainer");
        let htmlNode = document.createElement("div");
        let anchorTag = document.createElement("a");
        let scriptNode = document.createElement("script");
        
        mainContainerDIV.setAttribute("style", "width: initial");
        
        anchorTag.setAttribute("href", "//www.htmlcommentbox.com");
        anchorTag.text = "Comment Form";
        
        htmlNode.setAttribute("id", "HCB_comment_box");
        
        htmlNode.appendChild(anchorTag);
        htmlNode.appendChild(document.createTextNode(" is loading comments..."));
        htmlNode.setAttribute("class", "commentLoader");
        
        scriptNode.innerHTML = modifyResponseText(xhr.responseText);
        
        document.body.appendChild(htmlNode);
        document.body.appendChild(scriptNode);
    }
}

function modifyResponseText(text)
{
    return text.replace("hcb_user.PAGE", "\"" + pageURL + "\"");
}

function resizeFunction()
{
    let mainContainerDIV = document.getElementById("ctl00_ctl00_ctl00_MainContainer");
    let commentBox = document.getElementById("HCB_comment_box");
    
    if(window.innerWidth < "1160")
    {
        //console.log("Too Small");
        if(mainContainerDIV.style.display !== "none" || commentBox.style.width !== "750px")
        {
            commentBox.setAttribute("style", "display: none");
            mainContainerDIV.setAttribute("style", "width = 750px");
        }
    }
    else
    {
        if(getComputedStyle(commentBox, null).display === "none" || mainContainerDIV.style.width === "750px")
        {
            mainContainerDIV.setAttribute("style", "width: initial");
            commentBox.removeAttribute("style");
        }
    }
}

// Don't worry about this. You didn't see anything. 
//let insertLocation = document.getElementsByClassName("smallGreyBorder")[2];
//insertLocation.insertBefore(newNode, null);


