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
    {
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
    },
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
        sortable: true,
        header: "نام خانوادگی",
        dataIndex: "last_name"
    },

    {
        sortable: true,
        header: "جنسیت",
        dataIndex: "sex",
        width: 50,
        renderer: function (val) {
            if (val == 'm')return 'مرد'; else return 'زن';
        }
    },
    {
        sortable: true,
        header: "رشته",
        dataIndex: "discipline_title"
    }
    ,

    {
        sortable: true,
        header: "مقطع",
        dataIndex: "degree_title",
        width: 150
    }
    ,

    {
        sortable: true,
        header: "دوره",
        dataIndex: "course_title",
        width: 70
    }


];
Ext.define("Mehr.view.program.EnrollersGrid", {
    extend: "Ext.grid.Panel",
    alias: "widget.enrollersGrid",
    columns: columns,
    loadMask: true,
//    view: new Ext.grid.GroupingView(),
    frame: false,
    width: 900,
    height: 400,
//    store: Mehr.store.Enrollers,
    defaults: {
        sortable: true
    },
    tbar: [
        'افزودن (شماره دانشجویی): ', ' ',
        {
            xtype:'combo',
//            id:"user_combobox_field",
            forceSelection:true,
            width:200,
            displayField:'full_name',
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
            icon: icon('user_add'),
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

    bbar: new Ext.PagingToolbar({
        pageSize: 50,
        displayInfo: true,
        displayMsg: 'نمایش موارد {0} - {1} از {2}',
        emptyMsg: "موردی یافت نشد.",
        store: Mehr.store.Enrollers
    })

});


Ext.define("Mehr.view.program.EnrollersWindow", {
    rtl: true,
    extend: "Ext.window.Window",
    alias: "widget.enrollers",
    height: 400,
    width: 800,
    title: 'نام نوشتگان',
//    title:'نام نوشتگان)برنامه:'+Mehr.v.program_id+"(",
    items: [
        Ext.create("Mehr.view.program.EnrollersGrid")
    ]
})

