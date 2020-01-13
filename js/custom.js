function showProjectNameOnHover () {
    $('.thumbnail').hover( function(){
        $(this).parent('a').siblings('.portfolio-text-container').toggle();
    });
}

function showRespectiveSectionOnClick (x) {
    if(x.matches){
        $( ".sidebar-menu-item" ).click(function() {
            $(".content").hide();
            $(".content").addClass('visibility-off');
            let el = $(this).attr('href');
            $(el).toggle();
            $(el).toggleClass('visibility-off');
          });
    }
}
window.addEventListener('DOMContentLoaded',function(){
    var x = window.matchMedia("(min-width: 600px)")
    showRespectiveSectionOnClick(x);
    x.addListener(showRespectiveSectionOnClick) // Attach listener function on state changes
    showProjectNameOnHover();
});