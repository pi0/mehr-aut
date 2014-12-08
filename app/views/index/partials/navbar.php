<script type="text/html" id="top-bar-tpl">
    <div class="top-bar">
        <div class="link-bar">
            <ul class="plain float-near">
                <li title="صفحه اصلی" class="home active">
                    <a class="icons " href="#">سامانه مهر: معاونت فرهنگی دانشگاه صنعتی امیرکبیر</a>
                </li>
            </ul>

            <ul class="plain float-far">
                {{#if id}}
                <li>
                        <i class="fa fa-user"></i>
                    <b>
                {{firstName}} {{lastName}}:
                    </b>
                </li>
                <li>
                    <a href="mehr" target="_blank" title="">
                        <i class="fa fa-gears"></i>
                        سامانه مدریت
                    </a>
                </li>
                <li>
                    <a href="#account/password" title="">
                        <i class="fa fa-key"></i>
تغییر گذرواژه
                    </a>
                </li>
                <li>
                    <a href="user/logout" title="">
                        <i class="fa fa-sign-out"></i>
                        خروج
                    </a>
                </li>

                {{else}}
                <li>
                    <a title="" href="#login">
                        ورود
                        <i class="fa fa-key"></i>
                    </a>
                </li>
                {{/if}}
            </ul>

        </div>

    </div>
</script>




