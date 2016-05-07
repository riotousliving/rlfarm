import pytest
from unittest import mock

from pyramid import testing
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPInternalServerError,
)

import stripe

from rlfarm.views import (
    homepage,
    contact_us,
    csa_founder_signup,
    success,
    process_stripe,
    internal_server_error,
    not_found,
)


@pytest.fixture
def post():
    return {
        'stripeToken': 'token',
        'email': 'user@example.org',
        'firstName': 'John',
        'lastName': 'Doe',
        'number': '352-281-8674',
    }


@pytest.mark.parametrize("view", [
    homepage,
    contact_us,
    csa_founder_signup,
    success,
])
def test_view_blank_response(view):
    request = testing.DummyRequest()
    response = view(request)
    assert response == {}


@mock.patch('stripe.Customer.create')
@mock.patch('stripe.Charge.create')
def test_csa_founder_signup(customer_mock, charge_mock, post):
    with testing.testConfig() as config:
        config.add_route('signup_success', '/success')
        request = testing.DummyRequest(post=post)
        request.registry.settings['stripe.api_key'] = 'api_key'

        with pytest.raises(HTTPFound):
            csa_founder_signup(request)


@mock.patch('stripe.Customer.create')
def test_csa_founder_signup_invalid(customer_mock, post):
    customer_mock.side_effect = stripe.error.InvalidRequestError(
        message='invalid',
        param='',
    )
    with testing.testConfig():
        request = testing.DummyRequest(post=post)
        request.registry.settings['stripe.api_key'] = 'api_key'

        with pytest.raises(HTTPInternalServerError):
            csa_founder_signup(request)


@mock.patch('stripe.Customer.create')
@mock.patch('stripe.Charge.create')
def test_csa_founder_signup_carderror(customer_mock, charge_mock, post):
    error = stripe.error.CardError(
        code='error',
        message='card_error',
        param='',
    )
    error.json_body = {'error': {'message': 'card_error'}}

    charge_mock.side_effect = error
    with testing.testConfig():
        request = testing.DummyRequest(post=post)
        request.registry.settings['stripe.api_key'] = 'api_key'
        response = csa_founder_signup(request)
        assert response['has_error'] is True
        assert response['error'] == 'card_error'


def test_process_stripe():
    request = testing.DummyRequest(post={})
    response = process_stripe(request)
    assert response == {}


def test_internal_server_error():
    request = testing.DummyRequest()
    response = internal_server_error(None, request)
    assert response['code'] == '500'
    assert response['message'].startswith('Due to an internal server error')


def test_not_found():
    request = testing.DummyRequest()
    response = not_found(None, request)
    assert response['code'] == '404'
    assert response['message'].startswith('Unable to find the page')
