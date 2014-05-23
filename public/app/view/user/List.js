Ext.require("Ext.ux.form.SearchField");
var columns = [
    {
        xtype: 'actioncolumn',
        alt: "54",
        width: 20,
        items: [
            {
                icon: icon('userEdit'),                // Use a URL in the icon config
                tooltip: 'ویرایش کاربر',
                handler: function (grid, rowIndex, colIndex) {
//            var rec = users.getAt(rowIndex);
//            user_id=rec.get('user_id');
//            Mehr.formPanel.UserEdit.load({
//                url: '/admin/json-get-user',
//                params: {
//                    user_id: user_id
//                },
//                failure: function(form, action) {
//                    Ext.Msg.alert("Load failed", action.result.errorMessage);
//                }
//            });
                    var w = Ext.create("Mehr.view.user.Edit");
                    w.show();
                }
            }
        ]
    }
    ,
    {
        header: "# دانشجوی",
        dataIndex: "sid",
        sortable: true
    },


    {
        header: "نام",
        dataIndex: "firstName",
        sortable: true
    },

    {
        sortable: true,
        header: "نام خانوادگی",
        dataIndex: "lastName"
    },

    {
        sortable: true,
        header: "جنسیت",
        dataIndex: "sex",
        renderer: function (val) {
            if (val == 'm')return 'مرد'; else return 'زن';
        }
    },

//        {
//            header:"نقش",
//            dataIndex:"role_id",
//            renderer:function(val){
//                if (val!='-1')return 'استاد/مربی' ;else return 'دانشجو';
//            }
//        }
//        ,

    {
        sortable: true,
        header: "نقش",
        dataIndex: "user_type_text"
    }
    ,
    {
        sortable: true,
        header: "رشته",
        flex: 1,
        dataIndex: "disciplineTitle"
    }
    ,

    {
        sortable: true,
        header: "مقطع",
        dataIndex: "degreeTitle",
        width: 150
    }
    ,

    {
        sortable: true,
        header: "دوره",
        dataIndex: "courseTitle",
        width: 50
    }
];

Ext.define("Mehr.view.user.Grid", {
    extend: "Ahura.grid.Users",
    alias: "widget.usersGrid",
//    columns: columns,
    store: "User",
    tbar: [
        {
            width: 400,
            fieldLabel: 'جستجو',
            labelWidth: 50,
            xtype: 'textfield',
            emptyText:'نام، #دانشجوی، #ملی'
        },
        {
            xtype: 'button',
//            text: 'جستجو',
            icon: icon('zoom')
        },
//        {
//            xtype: 'button',
//            text: 'دامنه',
//            icon: icon('funnel-small'),
//            id: 'domain-button',
//            handler: function () {
//                //            Mehr.formPanel.Audiences.getForm().load({url:'/program/json-load-program-audiences'});
//                //            Ext.ComponentMgr.get("audiencesWin").setTitle("دامنه");
//                //            Mehr.window.UserFilter=Ext.extend(Mehr.window.Audiences,{
//                //                title:"دامنه"
//                //            });
//
////            var w=Ext.widget('audiencesW');
////                Ext.create("Mehr.view.audience.Window");
////            w.show('domain-button');
//                //            Mehr.window.UserFilter.show('domain-button');
//                //            Ext.onReady(function(){
//                //
//                //            });
//                //                Mehr.window.Audiences.show('domain-button');
//            }
//        }
    ]
});


Ext.define("Mehr.view.user.List",{
    extend:"Ahura.window.Grid",
    alias:"widget.usersW",
    title:'کاربران',
    items:[
        {xtype:'usersGrid'}
    ]
});