Ext.define('Mehr.grid.ProgramSchedule', {
    extend: 'Ext.grid.Panel',
//    frame: false,
    local: true,
//    autoLoad: true,
    clicksToEdit: 1,
//    store: {
//        data: {
//            response: {
//
//                1: 2, 2: 3
//            }
//        },
//        reader: new Ext.data.JsonReader({
//                root: 'response',
//                totalProperty: 'results',
//                id: 'section_id'
//            },
//            ['section', 'title', 'time_sts', 'time_ets', ]
//        )
//    },
    columns: [
        {
            header: "جلسه/رویداد",
            dataIndex: "title",
            edito: {
                xtype: "textfield"
            }

        }
    ]
});

Ext.define("Mehr.view.program.Form", {
    extend: "Ext.form.Panel",
//    layout: 'fit',
    alias: 'widget.programEdit',
    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    title:'مشخصات اولیه',
                    items: [
                        {
                            name: 'program_id',
                            xtype: 'hidden'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'عنوان',
                            name: 'title',
                            allowBlank: false,
                            anchor: '90%'
                        },
                        {
                            xtype: 'combo',
                            hiddenName: 'subject',
                            store: Ahura.store.ProgramSubjects,
                            fieldLabel: 'موضوع'
                        },
                        Ext.create('Ahura.form.combo.ProgramType'),
                        Ext.create('Ahura.form.combo.ProgramLevel')
                    ]

                },
                {
                    title: 'نام نویسی',
                    layout: 'form',
                    labelAlign: 'right',
                    defaults: {
                        labelWidth: 180
                    },
                    defaultType: 'textfield',
                    labelWidth: 350,
                    items: [
                        {
                            fieldLabel: 'کمینه شمار شرکت کننده ها',
                            name: 'mic_capacity',
                            xtype: 'numberfield',
                            allowDesimal: false,
                            allowNegative: false
                        },
                        {
                            fieldLabel: 'بیشینه شمار شرکت کننده ها',
                            name: 'max_capacity',
                            xtype: 'numberfield',
                            allowDesimal: false,
                            allowNegative: false
                        },
                        {
                            fieldLabel: 'زمان آغاز نام نویسی',
                            emptyText: "",
                            name: 'enrollment_sts',
                            xtype: 'jalali'
                        },
                        {
                            fieldLabel: 'زمان پایان نام نویسی',
                            emptyText: "",
                            name: 'enrollment_sts',
                            xtype: 'jalali'
                        } ,
                        {
                            fieldLabel: 'شیوه نام نویسی',
                            name: 'enrollment_method',
                            xtype: 'radiogroup',
                            width: 300,
                            labelAlign: 'right',
                            columns: 'auto',
                            items: [
                                {
                                    boxLabel: "به وسیله سامانه مهر",
                                    inputValue: 'auto',
                                    checked: true,
                                    name: 'enrollment_method'
                                },

                                {
                                    boxLabel: "دستی",
                                    inputValue: 'manual',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                            ]
                        }

                    ]
                },
                {
                    title: 'هزینه',
                    autoScroll: true,
                    layout: 'form',
                    defaults: {
                        width: 230
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: "هزینه شرکت در برنامه(تومان)",
                            id: 'costInput',
                            xtype: 'numberfield',
                            name: 'cost',
                            labelWidth: 200,
                            allowDesimal: false,
                            allowNegative: false,
                            width: 200,
                            listeners: {
                                'show': function (t, v) {
                                    if (Number(v) > 0) {
                                        Ext.getCmp("paymentMethodRadio").enable();
                                    } else Ext.getCmp("paymentMethodRadio").disable();
                                },
                                'change': function (t, v) {
                                    if (Number(v) > 0) {
                                        Ext.getCmp("paymentMethodRadio").enable();
                                    } else Ext.getCmp("paymentMethodRadio").disable();
                                }
                            }
                        },
                        {
                            fieldLabel: 'نحوه پرداخت هزیته',
                            name: 'payment_method',
                            xtype: 'radiogroup',
                            id: 'paymentMethodRadio',
                            width: 300,
                            labelAlign: 'right',
                            disabled: true,
                            columns: 'auto',
                            items: [
                                {
                                    boxLabel: "نقدی",
                                    inputValue: 'cash',
                                    checked: true,
                                    name: 'enrollment_method'
                                },

                                {
                                    boxLabel: "اینترنتی",
                                    inputValue: 'internet',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                                ,
                                {
                                    boxLabel: "فیش بانکی",
                                    inputValue: 'bank',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                            ]
                        }

                    ]
                },
//                {
//                    title: 'کلیات',
//                    autoScroll: true,
//                    layout: 'form',
//                    defaultType: 'textfield',
//                    defaults: {
//                        width: 230
//                    },
//                    items: [
//
//                        {
//                            fieldLabel: 'برگزارکننده',
//                            name: 'club_id',
//                            xtype: 'textfield'
//                        },
//                        {
//                            fieldLabel: 'مدیر/مسئول',
//                            name: 'manager'
//                        }
//
//
//                    ]
//                },
                //            new Mehr.panel.ProgramEditTab(
//                {
//                    layout: 'form',
//                    bodyStyle: 'padding:0px',
//                    labelAlign: 'right',
//                    defaults: {
//                        width: 230,
//                        anchor: "80%"
//                    },
//                    defaultType: 'textfield',
//                    title: 'زمانبندی اجرا',
//                    items: [
//                        Ext.create('Mehr.grid.ProgramSchedule')
//                    ]
//
//                },
                {
                    title: 'جزئیات',
                    xtype: 'htmleditor',
                    id: 'programDetails',
                    name: "details",
                    frame: false,
                    fontFamilies: ['Tahoma', 'B Zar', 'B Titr'],
                    layout: 'fit'
                },
                {
                    title: 'مخاطبان',
                    layout: 'fit',
                    items: {
                        xtype: 'audience-panel'
                    }
                }

            ]
        }
    ]
});

