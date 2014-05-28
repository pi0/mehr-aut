Ext.require('Ahura.form.combo.Provinces');
Ext.require('Ahura.form.combo.MaritalStatus');
Ext.define('Mehr.view.user.Edit',
    {
        extend: 'Ahura.window.Base',
        requires: 'Ahura.form.combo.SID',
        title: 'ویرایش کاربر',
        width: 600,
        items: {
            xtype: 'form',
            fieldDefaults: {
                msgTarget: 'under'
            },
            paramsAsHash: true,
            api: {
                load: RPC.UserApi.read,
                submit: RPC.UserApi.write
            },
            items: [
                {
                    bodyStyle: 'padding:5px',
                    layout: 'column',
                    border: false,
                    items: [
                        {
                            columnWidth: .5,
                            layout: 'form',
                            border: false,
                            items: [
                                {
                                    name: 'id',
                                    xtype: 'hidden'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'نام**',
                                    name: 'firstName',
                                    allowBlank: false,
                                    anchor: '90%'
                                },
                                {
//                                    anchor:'90%',
                                    columns: 2,
                                    fieldLabel: 'جنسیت**',
                                    allowBlank: false,
                                    xtype: 'radiogroup',
                                    name: 'sex',
                                    items: [
                                        {
                                            name: 'sex',
                                            inputValue: "m",
                                            boxLabel: "مذکر"
                                        },
                                        {
                                            name: 'sex',
                                            inputValue: "f",
                                            boxLabel: "مونث"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            columnWidth: .5,
                            layout: 'form',
                            border: false,
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'نام خانوادگي**',
                                    allowBlank: false,
                                    name: 'lastName',
                                    anchor: '90%'
                                },
                                {
                                    fieldLabel: 'شماره دانشجویی',
                                    xtype: 'integer',
                                    name: 'sid'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    layout: 'fit',
                    plain: true,
                    activeTab: 0,
                    items: [
                        {
                            title: 'فردی',
                            layout: 'form',
                            labelAlign: 'right',
                            defaults: {
                            },
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'شماره ملی',
                                    emptyText: "تنها شماره وارد نمایید.",
                                    name: 'nid',
                                    xtype: 'integer',
                                    minLength: 10,
                                    maxLength: 10,
                                    enforceMaxLength: true,
                                },
                                {
                                    fieldLabel: 'نام پدر',
                                    name: 'fatherName'
                                }
                                ,
                                {
                                    fieldLabel: 'تاریخ تولد**',
                                    name: 'birthdayDate',
                                    emptyText: "مثلا: 24-6-1365"
                                },
                                {
                                    fieldLabel: 'محل تولد',
                                    name: 'birthdayPlace'
                                }
                                ,
                                {
                                    fieldLabel: 'ملیت',
                                    name: 'nationality'
                                }
                                ,
                                {
                                    xtype: 'marital-status-combo'
                                }
                            ]
                        },
                        {
                            layout: 'form',
                            title: 'آموزشی',
                            autoScroll: true,
                            defaultType: 'textfield',

                            items: [
                                {
                                    valueField: "discipline_id",
                                    hiddenName: "discipline_id",
                                    xtype: 'combo',
                                    minChars: 0,
                                    anchor: '90%',
                                    fieldLabel: 'رشته',
                                    name: 'disciplined',
                                    displayField: 'title',
                                    forceSelection: true,
                                    width: 450,
                                    store: Ahura.store.Disciplines
//                                    store:{
//                                        fields: ['discipline_id', 'title'],
//                                        reader: new Ext.data.JsonReader({
//                                            root: 'disciplines'
//                                        }),
//                                        proxy: Mehr.proxy.disciplines,
//                                        autoLoad: true
//                                    }
                                },
                                {
                                    xtype: 'combo',
                                    width: 200,
                                    mode: 'local',
                                    selectOnFocus: true,
                                    forceSelection: true,
                                    typeAhead: true,
                                    store: Ahura.store.Terms,
                                    name: 'startTerm',
                                    fieldLabel: 'ترم ورود**',
                                    value: ''
                                }
                                ,
                                {
                                    xtype: 'combo',
                                    width: 200,
                                    mode: 'local',
                                    selectOnFocus: true,
                                    forceSelection: true,
                                    typeAhead: true,
                                    store: Ahura.store.Terms,
                                    name: 'endTerm',
                                    fieldLabel: 'ترم خروج',
                                    value: ''
                                }
                            ]

                        },
                        {
                            title: 'تماس',
                            autoScroll: true,
                            defaultType: 'textfield',
                            layout: 'form',
                            items: [

                                {
                                    fieldLabel: 'رایانامه(email)',
                                    name: 'email',
                                    xtype: 'textfield',
                                    //                    emptyText:'پیش شماره را نیز وارد نمایید.',
                                    vtype: 'email'
                                },
                                {
                                    fieldLabel: 'تلفن همراه',
                                    name: 'mobile',
                                    xtype: 'numberfield',
                                    xtype: 'numberfield',
                                    emptyText: 'پیش شماره را نیز وارد نمایید.'
                                    //                    maxLength:11,
                                    //                    minLength:7
                                },
                                {
                                    fieldLabel: 'تلفن خانه',
                                    name: 'phone',
                                    xtype: 'numberfield',
                                    emptyText: 'پیش شماره را نیز وارد نمایید.'
                                    //                    maxLength:11,
                                    //                    minLength:7
                                },
//                                {
//                                    xtype:'provinces'
//                                },
//                                    {xtype:'provinces'},
                                {
                                    xtype: 'combo',
                                    store: Ahura.store.Provinces,
                                    fieldLabel: 'استان',
                                    name: "term"
                                },
                                {
                                    fieldLabel: 'شماره پستی',
                                    validationDelay: 5000,
                                    name: 'zip',
                                    emptyText: 'تنها شماره وارد نمایید.',
                                    xtype: 'numberfield',
                                    maxLength: 10,
                                    minLength: 10
                                },
                                {
                                    xtype: 'textarea',
                                    fieldLabel: 'نشانی',
                                    name: 'address'
                                }

                            ]
                        },
                        {
                            title: 'سامانه',
                            labelAlign: 'right',
                            defaultType: 'textfield',
                            layout: 'form',
                            items: [
                                {
                                    fieldLabel: 'نام کاربری',
                                    name: 'username'
                                }
                                ,
                                {
                                    fieldLabel: 'گذرواژه',
                                    inputType: 'password',
                                    //                    emptyText:"گذرواژه جدید را وارد نمایید.",
                                    itmeId: 'password-cmp',
                                    name: 'password'
                                    //                    minLength:6
                                }
                                ,
                                {
                                    fieldLabel: 'تکرار گذرواژه',
                                    inputType: 'password',
                                    vtype: 'password',
                                    initialPassField: 'password-cmp',
                                    //                    emptyText:"گذرواژه جدید را دوباره وارد نمایید.",
                                    name: 'passwordVerify'
                                    //                    minLength:6
                                },
                                {
                                    fieldLabel: 'فعال**',
                                    name: 'active',
                                    xtype: 'radiogroup',
                                    labelAlign: 'right',
                                    columns: 'auto',
                                    items: [
                                        {
                                            boxLabel: "فعال",
                                            inputValue: 1,
                                            checked: true,
                                            xtype: 'radio',
                                            name: 'active'
                                        },

                                        {
                                            boxLabel: "غیرفعال",
                                            inputValue: false,
                                            checked: 0,
                                            xtype: 'radio',
                                            name: 'active'
                                        }
                                    ]
                                }
                                ,
                                {
                                    fieldLabel: 'نقش**',
                                    name: 'user_type',
                                    xtype: 'radiogroup',
                                    labelAlign: 'right',
                                    columns: 'auto',
                                    items: [
                                        {
                                            boxLabel: "دانشجو",
                                            inputValue: 's',
                                            checked: true,
                                            xtype: 'radio',
                                            name: 'user_type'
                                        },

                                        {
                                            boxLabel: "کارمند/استاد",
                                            inputValue: 'e',
                                            checked: false,
                                            xtype: 'radio',
                                            name: 'user_type'
                                        }
                                    ]
                                }
                            ]

                        }

                    ]
                }
//                {
//                    height: 50,
//                    layout: 'fit',
////                        anchor: '100%',
//                    border: false,
//                    bodyStyle: 'padding:10px',
//                    html: "<ui><li>موارد ** توسط کاربر قابل ویرایش نیست.</li><li>درج موارد * الزامی است.</li></ul>"
//                }
            ]
        },
        fbar: [Ahura.button.CancelForm, Ahura.button.SaveForm]
    });

