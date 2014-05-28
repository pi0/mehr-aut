var columns = [
    {
        menuDisabled: true,
        header: "",
        xtype: 'actioncolumn',
        icon: icon('user'),
        tooltip: "مشاهده اطلاعات این کاربر",
        width: 22,
        handler: function (g, ri, ci) {
            rec = Mehr.store.Enrollers.getAt(ri);
            window.open("/account/user-info?user_id=" + rec.get('user_id') + "&type=%s", 'user_info_window');
        }
    },
    ,
    {
        header: "# دانشجوی",
        dataIndex: "student_id",
        sortable: true
    },

    {
        header: "نام",
        dataIndex: "first_name",
        sortable: true
    },

    {

        flex: 1,
        header: "نام خانوادگی",
        dataIndex: "last_name"
    },

    {

        header: "جنسیت",
        dataIndex: "sex",
        width: 50,
        renderer: function (val) {
            if (val == 'm')return 'مرد'; else return 'زن';
        }
    },
    {

        header: "رشته",
        dataIndex: "discipline_title"
    }
    ,

    {

        header: "مقطع",
        dataIndex: "degree_title",
        width: 150
    }
    ,

    {

        header: "دوره",
        dataIndex: "course_title",
        width: 70
    }


];
Ext.define("Mehr.view.program.EnrollersGrid", {
    extend: "Ahura.grid.User",
    alias: "widget.enrollersGrid",
    store: [
        []
    ],
//    columns: columns,
    tbar: [
        'افزودن (شماره دانشجویی): ', ' ',
        {
            xtype: 'combo',
//            id:"user_combobox_field",
            forceSelection: true,
            width: 200,
            displayField: 'full_name',
//            valueField:'user_id',
//            store:{
//                url:'/admin/json-Users-Combo',
//                reader: new Ext.data.JsonReader({
//                    fields: ['user_id', 'full_name'],
//                    root: 'data',
//                    params:{
//                        //                    query:Ext.getCmp("user_combobox_field").getValue()
//                    }
//                })
//            }
        },
        {
            xtype: 'button',
            icon: icon('userAdd'),
            tooltip: "افزودن کاربر انتخاب شده",
            handler: function () {
                Ext.Ajax.request({
                        url: "/program/json-Add-User",
                        params: {
                            user_id: Mehr.combo.UsersId.getValue(),
                            program_id: Mehr.v.program_id
                        }
                    }
                );
                Mehr.grid.Enrollers.getStore().reload();

            }
        }
    ],
    initComponent: function () {
        var me = this;
        me.columns=Ext.clone(me.columns);
        var firstCol=me.columns.shift();
        me.columns.unshift({
            menuDisabled: true,
            header: "",
            xtype: 'actioncolumn',
            icon: icon('delete'),
            tooltip: "حدف کاربر از فهرست نام‌نوشته‌گان",
            width: 22,
            handler: function (g, ri, ci) {
                rec = Mehr.store.Enrollers.getAt(ri);
                Ext.Ajax.request({
                        url: '/program/json-unsubscribe-user',
                        params: {
                            user_id: rec.get('user_id'),
                            program_id: Mehr.v.program_id
                        }
                    }
                );
                Mehr.grid.Enrollers.getStore().reload();
            }
        });
        me.columns.unshift(firstCol);
        me.callParent(arguments);
    }
//    bbar: new Ext.PagingToolbar({
//        pageSize: 50,
//        displayInfo: true,
//        displayMsg: 'نمایش موارد {0} - {1} از {2}',
//        emptyMsg: "موردی یافت نشد.",
//        store: Mehr.store.Enrollers
//    })

});


Ext.define("Mehr.view.program.Enrollers", {
    extend: "Ahura.window.Grid",
    alias: "widget.enrollers",
    title: 'نام نوشتگان',
//    title:'نام نوشتگان)برنامه:'+Mehr.v.program_id+"(",
    items: [
        Ext.create("Mehr.view.program.EnrollersGrid")
    ]
})