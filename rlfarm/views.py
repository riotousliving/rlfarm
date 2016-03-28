from pyramid.view import view_config


@view_config(route_name='homepage', renderer='templates/homepage.mako')
def homepage(request):
    return {}
