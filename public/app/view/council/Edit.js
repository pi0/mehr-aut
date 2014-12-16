Ext.define('Mehr.view.council.Edit', {
    extend: 'Ahura.window.Base',
    requires: 'Ahura.form.combo.User',
    title: 'ویرایش/ایجاد دوره',
    width: 500,
    items: [
        {
            frame: false,
            xtype: 'form',
            submitEmptyText: false,
            paramsAsHash: true,
            api: {
                load: RPC.CouncilApi.read,
                submit: RPC.CouncilApi.create
            },
            layout: 'fit',
            fieldDefaults: {
                labelAlign: 'top',
                labelWidth: 300,
                labelStyle: 'margin-bottom:3px'
            },
            items: [
                {
                    border: false,
                    xtype: 'tabpanel',
                    items: [
                        {
                            bodyStyle: 'padding:10px',
                            layout: 'form',
                            title: 'مشخه‌های پایه',
                            labelAlign: 'right',
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'hidden',
                                    name: 'entity'
                                },
                                {
                                    name: 'active',
                                    fieldLabel: 'فعال (با انتخاب این گزینه اختیارات شورا به دوره جدید واگذار می‌شود و دوره قبل غیرفعال می‌شود.)',
                                    xtype: 'checkbox',
                                    inputValue: 1
                                }
                                ,
                                {
                                    xtype: 'hidden',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: 'عنوان این دوره (معمولاَ شماره دوره)',
                                    emptyText: "",
                                    name: 'name',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: 'زمان شروع نام‌نویسی نامزدها',
                                    emptyText: "",
                                    name: 'enrollmentStartDate',
                                    vtype: 'daterange',
                                    endDateField: 'enrollmentEndDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان نام‌نویسی نامزدها',
                                    emptyText: "",
                                    name: 'enrollmentEndDate',
                                    vtype: 'daterange',
//                                    startDateField: 'enrollmentStartDate',
                                    endDateField: 'electionStartDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان آغاز رأی‌گیری',
                                    emptyText: "",
                                    name: 'electionStartDate',
                                    vtype: 'daterange',
//                                    startDateField: 'enrollmentEndDate',
                                    endDateField: 'electionEndDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان رأی‌گیری',
                                    name: 'electionEndDate',
                                    vtype: 'daterange',
//                                    startDateField: 'electionStartDate',
                                    endDateField: 'startDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان آغاز فعالیت',
                                    emptyText: "",
                                    allowBlank: false,
                                    name: 'startDate',
//                                    startDateField: 'electionEndDate',
                                    xtype: 'jalali'
                                },
                                {
                                    fieldLabel: 'زمان پایان فعالیت',
                                    allowBlank: false,
                                    name: 'endDate',
                                    startDateField: 'endDate',
                                    xtype: 'jalali'
                                }

                            ]
                        },
                        {
                            frame: false,
                            border: false,
                            title: 'توضیحات',
                            layout: 'fit',
                            value: '',
                            autoScroll: true,
                            items: [
                                {
                                    name: 'note',
                                    xtype: 'htmleditor'
                                }
                            ]

                        }
                    ]
                }
            ],
            fbar: [Ahura.button.SaveForm, Ahura.button.CancelForm]        }
    ],
    initComponent: function () {
        this.title = (this.info) ? 'ویرایش/ایجاد دوره:' + this.info.get('name') : "ویرایش/ایجاد دوره";
        this.callParent(arguments);
        if (this.isNew) {
            var field = this.down('form').getForm().findField('entity');
            field.setValue((this.info) ? this.info.getId() : this.tid);
        } else {
            this.down('form').load({params: {id: this.info.get('id')}});
        }
    }
});