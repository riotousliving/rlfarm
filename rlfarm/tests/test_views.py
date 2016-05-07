import pytest
from unittest import mock

from pyramid import testing
from pyramid.httpexceptions import HTTPFound

from rlfarm.views import (
    homepage,
    contact_us,
    csa_founder_signup,
)


@pytest.mark.parametrize("view", [
    homepage,
    contact_us,
    csa_founder_signup,
])
def test_view_blank_response(view):
    request = testing.DummyRequest()
    response = view(request)
    assert response == {}


@mock.patch('stripe.Customer.create')
@mock.patch('stripe.Charge.create')
def test_csa_founder_signup(customer_mock, charge_mock):
    with testing.testConfig() as config:
        config.add_route('signup_success', '/success')

        post = {
            'stripeToken': 'token',
            'email': 'user@example.org',
            'firstName': 'John',
            'lastName': 'Doe',
            'number': '352-281-8674',
        }

        request = testing.DummyRequest(post=post)
        request.registry.settings['stripe.api_key'] = 'api_key'

        with pytest.raises(HTTPFound):
            csa_founder_signup(request)
