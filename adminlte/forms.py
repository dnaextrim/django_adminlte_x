from django.contrib import admin
from django import forms
from django.forms import ModelForm
from django.utils.translation import ugettext


class LogEntryAdmin(admin.ModelAdmin):
    class LogEntryAdminForm(ModelForm):
        pass

    def change(self, obj):
        if obj.is_addition():
            return ugettext('Added "%(object)s".') % {'object': obj.object_repr}
        elif obj.is_change():
            return ugettext('Changed "%(object)s" - %(changes)s') % {
                'object': obj.object_repr,
                'changes': obj.get_change_message(),
            }
        elif obj.is_deletion():
            return ugettext('Deleted "%(object)s."') % {'object': obj.object_repr}

        return ugettext('LogEntry Object')

    form = LogEntryAdminForm
    list_display = ('change', 'action_time', 'user')
    search_fields = ('object_repr', 'action_time', 'user__username')
