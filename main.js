

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function darkMode() {
    console.log("User picked theme: Dark Mode");
    console.log("Setting Value...");
    document.cookie = "theme=dark; path=/";
    console.log("Reloading the page...")
    location.reload();
}

function lightMode() {
    console.log("User picked theme: Light Mode (gross)");
    console.log("Setting Value...");
    document.cookie = "theme=light; path=/";
    console.log("Reloading the page...")
    location.reload();
}

function blackMode() {
    console.log("User picked theme: Black Mode");
    console.log("Setting Value...");
    document.cookie = "theme=black; path=/";
    console.log("Reloading the page...")
    location.reload();
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function(){ 
    let themeCookie = getCookie("theme");
    console.log(themeCookie);
    if (themeCookie == "light") {
        $("body").css("background-color", "#E9F3FF");
        changeCss(".background-header", "background-color: #EFF6FF")
        $("#headerGeneric").attr("src", "/images/header_generic_light.jpg");
        $("body").css("color", "black");
        $("#noBlack").css("color", "#ffffff");
    }
    if (themeCookie == "dark") {

    }
    if (themeCookie == "black") {
        $("body").css("background-color", "#000000");
        changeCss(".background-header", "background-color: #000000")
        $("#headerGeneric").attr("src", "/images/transparent.png");
        $("body").css("color", "white");
    }
}) 

function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    // and we need one div for each class
    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    // append additional style
    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}