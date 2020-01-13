function openmobileNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}



function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}

function opensearchDiv() {
    document.getElementById("searchDiv").style.display = "block";
}

function closesearchDiv() {
    document.getElementById("searchDiv").style.display = "none";
}

function toggleMenuList() {
    if(checkMenuList()) {
        showMenuList();
    }
    else {
        hideMenuList();
    }
}

function checkMenuList() {
   return  ( window.getComputedStyle( document.getElementById('mobile-menu-list') ).display == 'none');
}

function showMenuList() {
    document.getElementById('mobile-menu-list').style.display = "grid";
}

function hideMenuList() {
    document.getElementById('mobile-menu-list').style.display = "none";
}

