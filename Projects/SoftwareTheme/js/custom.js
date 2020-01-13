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

function enableToggleIcon() {
    $(".tooglebtn").on("click", function() {
        $(this).closest('div').find('p').toggleClass("open");
    });
}

window.addEventListener("DOMContentLoaded", function() {
    enableToggleIcon();
});