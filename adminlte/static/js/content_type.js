/**
 * Created by DWIsprananda on 11/11/2016.
 */

django.jQuery(function () {
    $('.add-row').find('a')[0].click();
    $('.add-row').find('a')[0].click();
    $('.add-row').find('a')[0].click();

    $('#id_model').bind('keyup', function () {
        var val = $(this).val();

        $('input[name*=codename]').each(function (idx, el) {
            var name = $(el).parents('tr').find('input[name*=name]');

            if (idx == 0) {
                name.val('Can add ' + val);
                $(el).val('add_' + val);
            } else if (idx == 1) {
                name.val('Can change ' + val);
                $(el).val('change_' + val);
            } else if (idx == 2) {
                name.val('Can delete ' + val);
                $(el).val('delete_' + val);
            } else {
                name.val('Can ? ' + val);
                $(el).val('?_' + val);
            }

        });

    });
});