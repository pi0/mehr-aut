Ext.define('Mehr.view.setting.Password', {
    requires:['Ahura.form.Base'],
    extend: 'Ahura.window.Base',
    xtype: 'change-password',
    title: 'تغییر گذرواژه',
    width: 330,
    layout: 'fit',
    items: {
        xtype: 'base-form',
        layout:'anchor',
        api: {
            load: RPC.ProgramApi.read,
            submit: RPC.ProgramApi.write
        },
        items: [
            {
                fieldLabel: 'گذرواژه کنونی',
                inputType: 'password',
                emptyText: "",
                name: 'oldPassword',
                allowBlank: false,
                minLength: 6
            }
            ,
            {
                fieldLabel: 'گذرواژه',
                inputType: 'password',
                emptyText: "گذرواژه جدید را وارد نمایید.",
                itmeId: 'password-cmp',
                name: 'password',
                allowBlank: false,
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
                allowBlank:false,
                validateBlank: true
            }
        ]
    },
    buttons: [Ahura.button.SaveForm,Ahura.button.CancelForm]
})