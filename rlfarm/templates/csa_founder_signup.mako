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
                        <span class="payment-error">Something went wrong.</span>
                    </div>

                    <p class="text-right ct-u-colorBrownDark2">*Required fields.</p>

                    <div class="text-left ct-u-marginTop40 ct-u-marginBottom70">
                        <button type="submit" class="btn btn-lg ct-btn-image btn-warning"><span>Join ($150)</span></button>
                    </div>
                </form>
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

<section class="container">
    <h3 class="ct-headline text-center ct-u-marginBottom50">
                <span class="ct-headline-container ct-u-colorMotive">
                    <span class="ct-headline-line ct-headline-line--left"></span>
                        our notice board
                    <span class="ct-headline-line ct-headline-line--right"></span>
                </span>
    </h3>
</section>


<div class="container">
<section class="ct-js-slick ct-slick ct-slick-arrow--type1" data-animations="true" data-autoplay="false" data-arrows="true" data-items="1" data-XSitems="1" data-SMitems="2" data-MDitems="3">
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="testimonials.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage4.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type4 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <h5><span>Say Hello</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer">
                    <header class="ct-imageBox-title">
                        <a href="testimonials.html"><h6><span class="ct-u-colorGrayDarker">our notice board</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="testimonials.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="single-product.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage5.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type3 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <h5><span>Contest</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ct-discount">
                        <h2><span>25% OFF</span></h2>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer ct-imageBox-container-shadow">
                    <header class="ct-imageBox-title">
                        <a href="single-product.html"><h6><span class="ct-u-colorGrayDarker">save even more! get 25% extra off!</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="single-product.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="single-product.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage6.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type2 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <header>
                                        <h4 class="ct-u-marginBoth0"><span>Gourmet</span></h4>
                                        <h2 class="ct-u-marginBoth0"><span class="ct-fw-700">Shop</span></h2>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer ct-imageBox-container-shadow">
                    <header class="ct-imageBox-title">
                        <a href="single-product.html"><h6><span class="ct-u-colorGrayDarker">dairy products at prices you’ll love</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="single-product.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="testimonials.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage4.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type4 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <h5><span>Say Hello</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer ct-imageBox-container-shadow">
                    <header class="ct-imageBox-title">
                        <a href="testimonials.html"><h6><span class="ct-u-colorGrayDarker">meet our farmers</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="testimonials.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="single-product.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage5.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type3 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <h5><span>Contest</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ct-discount">
                        <h2><span>25% OFF</span></h2>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer">
                    <header class="ct-imageBox-title">
                        <a href="single-product.html"><h6><span class="ct-u-colorGrayDarker">save even more! get 25% extra off!</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="single-product.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
<div class="item">
    <article class="ct-imageBox">
        <figure class="ct-imageBox-wrapperOuter">
            <a href="single-product.html">
                <div class="ct-imageBox-container ct-imageBox-container-shadow">
                    <div class="ct-imageBox-hover ct-imageBox-hover--type1"></div>
                    <img src="assets/images/content/SliderImage6.jpg" alt="">
                    <div class="ct-decoration ct-decoration--type2 ct-decoration-decorationBorder">
                        <div>
                            <div class="ct-decoration-textContainer">
                                <div class="ct-decoration-text">
                                    <header>
                                        <h4 class="ct-u-marginBoth0"><span>Gourmet</span></h4>
                                        <h2 class="ct-u-marginBoth0"><span class="ct-fw-700">Shop</span></h2>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <figcaption class="ct-imageBox-wrapperInner ct-imageBox-wrapperInner--type3">
                <div class="ct-imageBox-titleContainer ct-imageBox-container-shadow">
                    <header class="ct-imageBox-title">
                        <a href="single-product.html"><h6><span class="ct-u-colorGrayDarker">dairy products at prices you’ll love</span></h6></a>
                    </header>

                    <div class="text-center">
                        <a class="btn ct-btn-link btn-motive" href="single-product.html"><span>Learn More</span></a>
                    </div>
                </div>
            </figcaption>
        </figure>
    </article>
</div>
</section>
</div>

<div class="ct-u-borderTop">
    <section class="container ct-u-marginBoth50">
        <h3 class="ct-headline text-left">
        <span class="ct-headline-container ct-u-colorMotive">
            <span class="ct-headline-line ct-headline-line--left"></span>
                our brands
            <span class="ct-headline-line ct-headline-line--right"></span>
        </span>
        </h3>
    </section>
</div>

<section class="ct-u-paddingBottom50">
    <div class="container">
        <section class="ct-js-slick ct-slick ct-slick-arrow--type2" data-height="60" data-animations="true" data-autoplay="false" data-arrows="true" data-items="1" data-XSitems="2" data-SMitems="3" data-MDitems="5">
            <div class="item">
                <img src="assets/images/content/logo1.png" alt="" />
            </div>
            <div class="item">
                <img src="assets/images/content/logo2.png" alt="" />
            </div>
            <div class="item">
                <img src="assets/images/content/logo3.png" alt="" />
            </div>
            <div class="item">
                <img src="assets/images/content/logo4.png" alt="" />
            </div>
            <div class="item">
                <img src="assets/images/content/logo5.png" alt="" />
            </div>
            <div class="item">
                <img src="assets/images/content/logo3.png" alt="" />
            </div>
        </section>
    </div>
</section>

<%block name="extra_script">
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<script type="text/javascript">
    // This identifies your website in the createToken call below
    Stripe.setPublishableKey('pk_test_pIKvFRQFnoggmQ0wteDaxT50');
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
