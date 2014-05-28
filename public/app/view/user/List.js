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
    ]
});