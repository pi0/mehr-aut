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
                text: 'دانشجویان',
                icon: 'assets/img/32p/users.gif',
                handler: function () {
                    Ext.create("Mehr.view.user.List").show();
//                    var w = Ext.widget("usersW");
//                    w.show();
                }
            },
            {
                icon: 'assets/img/32p/add-user.gif',
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
                icon: icon('databaseRefresh'),
                text: 'همزمان‌سازی',
                scale: 'small'
            },
//            {
//                colspan: 2,
//                icon: icon('user_suit'),
//                text: 'کارمندان',
//                scale: 'small'
//            }
        ]
    }
});
Ext.require('Ext.toolbar.Toolbar');
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
            hidden:true,
            text: "پیام ها",
            icon: icon('email'),
            menu: [
                {
                    icon: icon('email_add'),
                    text: 'نگارش پیام',
                    handler: function () {
                        Mehr.window.NewMessage.show();
                    }
                },

                {
                    text: 'پیامهای دریافت شده',
                    icon: icon('email'),
                    handler: function () {
                        Mehr.window.Messages.show();
                    }
                },

                {
                    text: 'پیامهای ارسال شده',
                    icon: icon('email_go'),
                    handler: function () {
                        Mehr.window.Messages.show();
                    }
                },

                {
                    text: 'دفترچه تماس',
                    icon: icon('vcard')
                }

            ]



        },
        {
            text: "نهادها و برنامه ها",
            icon: icon('microphone'),
            menu: [
                {

                    text: 'نهادها',
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

//                {
//                    text: 'طرح‌ها',
//                    icon: icon('ruler-triangle'),
//                    handler: function () {
//                        Ext.create('Mehr.view.plan.Window');
//                    }
//                },

//                {
//                    text: 'نشریه ها',
//                    icon: icon('newspaper'),
//                    handler: function () {
//                        Mehr.window.Issues.show();
//                    }
//                },

                {
                    text: "ایجاد",
                    icon: icon('add'),
                    menu: [
                        {
                            text: 'نهاد نو',
                            handler:function(){
                                Ext.create('Mehr.view.entity.Edit');
                            }
                        },

                        {
                            text: 'برنامه نو',
                            handler: function () {
//                                Mehr.window.ProgramEdit.show();
                                Ext.create('Mehr.view.program.Edit')
                            }
                        }

//                        {
//                            text: 'طرح نو'
//                        },
//
//                        {
//                            text: 'نشریه نو'
//                        }
                    ]
                }
            ]
        },
        {
            hidden:true,
            text: "آموزش",
            menu: [
                {
                    text: 'رشته ها',
                    handler: function () {
                        Mehr.window.Disciplines.show();
                    }
                },

                {
                    text: 'گروه ها',
                    handler: function () {
                        Mehr.window.Departments.show();
                    }
                },

                {
                    text: 'دانشکده ها',
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
            hidden:true,
            text: "اخبار",
            icon: icon('newspaper'),
            menu: [
                {
                    text: 'خبرها',
                    icon: icon('newspaper')
                },

                {
                    text: 'خبر نو',
                    icon: icon('add')
                }
            ]
        },
        {
            text: 'تنظیمات',
            icon: icon('gear'),
            handler: function (btn) {
            },
            menu: [
                {
                    text: 'مشخصات من',
                    icon: icon('information')
                },
                {
                    text: 'سامانه',
                    icon: icon('gear'),
                    handler: function (btn) {
                    },
                    menu: [
                        {
                            text: 'پیام آغازین'
                        },

                        {
                            text: 'اطلاعات تماس'
                        }
                    ]
                }
            ]
        },
        {
            text: "راهنما",
            icon: icon('help'),
            menu: [
                {
                    icon: icon('help'),
                    text: "راهنمای برنامه"
                } ,
                {
                    text: "وبگاه شرکت",
                    icon: icon('World'),
                    handler: function (b, e) {
                        window.location = 'http://ahura.biz';
                    }
                } ,
                {
                    text: "درباره"
                }
            ],
            handler: function (b, e) {
            }

        },
        '->'
        ,
        {
            text: "خروج",
            icon: icon('door_out'),
            handler: function (b, e) {
                window.location = '/account/logout';
            }

        }
    ]
});

Ext.define('Mehr.view.Viewport', {
    itemId: 'vp',
    //    layout: 'fit',
    //layout: 'border',
    items: [
    ]
});
