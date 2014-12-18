Ext.require(['Ahura.form.combo.Provinces', 'Ahura.form.combo.Nationality', 'Ahura.form.combo.MaritalStatus', 'Ahura.form.combo.EntityType', 'Ahura.form.Base', 'Ahura.form.combo.Religion']);
Ext.define('Mehr.view.user.Edit',
    {
        extend: 'Ahura.window.Base',
        requires: 'Ahura.form.combo.SID',
        title: 'ویرایش کاربر',
        width: 600,
        items: {
            xtype: 'form',
            paramsAsHash: true,
            fieldDefaults: {
                msgTarget: 'under'
            },
            api: {
                load: RPC.UserApi.read,
                submit: RPC.UserApi.create
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
                                    fieldLabel: 'نام*',
                                    name: 'firstName',
                                    allowBlank: false,
                                    anchor: '90%'
                                },
                                {
//                                    anchor:'90%',
                                    columns: 2,
                                    fieldLabel: 'جنسیت*',
                                    allowBlank: false,
                                    xtype: 'radiogroup',
//                                    name: 'sex',
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
                                    fieldLabel: 'نام خانوادگی*',
                                    allowBlank: false,
                                    name: 'lastName',
                                    anchor: '90%'
                                },
                                {
                                    xtype: 'combo',
                                    store: Ahura.store.UserType,
                                    fieldLabel: 'نوع‌ کاربر',
                                    readOnly: true,
                                    name: 'type'
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
                                    xtype: 'numberfield',
                                    minLength: 8,
                                    maxLength: 10,
                                    enforceMaxLength: true
                                },
                                {
                                    fieldLabel: 'نام لاتین',
                                    name: 'latinFirstName'
                                },
                                {
                                    fieldLabel: 'نام خانوادگی لاتین',
                                    name: 'latinLastName'
                                },
                                {
                                    fieldLabel: 'نام پدر',
                                    name: 'fatherName'
                                }
                                ,
                                {
                                    fieldLabel: 'تاریخ تولد',
                                    name: 'birthdayDate',
                                    emptyText: "مثلا: 24-6-1365"
                                },
                                {
                                    fieldLabel: 'محل تولد',
                                    name: 'birthdayPlace'
                                }
                                ,
                                {
                                    xtype: 'nationality-combo'
                                }
                                ,
                                {
                                    xtype: 'marital-status-combo'
                                },
                                {
                                    xtype: 'religion-combo'
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
                                    fieldLabel: 'شماره دانشجویی',
                                    xtype: 'integer',
                                    name: 'sid'
                                },
                                {
                                    fieldLabel: 'واحد های اخذ شده',
                                    xtype: 'integer',
                                    name: 'takenUnits'
                                },
                                {
                                    fieldLabel: 'واحد های پاس شده',
                                    xtype: 'integer',
                                    name: 'passedUnits'
                                },
                                {
                                    fieldLabel: 'معدل نمرات',
                                    xtype: 'numberfield',
                                    decimalPrecision: 2,
                                    allowDecimals: true,
                                    name: 'average'
                                }
                                //,
                                //{
                                //    fieldLabel: 'ترم های مشروطی',
                                //    xtype: 'integer',
                                //    name: 'conditionalTerms'
                                //},
                                //{
                                //    xtype: 'department-combo'
                                //},
                                //{
                                //    xtype: 'course-combo'
                                //},
                                //{
                                //    xtype: 'degree-combo'
                                //},
                                //{
                                //    xtype: 'term-combo',
                                //    fieldLabel: 'ترم ورود',
                                //    name: 'startTerm'
                                //}
                                //,
                                //{
                                //    xtype: 'term-combo',
                                //    fieldLabel: 'ترم خروج',
                                //    name: 'endTerm'
                                //}
                            ]

                        },
                        {
                            layout: 'form',
                            title: 'تحصیلات',
                            autoScroll: true,
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'lastUniversity',
                                    fieldLabel: 'مرکز آموزشی:'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'lastDepartment',
                                    fieldLabel:'رشته'
                                },
                                {
                                    xtype: 'degree-combo',
                                    name: 'lastDegree'
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
                                {
                                    xtype: 'provinces-combo'
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
                                    emptyText: "گذرواژه جدید را وارد نمایید.",
                                    itmeId: 'password-cmp',
                                    name: 'password',
                                    allowBlank: true,
                                    minLength: 6
                                }
                                ,
                                {
                                    fieldLabel: 'تکرار گذرواژه',
                                    inputType: 'password',
                                    emptyText: "گذرواژه جدید را دوباره وارد نمایید.",
                                    name: 'passwordVerify',
                                    initialPassField: 'password',
                                    vtype: 'password',
                                    validateBlank: true
                                },
                                {
                                    fieldLabel: 'فعال',
                                    xtype: 'radiogroup',
                                    labelAlign: 'right',
                                    columns: 'auto',
                                    items: [
                                        {
                                            boxLabel: "فعال",
                                            inputValue: 1,
                                            name: 'active'
                                        },

                                        {
                                            boxLabel: "غیرفعال",
                                            inputValue: 0,
                                            name: 'active'
                                        }
                                    ]
                                }

                                /*
                                 ,
                                 {
                                 fieldLabel: 'نقش',
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
                                 */
                            ]
                        },
                        {
                            title: 'مسئولیت‌ها',
//                            xtype: 'base-form',
                            layout: 'form',
                            items: [
                                {
                                    xtype: 'entity-type-combo',
                                    fieldLabel: 'کارشناس',
                                    multiSelect: true,
                                    name: 'entityAdmin[]'
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
//                    html: "<ui><li>موارد  توسط کاربر قابل ویرایش نیست.</li><li>درج موارد * الزامی است.</li></ul>"
//                }
            ]
        },
        fbar: [Ahura.button.CancelForm, Ahura.button.SaveForm],
        initComponent: function(){
            this.callParent(arguments);
            if(typeof this.info != 'undefined'){
                this.down('form').getForm().load({params: {id: this.info.getId()}});
                this.title = 'ویرایش کاربر ' + this.info.get('firstName') + ' ' + this.info.get('lastName');
            } else {
                this.title = 'کاربر جدید';
            }
        }
    });
