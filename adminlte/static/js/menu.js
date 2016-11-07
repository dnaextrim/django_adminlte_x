/**
 * Created by dnaextrim on 3/16/2016.
 */

if( !('App' in window) ) window['App'] = {};

/**
 * Search Menu
 */
// NEW selector
/**
 *
 * @param a
 * @param i
 * @param m
 * @returns {boolean}
 * @constructor
 */
jQuery.expr[':'].Contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
};

// OVERWRITES old selecor
/**
 *
 * @param a
 * @param i
 * @param m
 * @returns {boolean}
 */
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
};

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

/*$('#search-menu').on('keyup', function(e) {
 $("ul.sidebar-menu li").not('.header').hide();
 $("ul.sidebar-menu li span:contains('"+$(this).val()+"')").parents('li').show();
 });*/

var curMatchMenu = -1;
$(document).on('keyup', '#search-menu', function(e) {
    $("ul.sidebar-menu li").not('.header').not('ul.treeview-menu li').hide();
    $("ul.sidebar-menu li span:contains('"+$(this).val()+"')").parents('li').show();
    $("ul.treeview-menu li span:contains('"+$(this).val()+"')").parents('li').show();
    var matchMenu = $('ul.sidebar-menu li:visible').not('.header');

    if (e.keyCode == 13) {
        if ($('ul.sidebar-menu li:visible.selected').length > 0) {
            document.location.href = $('ul.sidebar-menu li:visible.selected').find('a').prop('href');
        }
        return false;
    }

    if (e.keyCode == 40) {
        curMatchMenu = (curMatchMenu >= matchMenu.length - 1)? (matchMenu.length - 1) : (curMatchMenu + 1);

        if (typeof matchMenu[curMatchMenu - 1] !== 'undefined' && $(matchMenu[curMatchMenu - 1]).hasClass('selected')) {
            $(matchMenu[curMatchMenu - 1]).removeClass('active selected');
        }

        if (!$(matchMenu[curMatchMenu]).hasClass('active')) {
            $(matchMenu[curMatchMenu]).addClass('active selected');
        }

        return false;
    } else if (e.keyCode == 38) {
        curMatchMenu = (curMatchMenu <= 0)? 0: (curMatchMenu - 1);

        if (typeof matchMenu[curMatchMenu + 1] !== 'undefined' &&  $(matchMenu[curMatchMenu + 1]).hasClass('selected')) {
            $(matchMenu[curMatchMenu + 1]).removeClass('active selected');
        }

        if (!$(matchMenu[curMatchMenu]).hasClass('active')) {
            $(matchMenu[curMatchMenu]).addClass('active selected');
        }

        return false;
    }

    curMatchMenu = -1; // reset curMatchMenu
    $('ul.sidebar-menu li:visible.active.selected').removeClass('active selected');

    if ($(this).val() != '') {
        curMatchMenu = 0;
        $(matchMenu[0]).addClass('active selected');
    } else {
        curMatchMenu = 0;
        $(matchMenu[curMatchMenu]).addClass('active selected');
    }
});

$(document).on('focus', '#search-menu', function(e) {
    $('#search-menu').trigger('keyup');
});

$(document).on('blur', '#search-menu', function(e) {
    $("ul.sidebar-menu li").not('.header').not('ul.treeview-menu li').hide();
    $("ul.sidebar-menu li span:contains('"+$(this).val()+"')").parents('li').show();
    $("ul.treeview-menu li span:contains('"+$(this).val()+"')").parents('li').show();
    var matchMenu = $('ul.sidebar-menu li:visible').not('.header');

    if (typeof matchMenu[curMatchMenu] !== 'undefined' && $(matchMenu[curMatchMenu]).hasClass('selected')){
        $(matchMenu[curMatchMenu]).removeClass('active selected');
    }
});
//---