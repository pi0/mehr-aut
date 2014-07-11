<?php $development = true; ?>
<footer>
    <p>
        تمام حقوق محفوظ ا
        ست.
    </p>

</footer>
</body>

<!-- /container -->
<!--vendor/js scripts-->
<script type='text/javascript' src='index/js'></script>

<?php if ($development): ?>
    <script src="vendor/backbone.marionette/jquery.js"></script>
    <script src="vendor/html5shiv.js"></script>
    <script src="vendor/jquery/jquery.serialize-object.js"></script>
    <script src="vendor/jquery/notifit/notifIt.js"></script>
    <script src="vendor/jquery/jquery.cookie.js"></script>
    <script src="vendor/handlebars.js"></script>
    <script src="vendor/helpers.js"></script>
    <script src="vendor/moment.js"></script>
    <script src="vendor/moment-jalaali.js"></script>

    <script src="vendor/backbone.marionette/underscore.js"></script>
    <script src="vendor/backbone.marionette/backbone.js"></script>
    <script src="vendor/backbone.marionette/backbone.wreqr.js"></script>
    <script src="vendor/backbone.marionette/backbone.babysitter.js"></script>
    <script src="vendor/backbone.marionette/backbone.marionette.js"></script>
    <script src="vendor/backbone-validation.js"></script>
    <script src="vendor/jquery-ui/js/jquery-ui.js"></script>
    <script src="vendor/lightbox/js/lightbox.js"></script>
    <!--App scripts-->
    <script type="text/javascript">
        app = new Backbone.Marionette.Application();
        ux = {};
    </script>
    <script src="mehr/js"></script>
    <script src="bb/ux.js"></script>
    <script src="bb/app.js"></script>
    <script src="bb/view/topbar.js"></script>
    <script src="bb/router.js"></script>
    <script src="bb/model/post.js"></script>
    <script src="bb/view/post.js"></script>
    <script src="bb/view/posts.js"></script>
    <script src="bb/model/program.js"></script>
    <script src="bb/view/program.js"></script>
    <script src="bb/view/login.js"></script>
    <script src="bb/view/changePassword.js"></script>
    <script src="bb/model/membership.js"></script>
    <script src="bb/view/membership.js"></script>
    <script src="bb/view/password.js"></script>
<?php else: ?>
    <script src='app/app.merged.min.js'></script>
<?php endif; ?>



</html>