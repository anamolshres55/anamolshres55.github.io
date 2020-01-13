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

