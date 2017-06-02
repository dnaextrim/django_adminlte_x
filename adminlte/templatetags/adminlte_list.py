from django.contrib.admin.templatetags.admin_list import pagination
from django.template import Library

register = Library()

@register.inclusion_tag('admin/pagination_top.html')
def pagination_top(cl):
    return pagination(cl)