$(function() {

	// 'use strict';
	// var window_height = $(window).height(),
 //       content_height = window_height - 130;

 //    $('#banner').height(content_height);


  //////////// popover ///////////

  $('.pop').popover(function(){
    $('button').trigger('click');
  });

  $('.dropdown-toggle').dropdown();
  $('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
	})

    ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-link').slideToggle();
  });

    ////////// date ///////////
    $('input[name="birthdate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    }, 
    function(start, end, label) {
        var years = moment().diff(start, 'years');
    });
  
});