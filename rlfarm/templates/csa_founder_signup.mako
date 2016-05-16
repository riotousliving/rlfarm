<%inherit file="include/base.mako"/>

<div class="container">

    <div class="ct-breadcrumbs-container">
        <div class="ct-breadcrumbs ct-js-breadcrumbs" data-bg-image="assets/images/content/breadcrumbs2.png" data-bg-scratchImage="assets/images/scratch.png" data-height="260">
            <div class="ct-breadcrumbs-title">
                csa signup details
            </div>
        </div>

        <ol class="breadcrumb  ">
            <li><a href="index.html">Home</a></li>
            <li class="active">CSA Signup Details</li></ol>
    </div>

</div>

<section class="container">
    <h3 class="ct-headline text-center ct-u-marginBottom50">
        <span class="ct-headline-container ct-u-colorMotive">
            <span class="ct-headline-line ct-headline-line--left"></span>
                founding tribe member signup
            <span class="ct-headline-line ct-headline-line--right"></span>
        </span>
    </h3>
</section>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="ct-infoBox-Content">
                    <div class="ct-infoBox-title">
                        <h3>No More Spots</h3>
                    </div>
                    <div class="ct-infoBox-text">
                        <p>Our current CSA season is full and we are no longer accepting signups at this time. Please subscribe to our newsletter
                        to be notified when we open signups for our next season.</p>
                    </div>
                </div>
                <!--
                <form data-email-subject="Form Subject" class="validateIt" role="form" action="" method="POST" id="payment-form">
                    <fieldset>
                    <legend>Share Owner Information</legend>
                    <div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="firstName">First name*</label>
                        <input type="text" placeholder="Name" class="form-control input-sm" id="firstName" required name="firstName">
                    </div>

                    <div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="lastName">Last Name*</label>
                        <input type="text" placeholder="Surname" class="form-control input-sm" id="lastName" required name="lastName">
                    </div>

                    <div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="email">Email Address*</label>
                        <input type="email" placeholder="Email" class="form-control input-sm" id="email" required name="email">
                    </div>

                    <div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="phoneNumber">Phone Number</label>
                        <input type="text" placeholder="Phone" class="form-control input-sm" id="phoneNumber" name="number">
                    </div>
                    </fieldset>

                    <fieldset>
                    <legend>Credit Card Information</legend>
					<div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="number">Card Number*</label>
						<input type="text" size="20" id="number" data-stripe="number" required />

                        <label class="ct-u-colorBrownDark2" for="cvc">CVC*</label>
						<input type="text" size="4" data-stripe="cvc" id="cvc" required />
					</div>

					<div class="form-group">
                        <label class="ct-u-colorBrownDark2"><span>Expiration (MM/YYYY)*</span>
							<input type="text" size="2" data-stripe="exp-month" required />
						</label>
						<span> / </span>
						<input type="text" size="4" data-stripe="exp-year" required />
					</div>

                    <div class="form-group">
                        <label class="ct-u-colorBrownDark2" for="address_zip">Billing Zipcode*</label>
                        <input type="text" size="5" data-stripe="address_zip" required />
                    </div>

                    </fieldset>

                    <div class="errorMessage alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <span class="payment-error">
                        % if error is not UNDEFINED:
                        ${error}
                        % endif
                        </span>
                    </div>

                    <p class="text-right ct-u-colorBrownDark2">*Required fields.</p>

                    <div class="text-left ct-u-marginTop40 ct-u-marginBottom70">
                        <button type="submit" class="btn btn-lg ct-btn-image btn-warning"><span>Join ($150)</span></button>
                    </div>
                </form>
                --!>
            </div>
            <div class="col-md-6">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-md-12 col-sm-6 ct-u-marginBottom30">

						<div class="ct-pricingTable">
							<div class="ct-pricingTable-header">
								<h2><span>Special: 10-Weeks</span></h2>
								<div class="ct-pricingTable-price">
									<span>
										$150.00
									</span>
								</div>
							</div>

							<div class="ct-pricingTable-container">
								<ul class="list-unstyled">
									<li class="active">10-weeks Founding Tribe Member</li>
									<li class="active">Up to 12 varieties of vegetables</li>
									<li class="active">Recipes and meal suggestions</li>
									<li class="active">Tips on storing or how to "put away"</li>
									<li class="active">10% discount on all future CSA shares</li>
									<li class="active">Fun suprises and special events</li>
								</ul>
							</div>
						</div>

                        <div class="col-md-12 col-sm-6 ct-u-marginBottom30">
                            <h3 class="ct-u-colorYellow text-uppercase ct-u-ff--2 ct-u-marginBottom30">LOCATIONS</h3>
                            <h6 class="ct-u-colorBrownDark2 text-uppercase ct-fw-600 ct-u-size13 ct-u-marginBottom15">Riotous Living Farm</h6>

                            <p class="ct-u-colorGray ct-u-marginBottom10">409 Goodwin Rd</p>
                            <p class="ct-u-colorGray ct-u-marginBottom30">Durham, NC 27712</p>

                            <h6 class="ct-u-colorBrownDark2 text-uppercase ct-fw-600 ct-u-size13 ct-u-marginBottom15">CSA Pickup - Durham</h6>
                            <p class="ct-u-colorGray ct-u-marginBottom20">Wednesday, 2:00 p.m. - 6:00 p.m. ET</p>
                            <p class="ct-u-colorGray ct-u-marginBottom10">Fullsteam Brewery</p>
                            <p class="ct-u-colorGray">726 Rigsbee Ave, Durham, NC 27701</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<%include file="include/mailchimp_signup.mako"/>

<%block name="extra_script">
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script type="text/javascript">
    % if has_error is not UNDEFINED:
    $('.errorMessage').show();
    % endif
    // This identifies your website in the createToken call below
    Stripe.setPublishableKey('pk_live_AhnRYQ9Dm9E04wBuvJEzqpyz');
    var stripeResponseHandler = function(status, response) {
      var $form = $('#payment-form');
      if (response.error) {
        // Show the errors on the form
        $('.payment-error').text(response.error.message);
        $('.errorMessage').show();
        $form.find('button').prop('disabled', false);
      } else {
        // token contains id, last4, and card type
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // and re-submit
        $form.get(0).submit();
      }
    };
    jQuery(function($) {
      $('#payment-form').submit(function(e) {
        var $form = $(this);
        // Disable the submit button to prevent repeated clicks
        $form.find('button').prop('disabled', true);
        Stripe.card.createToken($form, stripeResponseHandler);
        // Prevent the form from submitting with the default action
        return false;
      });
});
</script>
</%block>
