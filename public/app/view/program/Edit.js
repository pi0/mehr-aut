Ext.define("Mehr.view.program.Edit", {
    extend: "Ahura.window.Base",
    requires: ["Ahura.form.combo.User", 'Ahura.form.field.FaEditor', 'Ahura.form.field.Integer', 'Ahura.form.combo.Entity', 'Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term', "Ahura.form.combo.ProgramType", "Ahura.form.combo.ProgramLevel"],
    title: 'ویرایش برنامه',
    width: 800,
    items: {
        xtype: 'form',
        submitEmptyText: false,
        paramsAsHash: true,
        jsonSubmit: true,
        api: {
            load: RPC.ProgramApi.read,
            submit: RPC.ProgramApi.create
        },
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'مشخصات اولیه',
                        layout: 'form',
                        bodyPadding: 10,
                        items: [
                            {
                                name: 'id',
                                xtype: 'hidden'
                            },
                            {
                                xtype: 'textfield',
                                name: 'name',
                                allowBlank: false,
                                fieldLabel: 'عنوان',
                                anchor: '90%'
                            },
                            {
                                xtype: 'program-subject-combo'
                            },
                            {
                                xtype: 'program-type-combo'
                            },
//                            {
//                                xtype: 'program-level-combo'
//                            },
                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                fieldLabel: 'تاریخ آغاز برنامه',
                                items: [
                                    {
                                        xtype: 'timefield',
                                        name: 'executionStartTime',
                                        format: 'H:i',
                                        width: 75
                                    },
                                    {
                                        xtype: 'jalali',
                                        name: 'executionStartDate',
                                        vtype: 'daterange',
                                        endDateField: 'executionEndDate',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                fieldLabel: 'تاریخ پایان برنامه',
                                items: [
                                    {
                                        xtype: 'timefield',
                                        name: 'executionEndTime',
                                        format: 'H:i',
                                        width: 75
                                    },
                                    {
                                        xtype: 'jalali',
                                        name: 'executionEndDate',
                                        vtype: 'daterange',
                                        startDateField: 'executionStartDate',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                fieldLabel: 'متولی',
                                name: 'entityId',
                                allowBlank: false,
                                xtype: 'entity-combo'
                            },
                            {
                                fieldLabel: 'مسئول',
                                name: 'manager',
                                xtype: 'user-combo'
                            },
                            {
                                fieldLabel: 'پستر/تصویر',
                                name: 'image',
                                xtype: 'text'
                            }
                        ]

                    },
                    {
                        title: 'نام‌نویسی',
                        layout: 'form',
                        bodyPadding: 10,
                        defaults: {
                            labelWidth: 180
                        },
                        defaultType: 'textfield',
                        labelWidth: 350,
                        items: [
                            {
                                fieldLabel: 'کمینه شمار شرکت کننده‌ها',
                                name: 'minCapacity',
                                xtype: 'integer'
                            },
                            {
                                fieldLabel: 'بیشینه شمار شرکت کننده‌ها',
                                name: 'maxCapacity',
                                xtype: 'integer'
                            },
                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                fieldLabel: 'زمان آغاز نام‌نویسی',
                                items: [
                                    {
                                        xtype: 'timefield',
                                        name: 'enrollmentStartTime',
                                        format: 'H:i',
                                        width: 75
                                    },
                                    {
                                        xtype: 'jalali',
                                        name: 'enrollmentStartDate',
                                        flex: 1,
                                        emptyText: "",
                                        vtype: 'daterange',
                                        endDateField: 'enrollmentEndDate' // id of the start date field
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                fieldLabel: 'زمان پایان نام‌نویسی',
                                items: [
                                    {
                                        xtype: 'timefield',
                                        name: 'enrollmentEndTime',
                                        format: 'H:i',
                                        width: 75
                                    },
                                    {
                                        xtype: 'jalali',
                                        flex: 1,
                                        vtype: 'daterange',
//                                        startDateField: 'enrollmentStartDate'
                                        name: 'enrollmentEndDate'
                                    }
                                ]
                            }
//                            ,{
//                                fieldLabel: 'شیوه نام‌نویسی',
//                                xtype: 'radiogroup',
//                                width: 300,
//                                labelAlign: 'right',
//                                columns: 'auto',
//                                items: [
//                                    {
//                                        fieldLabel: "سامانه مهر",
//                                        inputValue: 'auto',
//                                        checked: true,
//                                        name: 'enrollmentMethod'
//
//                                    },
//                                    {
//                                        fieldLabel: "دستی",
//                                        inputValue: 'manual',
//                                        checked: false,
//                                        name: 'enrollmentMethod'
//                                    }
//                                ]
//                            }

                        ]
                    },
                    {
                        title: 'هزینه',
                        layout: 'form',
                        bodyPadding: 10,
                        defaults: {
                            width: 230
                        },
                        defaultType: 'textfield',
                        items: [
                            {
                                fieldLabel: "هزینه نام‌نویسی (تومان)",
                                xtype: 'integer',
                                name: 'cost',
                                labelWidth: 200,
                                width: 200,
                                listeners: {
//                                        'show': function (t, v) {
//                                            if (Number(v) > 0) {
//                                                Ext.getCmp("paymentMethodRadio").enable();
//                                            }
//                                            else Ext.getCmp("paymentMethodRadio").disable();
//                                        },
                                    'change': function (el, v) {
//                                            var radio = el.up('panel').down('radiogroup');
//                                            console.log(radio);
//
//                                            if (Number(v) > 0) {
//                                                radio.enable();
//                                            } else radio.disable();
////                                            radio.forEach(function (e) {
////                                                console.log(e);
////                                            });
////                                                Ext.getCmp("paymentMethodRadio").enable();
                                    }
                                }
                            },
                            {
                                fieldLabel: 'نحوه پرداخت هزیته',
                                xtype: 'radiogroup',
//                                id: 'paymentMethodRadio',
                                width: 300,
                                labelAlign: 'right',
                                disabled: true,
                                columns: 'auto',
                                name: 'paymentMethod',
                                items: [
                                    {
                                        boxLabel: "نقدی",
                                        inputValue: 'c',
                                        checked: true
//                                            name: 'paymentMethod'
                                    },

                                    {
                                        boxLabel: "اینترنتی",
                                        inputValue: 'i',
                                        checked: false
//                                            name: 'paymentMethod'
                                    }
                                    ,
                                    {
                                        boxLabel: "فیش بانکی",
                                        inputValue: 'b',
                                        checked: false
//                                            name: 'paymentMethod'
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
                        xtype: 'fa-editor'
                    }
                ]
            }

        ],
        layout: 'fit'
    },
    buttons: [
        {
            itemId: 'saveBtn',
            text: 'ذخیره',
            icon: icon('save'),
            handler: function () {
                var c = [], d = [];
                var form = this.up('window').down('form').getForm();
                var win = this.up('window');
                win.down('treepanel').getChecked().forEach(function (v) {
                    if (v.get('type') == 'college') {
                        c.push(v.get('id'));
                    } else if (v.get('type') == 'department') {
                        d.push(v.get('id'));
                    }
                });

                if (form.isValid()) {
                    // Submit the Ajax request and handle the response
                    form.submit({
                        submitEmptyText: false,
                        params: {
                            'audience[departments]': d,
                            'audience[colleges]': c
                        },
                        success: function (form, action) {
//                            Ext.Msg.alert('Success', action.result.message);
                            Ext.MessageBox.show({
                                scope: win,
                                rtl: true,
                                title: 'موفقیت',
                                msg: 'دستور شما به درستی اجرا شد.',
//                            msg: 'اطلاعات به شکل موفقیت آمیز ذخیره شد.',
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.INFO,
                                fn: function () {
                                    this.close();
                                }
                            })
                        },
                        failure: function (form, action) {
//                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                            Ext.MessageBox.show({
                                rtl: true,
                                title: 'خطا',
                                msg: (action.result.message) ? 'در داده‌های وارد شده خطا وجود دارد.' : 'ارتباط با سرور برقرار نشد.',
//                            msg: 'خطایی در داده‌ها وجود دارد.',
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });
                } else {
                    Ext.MessageBox.show({
                        rtl: true,
                        title: 'خطا',
                        msg: 'در داده‌های وارد شده خطا وجود دارد.',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.ERROR
                    });

                }
            }
        },
        Ahura.button.CancelForm
//        ,
//        {
//            text: 'مدیریت نام نوشتگان',
//            icon: icon('groupEdit'),
//            handler: function (button) {
////                Mehr.store.Enrollers.load({params: {program_id: Mehr.v.program_id}
////                });
////                Mehr.window.Enrollers.show("enrollersBtn");
//                (Ext.create("Mehr.view.program.Enrollers")).show()
//            }
//        }
    ]
});
