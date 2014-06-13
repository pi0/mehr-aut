<?php $development = true; ?>
<footer>
    <p>
        تمام حقوق محفوظ است.
    </p>
</footer>
</body>

<!-- /container -->
<!--vendor/js scripts-->
<script type='text/javascript' src='index/js'></script>

<?php if ($development): ?>
    <script src="vendor/backbone.marionette/jquery.js"></script>
    <script src="vendor/jquery/jquery.serialize-object.js"></script>
    <script src="vendor/jquery/notifit/notifIt.js"></script>
    <script src="vendor/jquery/jquery.cookie.js"></script>
    <script src="vendor/handlebars.js"></script>
    <script src="vendor/helpers.js"></script>
    <script src="vendor/backbone.marionette/underscore.js"></script>
    <script src="vendor/backbone.marionette/backbone.js"></script>
    <script src="vendor/backbone.marionette/backbone.wreqr.js"></script>
    <script src="vendor/backbone.marionette/backbone.babysitter.js"></script>
    <script src="vendor/backbone.marionette/backbone.marionette.js"></script>
    <script src="vendor/backbone-validation.js"></script>
    <script src="vendor/jquery-ui/js/jquery-ui.js"></script>
    <!--[if le IE 10 ]>
    <![endif]-->

    <!--App scripts-->
    <script type="text/javascript">
        app = new Backbone.Marionette.Application();
        ux = {};
    </script>
    <script src="mehr/ux.js"></script>
    <script src="mehr/app.js"></script>
    <script src="mehr/model/post.js"></script>
    <script src="mehr/collection/post.js"></script>
    <script src="mehr/view/post.js"></script>
    <script src="mehr/view/posts.js"></script>
<?php else: ?>
    <script src='app/app.merged.min.js'></script>
<?php endif; ?>



</html>