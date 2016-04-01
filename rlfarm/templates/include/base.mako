<!DOCTYPE html>
<!--[if IE 8 ]>
<html class="no-js ie8" lang="en"> <![endif]-->
<!--[if IE 9 ]>
<html class="no-js ie9" lang="en"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->
<head lang="en">
    <meta charset="UTF-8">
    <meta name="description" content="Riotous Living Farm">
    <meta name="author" content="Riotous Living, LLC">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, shrink-to-fit=no">


    <title>Riotous Living Farm</title>
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/motive.css">

    <!--[if lt IE 9]>
    <script src="assets/bootstrap/js/html5shiv.min.js"></script>
    <script src="assets/bootstrap/js/respond.min.js"></script>
    <![endif]-->

    <script src="assets/js/modernizr.custom.js"></script>
</head>


<body class="cssAnimate ct-headroom--fixedBoth navbar--transparent">
<div class="ct-preloader"><div class="ct-preloader-content"></div></div>


<div class="ct-navbarMobile ct-u-bgBlack">
    <button type="button" class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
</div>

<div class="ct-menuMobile">
    <ul class="ct-menuMobile-navbar list-unstyled ct-u-backgroundDarkGray">
        <li ${'class=active' if view.__name__ == "homepage" else ""}><a href="${request.route_url('homepage')}">Home</a></li>
        <li ${'class=active' if view.__name__ == "contact_us" else ""}><a href="${request.route_url('contact_us')}">Contact Us</a></li>
    </ul>
</div>

<div id="ct-js-wrapper">
    <header class="ct-mainHeader">
        <div class="ct-topBar topBar--type1">
            <div class="navbar navbar-default">
                <div class="container ct-navbar-container">
                    <p class="navbar-text navbar-left"><i class="fa fa-phone"></i> Support: (954) 993-6525</p>

                    <div class="navbar-block navbar-right">
                        <div class="navbar-block-inner">
                            <ul class="socialicons socialicons--image">
                                <li>
                                    <a href="https://www.facebook.com/riotousliving.farm/" data-toggle="tooltip" data-placement="bottom" title data-original-title="Facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://twitter.com/riotousliving" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="navbar-text navbar-right">Welcome to Riotous Living Farm!</p>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-default navbar--type1 yamm">

            <div class="container ct-navbar-container">

                <form class="navbar-form navbar-right" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for...">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                        </span>
                    </div><!-- /input-group -->
                </form>

                <div class="navbar-header">
                    <a class="navbar-brand" href="${request.route_url('homepage')}">
                        <img alt="Brand" src="assets/images/content/logo.png" />
                    </a>
                </div>

                <ul class="nav navbar-nav navbar-left ct-navbar--fadeInLeft">
                    <li ${'class=active' if view.__name__ == "homepage" else ""}><a href="${request.route_url('homepage')}">Home</a></li>
                    <li ${'class=active' if view.__name__ == "contact_us" else ""}><a href="${request.route_url('contact_us')}">Contact Us</a></li>
                </ul>

            </div>
        </nav>
    </header>

    <main>

        ${self.body()}

    </main>

    <footer>
        <div class="ct-postFooter">
            <div class="container">
                <div class="ct-u-displayTableVertical">
                    <div class="ct-u-displayTableCell text-center">
                        <p class="ct-u-marginBoth0 ct-u-colorWhite">© 2016 Riotous Living, LLC. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

<a href="#" class="ct-js-btnScrollUp"><i class="fa fa-angle-up"></i></a>

<script src="assets/js/jquery-1.11.3.min.js"></script>
<script src="assets/js/dependencies.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/plugins/slick/slick.min.js"></script>
<script src="assets/plugins/slick/init.js"></script>

<script src="assets/twitter/js/jquery.tweet.js"></script>

<script src="assets/js/ct-mediaSection/jquery.stellar.min.js"></script>
<script src="assets/js/ct-mediaSection/init.js"></script>

<script src="assets/js/headroom/init.js"></script>

<script src="assets/js/main.min.js"></script>

<%block name="extra_script"></%block>
</body>
</html>
