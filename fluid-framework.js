//
// ____  __    __  __  ____  ____     ____  ___ 
//( ___)(  )  (  )(  )(_  _)(  _ \   (_  _)/ __)
// )__)  )(__  )(__)(  _)(_  )(_) ) .-_)(  \__ \
//(__)  (____)(______)(____)(____/()\____) (___/
//
// Fluid Framework v1
//

// 
// **DOM READY | These scripts will run when the DOM has finished loading.
//
// Table Responsiveness
$(document).ready(function() {
    $('table').wrap('<div class="table-wrapper" />');
});
// Remove Empty Options
$(document).ready(function(){
    $('option[value=""],option:not([value])').remove();
});

// 
// **DOM EVENTS | These scripts will run when their event has been triggered.
//
// Modal Popup
$("[data-open-modal]").click(function() {
    var modal = $(this).data("open-modal");
    $(`[data-modal="${modal}"]`).wrapInner('<div class="modal-wrapper" />').fadeIn();
    $(".close-modal").click(function() {
      $(`[data-modal="${modal}"]`).hide();
      $('.modal-wrapper').contents().unwrap();
    });
});
// Menu Toggle
$('.nav-toggle').click(function(){ 
    $('.navigation ul:first').slideToggle();
});

// Dropdown Menu Items
$('[data-open-dropdown]').click(function() {
    var dDown = $(this).data('open-dropdown');
    $(`[data-dropdown="${dDown}"]`).slideToggle();
});