Ext.define("Mehr.view.program.EditWindow", {
    extend: "Ahura.window.Base",
    title: 'ویرایش برنامه',
    width: 800,
    height: 400,
    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    title:'مشخصات اولیه',
                    layout:'form',
                    bodyPadding:10,
                    items: [
                        {
                            name: 'program_id',
                            xtype: 'hidden'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'عنوان',
                            name: 'title',
                            allowBlank: false,
                            anchor: '90%'
                        },
                        {
                            xtype: 'combo',
                            hiddenName: 'subject',
                            store: Ahura.store.ProgramSubjects,
                            fieldLabel: 'موضوع'
                        },
                        Ext.create('Ahura.form.combo.ProgramType'),
                        Ext.create('Ahura.form.combo.ProgramLevel')
                    ]

                },
                {
                    title: 'نام نویسی',
                    layout: 'form',
                    bodyPadding:10,
                    defaults: {
                        labelWidth: 180
                    },
                    defaultType: 'textfield',
                    labelWidth: 350,
                    items: [
                        {
                            fieldLabel: 'کمینه شمار شرکت کننده ها',
                            name: 'mic_capacity',
                            xtype: 'numberfield',
                            allowDesimal: false,
                            allowNegative: false
                        },
                        {
                            fieldLabel: 'بیشینه شمار شرکت کننده ها',
                            name: 'max_capacity',
                            xtype: 'numberfield',
                            allowDesimal: false,
                            allowNegative: false
                        },
                        {
                            fieldLabel: 'زمان آغاز نام نویسی',
                            emptyText: "",
                            name: 'enrollment_sts',
                            xtype: 'jalali'
                        },
                        {
                            fieldLabel: 'زمان پایان نام نویسی',
                            emptyText: "",
                            name: 'enrollment_sts',
                            xtype: 'jalali'
                        } ,
                        {
                            fieldLabel: 'شیوه نام نویسی',
                            name: 'enrollment_method',
                            xtype: 'radiogroup',
                            width: 300,
                            labelAlign: 'right',
                            columns: 'auto',
                            items: [
                                {
                                    boxLabel: "به وسیله سامانه مهر",
                                    inputValue: 'auto',
                                    checked: true,
                                    name: 'enrollment_method'
                                },

                                {
                                    boxLabel: "دستی",
                                    inputValue: 'manual',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                            ]
                        }

                    ]
                },
                {
                    title: 'هزینه',
                    layout: 'form',
                    bodyPadding:10,
                    defaults: {
                        width: 230
                    },
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: "هزینه شرکت در برنامه(تومان)",
                            id: 'costInput',
                            xtype: 'numberfield',
                            name: 'cost',
                            labelWidth: 200,
                            allowDesimal: false,
                            allowNegative: false,
                            width: 200,
                            listeners: {
                                'show': function (t, v) {
                                    if (Number(v) > 0) {
                                        Ext.getCmp("paymentMethodRadio").enable();
                                    } else Ext.getCmp("paymentMethodRadio").disable();
                                },
                                'change': function (t, v) {
                                    if (Number(v) > 0) {
                                        Ext.getCmp("paymentMethodRadio").enable();
                                    } else Ext.getCmp("paymentMethodRadio").disable();
                                }
                            }
                        },
                        {
                            fieldLabel: 'نحوه پرداخت هزیته',
                            name: 'payment_method',
                            xtype: 'radiogroup',
                            id: 'paymentMethodRadio',
                            width: 300,
                            labelAlign: 'right',
                            disabled: true,
                            columns: 'auto',
                            items: [
                                {
                                    boxLabel: "نقدی",
                                    inputValue: 'cash',
                                    checked: true,
                                    name: 'enrollment_method'
                                },

                                {
                                    boxLabel: "اینترنتی",
                                    inputValue: 'internet',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                                ,
                                {
                                    boxLabel: "فیش بانکی",
                                    inputValue: 'bank',
                                    checked: false,
                                    name: 'enrollment_method'
                                }
                            ]
                        }

                    ]
                },
//                {
//                    title: 'کلیات',
//                    autoScroll: true,
//                    layout: 'form',
//                    defaultType: 'textfield',
//                    defaults: {
//                        width: 230
//                    },
//                    items: [
//
//                        {
//                            fieldLabel: 'برگزارکننده',
//                            name: 'club_id',
//                            xtype: 'textfield'
//                        },
//                        {
//                            fieldLabel: 'مدیر/مسئول',
//                            name: 'manager'
//                        }
//
//
//                    ]
//                },
                //            new Mehr.panel.ProgramEditTab(
//                {
//                    layout: 'form',
//                    bodyStyle: 'padding:0px',
//                    labelAlign: 'right',
//                    defaults: {
//                        width: 230,
//                        anchor: "80%"
//                    },
//                    defaultType: 'textfield',
//                    title: 'زمانبندی اجرا',
//                    items: [
//                        Ext.create('Mehr.grid.ProgramSchedule')
//                    ]
//
//                },

                {
                    title: 'مخاطبان',
                                icon: icon('group'),
                    layout: 'fit',
                    items: {
                        xtype: 'audience-panel'
                    }
                },
                {
                    title: 'جزئیات',
                    xtype: 'htmleditor',
                    id: 'programDetails',
                    name: "details",
                    frame: false,
                    fontFamilies: ['Tahoma', 'B Zar', 'B Titr'],
                    layout: 'fit'
                }

            ]
        }

    ],
    buttons: [
        {
            text: 'ذخیره و بستن',
            icon: icon('save'),
            handler: function () {
//                Mehr.handler.SaveUser('close');

            }
        },
        {
            text: 'ذخیره و جدید',
            icon: icon('save'),
            handler: function () {
//                Mehr.handler.SaveUser('new');

            }
        },
        {
            text: 'ذخیره',
            icon: icon('save'),
//            handler: Mehr.handler.SaveUser
        },
        {
            text: 'انصراف',
            icon: icon('cancel'),
            handler: function () {
//                Mehr.window.ProgramEdit.hide();
            }
        },
//        {
//            text: 'مخاطبان',
//            id: 'audiencesBtn',
//            icon: icon('group'),
//            handler: function () {
//                Ext.create("Mehr.view.audience.Window");
////                id = Mehr.formPanel.ProgramEdit.getForm().findField('program_id').getValue();
////                Mehr.formPanel.Audiences.load({
////                    url: '/program/json-Get-Programe-audiences',
////                    params: {
////                        program_id: id
////                        //                            program_id: Mehr.formPanel.ProgramEdit.find('name','program_id').getValue()
////                    },
////                    failure: function (form, action) {
////                        Ext.Msg.alert("Load failed", action.result.errorMessage);
////                    }
////                });
////                Mehr.window.Audiences.show('audiencesBtn');
//            }
//        },
        {
            text: 'مدیریت نام نوشتگان',
//        disabled:true,
            id: 'enrollersBtn',
            icon: icon('groupEdit'),

            handler: function (button) {
//                Mehr.store.Enrollers.load({params: {program_id: Mehr.v.program_id}
//                });
//                Mehr.window.Enrollers.show("enrollersBtn");
                (Ext.create("Mehr.view.program.EnrollersWindow")).show()

            }
        }
    ]
});
