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
            {{#if image}}
            <img class="poster" src="file-server/{{image}}" alt=""/>
            {{/if}}
            <p class="details">
                {{details}}
            </p>

            <div class="buttons">
                <a class="button" href="#{{postType}}/{{id}}">مشاهده جزئیات</a>
            </div>
        </div>
    </div>
</script>
<script type="text/html" id="news-tpl">
    <div class="component post-container">
        <div class="header">
            خبر

        </div>
        <div class="body">
            <div class="name">{{name}}</div>
            {{#if image}}
            <img class="poster" src="file-server/{{image}}" alt=""/>
            {{/if}}
            <p class="details">
                {{{details}}}
            </p>
        </div>
    </div>
</script>
<script type="text/html" id="entity-tpl">
    <div class="component post-container">
        <div class="header">
            نهاد یا تشکل

        </div>
        <div class="body">
            <div class="name">{{fullName}}</div>
            {{#if image}}
            <img class="poster" src="file-server/{{image}}" alt=""/>
            {{/if}}

            <div class="info float-far">
                <table>
                    <tr>
                        <td class="group" colspan="2">
                            اعضاء
                        </td>
                    </tr>
                    <tr>
                        <td class="name">تعداد اعضاء:</td>
                        <td>{{memberCount}} نفر</td>
                    </tr>
                    <tr>
                        <td class="name">اعضای شورای مرکزی:</td>
                        <td>{{councilMembers}} نفر</td>
                    </tr>
                    <tr>
                        <td class="name"> اعضای علل بدل:</td>
                        <td>{{understudyCouncilMembers}} نفر</td>
                    </tr>
                    <tr>
                        <td class="name">تعداد دوره های شورای مرکزی:</td>
                        <td>{{councilCount}}</td>
                    </tr>
                </table>
            </div>

            <p class="details">
                {{details}}
            </p>
        </div>
    </div>
</script>
<script type="text/html" id="empty-post-tpl">
    <div class="component post-container">
        <div class="body">
            موردی یافت نشد.
        </div>
    </div>
</script>
<script type="text/html" id="posts-tpl">
    <div class="posts-container">
        <div class="filters component">
            <form>
                <div class="filter-main-entity">
                    <span>نمایش: </span>
                    <input type="radio" value=""  name="postType" id="all"/>
                    <label for="all">همه</label>
                    <input type="radio" value="news"  name="postType" id="news"/>
                    <label for="news">اخبار</label>
                    <input type="radio" value="program"  name="postType" id="program"/>
                    <label for="program">برنامه‌ها</label>
                    <input type="radio" value="entity" name="postType" id="entity"/>
                    <label for="entity">نهادها و تشکل‌ها</label>
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
                            <option selected value="">همه</option>
                            {{#store.ProgramTypes}}
                            <option value="{{this.[0]}}">{{[1]}}</option>
                            {{/store.ProgramTypes}}
                        </select>
                    </div>
                    <div class="filter-options">
                        <label for="">موضوع‌:</label>
                        <select name="subject" id="">
                            <option selected value="">همه</option>
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

                </div>
            </form>
        </div>
        <div class="post-models">

        </div>
    </div>
</script>
<script type="text/html" id="program-tpl">
    <div class="post-container program-container component">
        <div class="header">برنامه</div>

        <div class="body">
            {{#if image}}
            <div class="poster">
                <a data-lightbox data-title="{{name}}" href="assets/program-img/{{image}}.jpg">
                    <img class="poster" src="assets/program-img/{{image}}.jpg" alt=""/>
                </a>
            </div>
            {{/if}}
            <div class="info float-far">
                <table>
                    <tr>
                        <td class="group" colspan="2">
                            کلیات
                        </td>
                    </tr>
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
                        <td>{{minCapacity}} نفر</td>
                    </tr>
                    <tr>
                        <td class="name">ظرفیت:</td>
                        <td>{{maxCapacity}} نفر</td>
                    </tr>
                    <tr>
                        <td class="group" colspan="2">
                            نام‌نویسی
                        </td>
                    </tr>
                    <tr>
                        <td class="name">هزینه:</td>
                        <td>{{#is registerFee '>' 0}}
                            {{registerFee}}
                            ریال
                            {{else}}
                            <b style="color: green">رایگان</b>
                            {{/is}}
                        </td>
                    </tr>
                    <tr>
                        <td class="name">آغاز :</td>
                        <td> {{{toJ enrollmentStartDate}}}</td>
                    </tr>
                    <tr>
                        <td class="name">پایان‌ :</td>
                        <td> {{toJ enrollmentEndDate}}</td>
                    </tr>
                    <tr>
                        <td class="name">وضعیت:</td>
                        <td>{{def enrollmentStatusText}}</td>
                    </tr>
                    <tr>
                        <td class="name">نام‌نوسی شما:</td>
                        <td>{{def enrollmentStatusText 'انجام نشده'}}</td>
                    </tr>
                    <tr>
                        <td class="group" colspan="2">
                            برگزاری
                        </td>
                    </tr>
                    <tr>
                        <td class="name">آغاز :</td>
                        <td> {{toJ executionStartDate}}</td>
                    </tr>
                    <tr>
                        <td class="name">پایان :</td>
                        <td> {{{toJ executionEndDate}}}</td>
                    </tr>
                    <tr>
                        <td class="name">وضعیت :</td>
                        <td>{{def executionStatusText}}</td>
                    </tr>

                    <tr>
                        <td class="name">مکان برگزاری:</td>
                        <td>{{def location}}</td>
                    </tr>
                    <tr class="buttons">
                        <td colspan="2"></td>
                    </tr>
                </table>
            </div>


            <div class="name">{{name}}</div>
            <p class="details">{{details}}</p>


            {{#is userEnrollmentStatus 'ok'}}
                <div class="program-actions alert alert-info">
                    <a class="button enroll">
                        {{#is registerFee '>' 0}}
                            پرداخت هزینه و ثبت‌نام
                        {{else}}
                 ثبت‌نام
                        {{/is}}
                    </a>
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'reserve'}}
                <div class="program-actions alert alert-info">
                    <a href="#program/{{id}}" class="button">ثبت‌نام به عنوان ذخیره</a>
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'enrolled'}}
                    <div class="program-actions alert alert-success">
                        شما در تاریخ
                        {{toJ enroller.cDate}}
                        در این برنامه ثبت‌نام کرده‌اید و ثبت‌نام شما در حالت
                        {{cnst 'enrollmentStatus' enroller.status}}
                        است.
                        {{#is registerFee 0}}
                        <a href="#program/{{id}}" class="button unenroll">انصراف از شرکت در برنامه</a>
                        {{/is}}
                    </div>
            {{/is}}
            {{#is userEnrollmentStatus 'notEligible'}}
                <div class="program-actions alert alert-warning">
                            شما واجد شرایط نام‌نویسی در این برنامه نیستید.
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'guest'}}
                <div class="program-actions alert alert-warning">
                    <a href="#login">برای ثبت‌نام در این برنامه لطفا وارد شوید.
                    </a>
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'executed'}}
                <div class="program-actions alert alert-info">
                این برنامه برگزار شده است.
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'enrollmentInFuture'}}
                <div class="program-actions alert alert-info">
                نام‌نویسی این برنامه‌ هنوز آغاز نشده است.
                </div>
            {{/is}}
            {{#is userEnrollmentStatus 'unknown'}}
                <div class="program-actions alert alert-info">
فرآیند ثبت‌نام برای این برنامه مشخص نشده است.
                </div>
            {{/is}}
            {{userEnrollmentStatus}}
        </div>

    </div>
</script>



