from django import template

from adminlte.Assets import Assets

register = template.Library()

@register.simple_tag(takes_context=True)
def css(context):
    CSS = Assets('css')
    return CSS.render()

@register.simple_tag(takes_context=True)
def js(context):
    JS = Assets('js')
    return JS.render()