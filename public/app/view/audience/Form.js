//Mehr.formPanel.Audiences = Ext.create('Ext.form.Panel',{
Ext.define('Mehr.view.audience.Form', {
    extend: 'Ext.form.Panel',
    alias: "widget.audiencesForm",
    layout: 'fit',
    id: "queryBuilderForm",
    url: "/program/json-Save-Program-Audiences",
    labelWidth: 75,
    border: false,
    defaults: {
        anchor: '100%'
    },
    items: {
        xtype: 'tabpanel',
        activeTab: 0,
        defaults: {
            autoHeight: true,
            bodyStyle: 'padding:10px'
        },
        items: [
            {

                title: 'اطلاعات فردي',
                defaultType: 'textfield',
                items: [
                    {
                        fieldLabel: 'نام',
                        name: 'first_name',
                        //allowBlank:false,
                        value: ''
                    },
                    {
                        fieldLabel: 'نام خانوادگي',
                        name: 'last_name'
                    },
                    {
                        fieldLabel: 'جنسیت',
                        xtype: 'radiogroup',
                        width: 300,
                        items: [
                            {
                                name: 'sex',
                                inputValue: "",
                                boxLabel: "مهم نیست",
                                checked: true,
                                columnWidth: 150
                            },
                            {
                                name: 'sex',
                                inputValue: "f",
                                boxLabel: "مونث"
                            },
                            {
                                name: 'sex',
                                inputValue: "m",
                                boxLabel: "مذکر"
                            }
                        ]

                    },
                    {
                        fieldLabel: 'شماره دانشجويي',
                        name: 'student_id',
                        xtype: 'numberfield'
                    },
                    {
                        fieldLabel: 'شماره ملي',
                        name: 'nid',
                        xtype: 'numberfield'
                    }
                ]
            },
            {
                bodyStyle: 'padding:10px;',
                title: 'آموزشي',
                defaults: {
                    width: 230,
                    anchor: '100%'
                },
                defaultType: 'textfield',
                items: [
                    {
                        xtype: 'terms-combo',
                        name: "from_term",
//                        fieldLabel: "از ورودی",
                        width:50
                    },
                    {
                        name: "to_term",
                        xtype: 'combo',
                        fieldLabel: 'تا ورودی',
                        //        width: 100,
                        forceSelection: true,
                        mode: 'local',
                        selectOnFocus: true,
                        store: Ahura.store.Terms
                    },
                    {
                        fieldLabel: "دوره",
                        xtype: 'combo',
                        valueField: "college_id",
                        minChars: 0,
//        resizable: true,
                        //        anchor:'90%',
                        name: 'courses[]',
                        displayField: 'title',
                        forceSelection: true,
                        width: 250,
                        store: [
                            [1, "روزانه"],
                            [2, "شبانه"],
                            [3, "دبیری"],
                            [4, "غیر حضوری"],
                            [5, "مجازی"],
                            [6, "بین الملل"]
                        ],
                        multiSelect: true
                    }
                    ,
                    {
                        xtype: 'combo',
                        valueField: "college_id",
                        minChars: 0,
//        resizable: true,
                        anchor: '90%',
                        fieldLabel: 'مقطع',
                        name: 'degrees[]',
                        forceSelection: true,
                        width: 400,
                        store: [
                            [8, "کارشناسی پیوسته"],
                            [9, "کارشناسی ناپیوسته"],
                            [7, "کاردانی ناپیوسته"],
                            [10, "کارشناسی ارشد ناپیوسته"],
                            [11, "کارشناسی ارشد پیوسته"],
                            [12, "دکتری ناپیوسته (پزشکی)"],
                            [13, "دکتری پیوسته (PhD)"]
                        ]
                    }
                    ,
//                    {
//                        text: "دانشجو میتواند در یکی از موارد زیر باشد. (بین موارد زیر «یا» قرار میگیرد.)",
//                        xtype: "label",
//                        style: 'padding:10px'
//
//                    },
                    Ext.create('Ahura.form.combo.Colleges'),
//                    Ext.create('Ahura.form.combo.Departments'),
//                    Ext.create('Ahura.form.combo.Disciplines')


                ]
            },

        ]
    },
    buttons: [

        {
            text: 'اعمال',
            icon: "img/16p/arrow_refresh.png",
//        icon:icon('arrow_refresh'),
            handler: function () {
//                users.proxy.extraParams = Mehr.formPanel.Audiences.getForm().getValues();
//                users.load();
//            Ext.getStore('Users').proxy.extraParams=Mehr.formPanel.Audiences.getForm().getValues();
//            Ext.getStore('Users').load();
            }
        },

        {
            text: 'پاک کردن همه',
            //        icon:icon('arrow_refresh'),
            id: 'clear-btm',
            handler: function () {
                Mehr.formPanel.Audiences.getForm().reset();
                Ext.getCmp('colleges_sbs').setValue('');
                Ext.getCmp('disciplines_sbs').setValue('');
                Ext.getCmp('departments_sbs').setValue('');
                //            Mehr.grid.Users.getStore().removeAll();
                //            Mehr.grid.Users.getStore().lastQuery=null;

            }

        }
        ,
        {
            text: 'بازگشت',
            icon: icon('arrow_rotate_anticlockwise'),
            handler: function () {
                Ext.ComponentMgr.get("audiencesWin").hide('domain-button');
            }
        },
        '->',
        {
            id: 'save-form-btm',
            icon: icon('save'),
            text: 'ذخیره',
            handler: function () {
                Ahura.formPanel.Audiences.getForm().submit();
            }

        }
        ,
        {
            text: 'بارگذاری مجدد',
            id: 'laod-form-btm',
            handler: function () {
                //            Ahura.formPanel.Audiences.getForm().load({url:'/tests/response.json'});
                Ahura.formPanel.Audiences.getForm().load({
                    url: '/program/json-load-program-audiences'
                });
            }

        }
    ]
});
