(function () {
    Ext.define("Mehr.view.news.Edit", {
        extend: "Ahura.window.Base",
        requires: ["Ahura.form.combo.User", 'Ahura.form.field.FaEditor', 'Ahura.form.field.Integer', 'Ahura.form.combo.Entity', 'Ahura.form.combo.ProgramSubject', 'Mehr.view.audience.Panel', 'Ahura.form.combo.Term', "Ahura.form.combo.ProgramType", "Ahura.form.combo.ProgramLevel",'Ext.ux.form.TinyMCETextArea','Ext.ux.form.field.ImageFileField'],
        title: 'ویرایش اخبار',
        width: 800,
        height: 500,
        items: {
            xtype: 'form',
            layout: 'form',
            submitEmptyText: false,
            paramsAsHash: true,
            jsonSubmit: true,
            bodyStyle: 'padding: 5px',
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
                    fieldLabel: 'عنوان'
                },
                {
                    xtype: 'program-subject-combo'
                },
                {
                    fieldLabel: 'پوستر/تصویر',
                    name: 'image',
                    xtype: 'filefield'
                },
                {
                    fieldLabel: 'متن',
                    name: 'details',
                    xtype: 'tinymce_field',
                    height: 300,
                    tinyMCEConfig:{
                        plugins: 'image media table',
                        language: 'fa_IR',
                        directionality : 'rtl'
                    },
                    hideLabel:true
                }
            ]
        },
        buttons: [
            Ahura.button.SaveForm,
            Ahura.button.CancelForm
        ]
    });
})();