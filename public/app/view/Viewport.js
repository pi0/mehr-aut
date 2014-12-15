Ext.require('Ext.toolbar.Toolbar');
Ext.require("Mehr.view.user.List");
var menu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: {
        xtype: 'buttongroup',
        title: 'مدیریت کاربران',
        autoWidth: true,
        columns: 2,
        defaults: {
            xtype: 'button',
            scale: 'large',
            width: '100%',
            iconAlign: 'left'
        },
        items: [
            {
                text: 'کاربران',
                icon: icon('users.gif', 32),
                handler: function () {
                    Ext.create("Mehr.view.user.List").show();
//                    var w = Ext.widget("usersW");
//                    w.show();
                }
            },
            {
                icon: icon('add-user.gif', 32),
                //icon: 'assets/img/32p/add-user.gif',
                width: 'auto',
                tooltip: 'افزودن کاربر',
                handler: function () {
//                    Mehr.formPanel.UserEdit.getForm().reset();
//                    Mehr.window.UserEdit.show();
                    Ext.create('Mehr.view.user.Edit').show();
                }
            },
            {
                colspan: 2,
                disabled: true,
                icon: icon('databaseRefresh'),
                text: 'همزمان‌سازی',
                scale: 'small'
            },
            {
                colspan: 2,
                disabled: true,
                icon: icon('db-import'),
                text: 'درون‌برد از فایل',
                scale: 'small'
            },
            //{
            //    colspan: 2,
            //    icon: icon('db-export'),
            //    text: 'برون‌برد به فایل',
            //    scale: 'small'
            //}
//            {
//                colspan: 2,
//                icon: icon('userSuit'),
//                text: 'نقش‌ها و سمت‌ها',
//                scale: 'small'
//            }
        ]
    }
});

