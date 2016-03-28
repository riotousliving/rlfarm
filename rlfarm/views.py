from pyramid.view import view_config


@view_config(route_name='homepage', renderer='templates/homepage.mako')
def homepage(request):
    return {}


@view_config(route_name='contact_us', renderer='templates/contact_us.mako')
def contact_us(request):
    return {}
