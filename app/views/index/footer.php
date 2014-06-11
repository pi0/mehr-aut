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
    <script src="vendor/backbone.marionette/backbone.marionette.js"></script>
    <script src="vendor/backbone-validation.js"></script>
    <!--[if le IE 10 ]>
    <![endif]-->

    <!--App scripts-->
<?php /* ?>
    <script src="app/ux.js"></script>
    <script src="app/models/currentUser.js"></script>
    <script src="app/models/post.js"></script>
    <script src="app/collections/post.js"></script>
    <script src="app/views/post.js"></script>
    <script src="app/views/posts.js"></script>
    <script src="app/models/user.js"></script>
    <script src="app/views/currentUser.js"></script>
    <script src="app/models/reply.js"></script>
    <script src="app/collections/reply.js"></script>
    <script src="app/views/reply.js"></script>
    <script src="app/views/replies.js"></script>
    <script src="app/views/profileView.js"></script>
    <script src="app/models/class.js"></script>
    <script src="app/collections/class.js"></script>
    <script src="app/views/classesPanel.js"></script>
    <script src="app/views/classInfo.js"></script>
    <script src="app/views/allClasses.js"></script>
    <script src="app/views/libraryView.js"></script>
    <script src="app/views/libraryDialog.js"></script>
    <script src="app/views/createClass.js"></script>
    <script src="app/views/joinClass.js"></script>
    <script src="app/views/assignmentInfo.js"></script>
    <script src="app/views/assignment.js"></script>
    <script src="app/models/turnin.js"></script>
    <script src="app/collections/turnedinUsers.js"></script>
    <script src="app/views/turninView.js"></script>
    <script src="app/models/answer.js"></script>
    <script src="app/views/answer.js"></script>
    <script src="app/collections/user.js"></script>
    <script src="app/views/classUsers.js"></script>
    <script src="app/collections/session.js"></script>
    <script src="app/views/sessionsList.js"></script>
    <script src="app/views/profileSettings.js"></script>
    <script src="app/views/settingsPanel.js"></script>
    <script src="app/views/passwordView.js"></script>
    <script src="app/models/file.js"></script>
    <script src="app/collections/file.js"></script>
    <script src="app/views/fileView.js"></script>
    <script src="app/models/progress.js"></script>
    <script src="app/views/progressView.js"></script>
    <script src="app/models/planner.js"></script>
    <script src="app/views/planner.js"></script>
    <script src="app/views/measurement.js"></script>
    <script src="app/views/uploadDialog.js"></script>
    <script src="app/routers/router.js"></script>
    <script src="app/app.js"></script>
 <?php */ ?>
<?php else: ?>
    <script src='app/app.merged.min.js'></script>
<?php endif; ?>



</html>