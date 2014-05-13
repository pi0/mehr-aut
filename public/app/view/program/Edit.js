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

Ext.define("Mehr.view.program.Edit", {
    extend: "Ahura.window.Base",
    requires:['Ahura.form.combo.ProgramSubject'],
    title: 'ویرایش برنامه',
    width: 800,
    height: 400,
    items: {
        xtype: 'form',
        baseParams:{
          'bar':3
        },
        api: {
            load:   RPC.ProgramApi.read,
            submit: RPC.ProgramApi.write
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
                                name: 'micCapacity',
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
                                name: 'enrollmentFromDate',
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
                                        boxLabel: "به وسیله سامانه مهر",
                                        inputValue: 'auto',
                                        checked: true,
                                        name: 'enrollmentMethod',

                                    },
                                    {
                                        boxLabel: "دستی",
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
                                name: 'paymentMethod',
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
                                        name: 'paymentMethod'
                                    },

                                    {
                                        boxLabel: "اینترنتی",
                                        inputValue: 'internet',
                                        checked: false,
                                        name: 'paymentMethod'
                                    }
                                    ,
                                    {
                                        boxLabel: "فیش بانکی",
                                        inputValue: 'bank',
                                        checked: false,
                                        name: 'paymentMethod'
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
        layout: 'fit'
    },
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
            handler: function () {
                var form = this.up('window').down('form').getForm();
                console.log(form.getFieldValues());
                form.submit();

//                if (form.isValid()) {
//                    // Submit the Ajax request and handle the response
//                    form.submit({
//                        success: function (form, action) {
////                            Ext.Msg.alert('Success', action.result.message);
//                            Ext.Msg.alert('Success', 'OK');
//                        },
//                        failure: function (form, action) {
////                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
//                            Ext.Msg.alert('Failed', 'NOK');
//                        }
//                    });
//                }
            }
        },
        {
            text: 'انصراف',
            icon: icon('cancel'),
            handler: function () {
                $('[text=ذخیره]')[0].up('window').down('form').load();
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
                (Ext.create("Mehr.view.program.Enrollers")).show()

            }
        }
    ]
});
