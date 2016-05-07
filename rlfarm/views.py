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
        try:
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
        except stripe.error.InvalidRequestError:
            raise exc.HTTPInternalServerError()
        except stripe.error.CardError as e:
            body = e.json_body
            err = body['error']
            return {'has_error': True, 'error': err['message']}
    return {}


@view_config(context=exc.HTTPInternalServerError, renderer='templates/exception.mako')
def internal_server_error(exc, request):
    return {'message': 'Due to an internal server error the site was unable to process your request.',
            'code': '500'}


@view_config(context=exc.HTTPNotFound, renderer='templates/exception.mako')
def not_found(exc, request):
    return {'message': 'Unable to find the page you are looking for.',
            'code': '404'}


@view_config(route_name='stripe_process', request_method='POST')
def process_stripe(request):
    return {}


@view_config(route_name='signup_success', renderer='templates/success.mako')
def success(request):
    return {}
