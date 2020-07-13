var tableDOM;


function loadDoc() {
    tableDOM = document.getElementById("tabnames");
    
    GetAjax();
}


function GetAjax()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            DisplayItems(this.response);
        }
    };
    xhttp.open("GET", "./ajax.php");
    xhttp.send();
}


async function DisplayItems(s)
{
    var json = JSON.parse(s);
    json.forEach(item => RenderItem(item));
}


function RenderItem(i)
{
    var html ="";
    html += "<tr><td style=\"border-bottom:solid black 1px\">";
    html += i.item;
    html += "</td></tr>";

    tableDOM.innerHTML += html;
}


function onDocumentReady()
{
    document.getElementById("button").onclick = (e) => {
        tableDOM.innerHTML = null;
        GetAjax();
    };

    loadDoc();
}


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        onDocumentReady();
    }
}

