from django.contrib import admin

# Register your models here.
from django.contrib.admin.models import LogEntry, ContentType
from django.contrib.auth.models import Permission
from .forms import LogEntryAdmin

from adminlte.templatetags.menu import Menu
from adminlte import Assets

admin.site.site_title = 'HRIS'
admin.site.site_header = admin.site.site_title


class MyLogEntryAdmin(LogEntryAdmin):
    def has_add_permission(self, request):
        return False


admin.site.register(LogEntry, MyLogEntryAdmin)


class PermissionAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'content_type', 'codename')
    list_editable = ('codename',)
    search_fields = ('__str__', 'content_type', 'codename')


class PermissionInline(admin.TabularInline):
    form = PermissionAdmin.form
    model = Permission
    extra = 0


class ContenTypeAdmin(admin.ModelAdmin):
    class Media:
        js = ('admin/js/inlines.js', 'js/content_type.js',)
        # Assets.js([
        #     'js/content_type.js',
        # ])

    inlines = [PermissionInline, ]


admin.site.register(Permission, PermissionAdmin)
admin.site.register(ContentType, ContenTypeAdmin)

Menu.set_model_icon('LogEntry', 'fa fa-history')
Menu.set_model_icon('Group', 'fa fa-users')
Menu.set_model_icon('User', 'fa fa-user')
Menu.set_model_icon('LogEntry', 'fa fa-history')
Menu.set_model_icon('Permission', 'fa fa-lock')
Menu.set_model_icon('ContentType', 'fa fa-key')
