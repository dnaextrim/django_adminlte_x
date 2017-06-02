/**
 * Created by DonyWahyuIsp on 5/22/2017.
 */
$(function() {
    $.ajaxSetup({
         beforeSend: function(xhr, settings) {
             function getCookie(name) {
                 var cookieValue = null;
                 if (document.cookie && document.cookie != '') {
                     var cookies = document.cookie.split(';');
                     for (var i = 0; i < cookies.length; i++) {
                         var cookie = jQuery.trim(cookies[i]);
                         // Does this cookie string begin with the name we want?
                         if (cookie.substring(0, name.length + 1) == (name + '=')) {
                             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                             break;
                         }
                     }
                 }
                 return cookieValue;
             }
             if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                 // Only send the token to relative URLs i.e. locally.
                 xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
             }
         }
    });

    if ($.fn.select2 !== undefined) {
        $('.select2').select2();
    }

    if ($.fn.inputmask !== undefined) {
        $('.input-mask').inputmask();
    }

    if ($.fn.datepipcker !== undefined) {
        $('.date-picker').datepicker();
    }

    if ($.fn.daterangepicker !== undefined) {
        $('.date-range-picker').daterangepicker();
    }

});