Ext.create("Ext.toolbar.Toolbar", {
    rtl: true,
    renderTo: document.body,
    defaultType: 'button',
    items: [
        {
//            hidden:true,
            text: 'کاربران',
            icon: icon('user'),
            menu: menu
        },
        {
            text: "نهادها و برنامه‌ها",
            icon: icon('microphone'),
            menu: [
                {

                    text: 'نهادها',
                    icon: icon('building'),
                    handler: function () {
                        Ext.create('Mehr.view.entity.List');
                    }
                },

                {
                    text: 'برنامه‌ها',
                    icon: icon('microphone'),
                    handler: function () {
                        Ext.create('Mehr.view.program.List');
                    }
                },

                {
                    text: 'طرح‌ها',
                    disabled: true,
                    icon: icon('ruler-triangle'),
                    handler: function () {
                        Ext.create('Mehr.view.plan.Window');
                    }
                },

                {
                    text: 'دوره‌های نهادها',
                    icon: icon('users'),
                    handler: function () {
                        Ext.create('Mehr.view.council.List');
                    }
                },
                {
                    text: 'نشریه‌ها',
                    disabled: true,
                    icon: icon('newspaper'),
                    handler: function () {
                        Mehr.window.Issues.show();
                    }
                },

                {
                    text: "ایجاد",
                    icon: icon('add'),
                    menu: [
                        {
                            text: 'نهاد نو',
                            handler: function () {
                                Ext.create('Mehr.view.entity.Edit');
                            }
                        },

                        {
                            text: 'برنامه نو',
                            handler: function () {
//                                Mehr.window.ProgramEdit.show();
                                Ext.create('Mehr.view.program.Edit')
                            }
                        },

                        {
                            disabled: true,
                            text: 'پیشنهاد طرح'
                        },
                        {
                            disabled: true,
                            text: 'نشریه نو'
                        }
                    ]
                }
            ]
        },
        {
            hidden: true,
            text: "آموزش",
            menu: [
                {
                    text: 'رشته‌ها',
                    handler: function () {
                        Mehr.window.Disciplines.show();
                    }
                },

                {
                    text: 'گروه‌ها',
                    handler: function () {
                        Mehr.window.Departments.show();
                    }
                },

                {
                    text: 'دانشکده‌ها',
                    handler: function () {
                        Mehr.window.Colleges.show();
                    }
                },
                {
                    text: "ایجاد",
                    icon: icon('add'),
                    menu: [
                        {
                            text: 'رشته'
                        },

                        {
                            text: 'گروه'
                        },

                        {
                            text: 'دانشکده'
                        }
                    ]
                }
            ]
        },
        {
            //hidden: true,
            text: "اخبار",
            icon: icon('newspaper'),
            menu: [
                {
                    text: 'خبرها',
                    icon: icon('newspaper'),
                    handler: function () {
                        Ext.create('Mehr.view.news.List');
                    }
                },

                {
                    text: 'خبر نو',
                    icon: icon('add'),
                    handler: function () {
                        Ext.create('Mehr.view.news.Edit');
                    }
                }
            ]
        },
        {
            text: "SMS",
            disabled: true,
            icon: icon('phone'),
            menu: [
                {
                    icon: icon('phone-add'),
                    text: 'نگارش پیام',
                    handler: function () {
                        Ext.create('Mehr.view.sms.Edit');
                    }
                },


                {
                    text: 'پیامهای ارسال شده',
                    icon: icon('phone-go'),
                    handler: function () {
                        Mehr.window.Messages.show();
                    }
                },
                {
                    text: 'پیامهای دریافت شده',
                    icon: icon('phone'),
                    handler: function () {
                        Mehr.window.Messages.show();
                    }
                },

                /*
                 {
                 text: 'دفترچه تماس',
                 icon: icon('vcard')
                 }
                 */
            ]
        },
        {
            text: "رایانامه",
            disabled: true,
            icon: icon('email'),
            menu: [
                {
                    icon: icon('email-add'),
                    text: 'نگارش پیام',
                    handler: function () {
                        Ext.create('Mehr.view.email.Edit');
                    }
                },
                {
                    text: 'پیامهای ارسال شده',
                    icon: icon('email-go'),
                    handler: function () {
                        Mehr.window.Messages.show();
                    }
                }
                /*,

                 {
                 text: 'پیامهای دریافت شده',
                 icon: icon('email'),
                 handler: function () {
                 Mehr.window.Messages.show();
                 }
                 },


                 {
                 text: 'دفترچه تماس',
                 icon: icon('vcard')
                 }
                 */
            ]
        },
        {
            text: 'تنظیمات',
            icon: icon('gear'),
            handler: function (btn) {
            },
            menu: [
                //{
                //    text: 'تغییر گذرواژه',
                //    icon: icon('key'),
                //    handler:function(){
                //        Ext.create('Mehr.view.setting.Password');
                //    }
                //}
                //{
                //    text: 'مشخصات من',
                //    disabled: true,
                //    icon: icon('information')
                //},
                {
                    text: 'سامانه',
                    icon: icon('gear'),
                    handler: function (btn) {
                        Ext.create('Mehr.view.setting.SystemSettings');
                    }
                    //, menu: [
                    //    {
                    //        text: 'پرداخت الکترونیک',
                    //        icon: icon('money')
                    //    },
                    //
                    //    {
                    //        text: 'سامانه پیامک',
                    //        icon: icon('email')
                    //    }
                    //]

                }
            ]
        },
        {
            text: "راهنما",
            icon: icon('help'),
            menu: [
                /*
                 {
                 icon: icon('help'),
                 text: "راهنمای برنامه"
                 } ,
                 */
                {
                    text: "وبگاه شرکت",
                    icon: icon('world'),
                    handler: function (b, e) {
                        window.open('http://www.ahurait.com', '_blank');
                    }
                },
                {
                    icon: icon('help'),
                    text: "درباره",
                    handler: function () {
                        Ahura.info('درباره', 'سامانه یکپارچه فرهنگی مهر <br> شرکت مهندسی اهورا')
                    }
                }
            ],
            handler: function (b, e) {
            }

        },
        '->',
//        {
//            icon:icon('arrowInout'),
//            handler:function(){
//                requestFullScreen(document.body);
//            }
//        }
//        ,
        {
            text: "بازگشت",
            icon: icon('house'),
            handler: function (b, e) {
                window.location = BASE;
            }

        },
        {
            text: "خروج",
            icon: icon('door_out'),
            handler: function (b, e) {
                window.location = 'user/logout';
            }

        }
    ]
});

Ext.define('Mehr.view.Viewport', {
    itemId: 'vp',
    items: []
});
