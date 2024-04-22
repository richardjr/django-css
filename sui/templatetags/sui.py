from django import template
from django.conf import settings
from django.utils.safestring import mark_safe

register = template.Library()


@register.simple_tag
def sui():
    headers = []
    frameworks = settings.CSS_FRAMEWORKS if hasattr(settings, 'CSS_FRAMEWORKS') else ['bootstrap', 'fontawesome', 'ibtw']
    for header in frameworks:
        if header == 'bootstrap':
            headers.append('<link rel="stylesheet" href="/static/css/bootstrap.css">')
            headers.append('<script src="/static/js/bootstrap.bundle.js"></script>')
        if header == 'fontawesome':
            headers.append('<link rel="stylesheet" href="/static/css/fontawesome.css">')
            headers.append('<link rel="stylesheet" href="/static/css/regular.css">')
            headers.append('<link rel="stylesheet" href="/static/css/solid.css">')
            headers.append('<link rel="stylesheet" href="/static/css/brands.css">')
        #if header == 'ibtw':
    # convert the list to a string
    headers = '\n'.join(headers)
    return mark_safe(headers)
