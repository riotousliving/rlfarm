import pyramid.httpexceptions as exc
from pyramid.view import view_config


@view_config(route_name='homepage', renderer='templates/about_us.mako')
def homepage(request):
    return {}


@view_config(route_name='contact_us', renderer='templates/contact_us.mako')
def contact_us(request):
    return {}


@view_config(route_name='csa_founder_signup', renderer='templates/csa_founder_signup.mako')
def csa_founder_signup(request):
    token = request.POST.get('stripeToken', None)
    if token is not None:
        import stripe
        stripe.api_key = request.registry.settings.get('stripe.api_key')

        customer = stripe.Customer.create(
            source=token,
            email=request.POST.get('email'),
            description="%s %s" % (request.POST.get('firstName'), request.POST.get('lastName')),
            metadata={'phone': '%s' % (request.POST.get('number')), 'founder': True},
        )
        stripe.Charge.create(
            amount=15000,
            currency="usd",
            customer=customer.id,
        )
        raise exc.HTTPFound(request.route_url("signup_success"))
    return {}


@view_config(route_name='stripe_process', request_method='POST')
def process_stripe(request):
    return {}

@view_config(route_name='signup_success', renderer='templates/success.mako')
def success(request):
    return {}
