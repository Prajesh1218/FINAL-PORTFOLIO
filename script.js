let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-links");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-links");

document.getElementById(tabname).classList.add("active-tab");

};

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px"; // Corrected the value to move it out of the viewport
}

// Example usage:
// To open the menu
openmenu();

// To close the menu
// closemenu();
