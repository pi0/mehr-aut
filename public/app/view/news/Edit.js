(function () {
    Ext.define("Mehr.view.news.Edit", {
        extend: "Ahura.window.Base",
        requires: ["Ahura.form.combo.User", 'Ahura.form.field.FaEditor', 'Ahura.form.field.Integer', 'Ahura.form.combo.Entity', 'Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term', "Ahura.form.combo.ProgramType", "Ahura.form.combo.ProgramLevel"],
        title: 'ویرایش اخبار',
        width: 800,
        items: {
            xtype: 'form',
            layout: 'form',
            submitEmptyText: false,
            paramsAsHash: true,
            jsonSubmit: true,
            api: {
                submit: 'RPC.NewsApi.create',
                load: 'RPC.NewsApi.read'
            },
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
                    fieldLabel: 'پوستر/تصویر',
                    name: 'image',
                    xtype: 'textfield'
                },
                {
                    fieldLabel: 'متن',
                    name: 'desc',
                    xtype: 'fa-editor'
                }
            ]
        },
        buttons: [
            Ahura.button.SaveForm,
            Ahura.button.CancelForm
        ]
    });
})()