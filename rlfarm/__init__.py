from pyramid.config import Configurator
from sqlalchemy import engine_from_config

from .models import (
    DBSession,
    Base,
    )


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine
    config = Configurator(settings=settings)
    config.include('pyramid_mako')
    config.include('pyramid_stripe')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_static_view('assets', 'static/assets', cache_max_age=3600)
    config.add_route('homepage', '/')
    config.add_route('csa_founder_signup', '/signup')
    config.add_route('signup_success', '/success')
    config.add_route('contact_us', '/contact')
    config.add_route('stripe_process', '/stripe/process')
    config.scan()
    return config.make_wsgi_app()
