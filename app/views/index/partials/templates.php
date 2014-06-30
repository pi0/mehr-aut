<script type="text/html" id="login-tpl">
    <div class="component">
        <div class="header">
            ورود به سامانه
        </div>
        <div class="body">
            <form class="main-style">
                <div>
                    <label for=""> </label>

                    <div style="display: none;" class="form-error-box error-box"></div>
                </div>
                <div>
                    <label for="username">شناسه:</label><input name="username"/>
                </div>
                <div><label for="password">گذرواژه:</label><input name="password" type="password"/>
                </div>
                <div class="buttons">
                    <label for=""> </label>
                    <button type="submit">
                        ورود
                        <i class="fa fa-key"></i>
                    </button>
                </div>

            </form>
        </div>
    </div>
</script>
<script type="text/html" id="password-tpl">
    <div class="component">
        <div class="header">
            تغییر گذرواژه
        </div>
        <div class="body">
            <form class="main-style">
                <div>
                    <label for=""> </label>

                    <div style="display: none;" class="form-error-box error-box"></div>
                </div>
                <div><label for="password">گذرواژه فعلی:</label><input id="password" name="password" type="password"/></div>
                <div><label for="newPassword">گذرواژه جدید:</label><input id="newPassword" name="newPassword" type="password"/></div>
                <div><label for="confirmPassword">تکرار گذرواژه جدید:</label><input id="confirmPassword" name="confirmPassword" type="password"/></div>
                <div>
                    <label for=""> </label>
                    <button type="submit">اعمال</button>
                </div>
        </div>

        </form>
    </div>
</script>
<script type="text/html" id="post-tpl">
    <div class="component post-container">
        <div class="header">
            برنامه
            : {{typeText}}
        </div>
        <div class="body">
            <div class="name">{{name}}</div>
            <p class="details">{{details}}</p>

            <div class="buttons">
                <a class="button" href="#program/{{id}}">مشاهده جزئیات</a>
            </div>
        </div>
    </div>
</script>
<script type="text/html" id="posts-tpl">
    <div class="posts-container">
        <div class="filters component">
            <form>
                <div class="filter-main-entity">
                    <span>نمایش: </span>
                    <input type="radio" value="programs" checked name="postType" id="program"/>
                    <label for="programs">برنامه‌ها</label>
                    <input type="radio" value="memberships" name="postType" id="membership"/>
                    <label for="memberships">عضویت‌ها</label>
                    <input type="radio" value="elections" name="postType" id="election"/>
                    <label for="elections">انتخابات‌ها</label>
                </div>
                <div class="post-filter-box">
                    <div class="filter-options">
                        <div><label for="">جستجو در متن:</label>
                            <input name='text' type="text"/>
                        </div>
                    </div>
                    <div class="filter-options">
                        <label for="">نوع:</label>
                        <select name="type" id="">
                            {{#store.ProgramTypes}}
                            <option value="{{this.[0]}}">{{[1]}}</option>
                            {{/store.ProgramTypes}}
                        </select>
                    </div>
                    <div class="filter-options">
                        <label for="">موضوع‌:</label>
                        <select name="subject" id="">
                            {{#store.ProgramSubjects}}
                            <option value="{{this.[0]}}">{{[1]}}</option>
                            {{/store.ProgramSubjects}}
                        </select>
                    </div>

                    <div class="filter-options">
                        <label for="">&nbsp;</label>

                        <div>
                            <button type="submit" class="send-filters">
                                <i class="fa fa-search"></i>
                                جستجو
                            </button>
                        </div>
                    </div>

                </dvi>
            </form>
        </div>
        <div class="post-models"></div>
    </div>
</script>
<script type="text/html" id="program-tpl">
    <div class="post-container program-container component">
        <div class="header">برنامه</div>

        <div class="info float-far">
            <table>
                <caption>کلیات</caption>
                <tr>
                    <td class="name">نوع:</td>
                    <td>{{typeText}}</td>
                </tr>
                <tr>
                    <td class="name">موضوع:</td>
                    <td>{{subjectText}}</td>
                </tr>
                <tr>
                    <td class="name">حدنصاب:</td>
                    <td>{{minCapacity}}</td>
                </tr>
                <tr>
                    <td class="name">ظرفیت:</td>
                    <td>{{maxCapacity}}</td>
                </tr>
                <tr>
                    <td class="name">هزینه:</td>
                    <td>{{cost}} تومان</td>
                </tr>
            </table>
        </div>
        <div class="body">
            <div class="name">{{name}}</div>
            <p class="details">{{details}}</p>

            <div class="buttons">
                <a href="#program/{{id}}" class="button">ثبت‌نام</a>
            </div>

        </div>

    </div>
</script>



