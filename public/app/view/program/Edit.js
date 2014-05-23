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

Ext.define("Mehr.view.program.Edit",
    {
        extend: "Ahura.window.Base",
        requires: ['Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term'],
        title: 'ویرایش برنامه',
        width: 800,
        height: 400,
        items: {
            xtype: 'form',
            api: {
                load: RPC.ProgramApi.read,
                submit: RPC.ProgramApi.write
            },
            paramsAsHash: true,
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
                                    fieldLabel: 'عنوان',
                                    name: 'name',
                                    allowBlank: false,
                                    anchor: '90%'
                                },
                                {
                                    xtype: 'program-subject-combo'

                                },
                                Ext.create('Ahura.form.combo.ProgramType'),
                                Ext.create('Ahura.form.combo.ProgramLevel')
                            ]

                        },
                        {
                            title: 'نام نویسی',
                            layout: 'form',
                            bodyPadding: 10,
                            defaults: {
                                labelWidth: 180
                            },
                            defaultType: 'textfield',
                            labelWidth: 350,
                            items: [
                                {
                                    fieldLabel: 'کمینه شمار شرکت کننده ها',
                                    name: 'minCapacity',
                                    xtype: 'numberfield',
                                    allowDesimal: false,
                                    allowNegative: false
                                },
                                {
                                    fieldLabel: 'بیشینه شمار شرکت کننده ها',
                                    name: 'maxCapacity',
                                    xtype: 'numberfield',
                                    allowDesimal: false,
                                    allowNegative: false
                                },
                                {
                                    fieldLabel: 'زمان آغاز نام نویسی',
                                    emptyText: "",
                                    name: 'enrollmentStartDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان نام نویسی',
                                    emptyText: "",
                                    name: 'enrollmentEndDate',
                                    xtype: 'jalali'
                                } ,
                                {
                                    fieldLabel: 'شیوه نام نویسی',
                                    xtype: 'radiogroup',
                                    width: 300,
                                    labelAlign: 'right',
                                    columns: 'auto',
                                    items: [
                                        {
                                            fieldLabel: "به وسیله سامانه مهر",
                                            inputValue: 'auto',
                                            checked: true,
                                            name: 'enrollmentMethod',

                                        },
                                        {
                                            fieldLabel: "دستی",
                                            inputValue: 'manual',
                                            checked: false,
                                            name: 'enrollmentMethod',
                                        }
                                    ]
                                }

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
                                    fieldLabel: "هزینه شرکت در برنامه(تومان)",
                                    xtype: 'numberfield',
                                    name: 'cost',
                                    labelWidth: 200,
                                    allowDecimal: false,
                                    allowNegative: false,
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
                                            checked: true,
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
                                            checked: false,
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
                            xtype: 'htmleditor',
                            name: "details",
                            value: '',
                            frame: false,
                            fontFamilies: ['Tahoma', 'B Zar', 'B Titr'],
                            layout: 'fit'
                        }

                    ]
                }

            ],
            layout: 'fit'
        },
        buttons: Ahura.saveCancelBtn.concat({
                text: 'مدیریت نام نوشتگان',
//        disabled:true,
//            id: 'enrollersBtn',
                icon: icon('groupEdit'),

                handler: function (button) {
//                Mehr.store.Enrollers.load({params: {program_id: Mehr.v.program_id}
//                });
//                Mehr.window.Enrollers.show("enrollersBtn");
                    (Ext.create("Mehr.view.program.Enrollers")).show()
                }
            }
        )
    });
