Ext.define("Mehr.view.user.Grid", {
    extend: "Ahura.grid.User",
    alias: "widget.usersList"
});

Ext.define("Mehr.view.user.List", {
    extend: "Ahura.window.Grid",
    alias: "widget.usersW",
    title: 'کاربران',
    items: [
        {xtype: 'usersList'}
    ],
    buttons:[
        {
            'text': 'اکسل'
        },
        {
            xtype: 'splitbutton',
            'text': 'چاپ',
            menu: [
                {
                    text: 'چاپ این صفحه',
                    handler: function () {
                        Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                    }
                },
                {
                    text: 'چاپ همه صفحات',
                    handler: function () {
                        Ext.create('Mehr.view.council.Edit', {isNew: true, info: this.up('window').info});
                    }
                }
            ]}


    ]
});