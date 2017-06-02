from django import template
from django.utils.safestring import mark_safe

from adminlte.Assets import Assets

register = template.Library()

@register.simple_tag(takes_context=True)
def css(context):
    CSS = Assets('css')
    return mark_safe(CSS.render())

@register.simple_tag(takes_context=True)
def js(context):
    JS = Assets('js')
    return mark_safe(JS.render())