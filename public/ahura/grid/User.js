Ext.require("Ext.ux.form.SearchField");

var columns = [
    {
        xtype: 'actioncolumn',
        alt: "54",
        width: 20,
        items: [
            {
                icon: icon('userEdit'),
                tooltip: 'ویرایش کاربر',
                handler: function (grid, rowIndex, colIndex) {
                    var id = grid.getStore().getAt(rowIndex).getId();
                    var panel = Ext.create('Mehr.view.user.Edit');
                    panel.down('form').getForm().load({params: {id: id}});
                }
            }
        ]    },
    {
        header: "# دانشجوی",
        dataIndex: "sid",
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if ('f' == record.get('sex'))
                return  '<span style="color:red;">' + value + '</span>';
            else if ('m' == record.get('sex'))
                return  '<span style="color:blue;">' + value + '</span>';
            return value;

        }

    },
    {
        header: "نام",
        dataIndex: "firstName"

    },
    {

        header: "نام خانوادگی",
        dataIndex: "lastName",
        flex: 1
    },
    {
        width: 40,
        header: "جنسیت",
        dataIndex: "sex",
        hidden: true,
        renderer: function (val) {
            if (val == 'm')return 'مذکر'; else return 'مونث';
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
//    {
//
//        header: "نقش",
//        dataIndex: "userTypeText"
//    },
    {

        header: "رشته",
        flex: 1,
        dataIndex: "disciplineTitle"
    },
    {

        header: "مقطع",
        dataIndex: "degreeTitle",
        width: 150
    },
    {
        header: "دوره",
        dataIndex: "courseTitle",
        width: 50
    }
];
Ahura.userColumns = columns;
var tbar = [
    {
        width: 400,
        fieldLabel: 'جستجو',
        labelWidth: 50,
        xtype: 'searchfield',
        emptyText: 'نام، #دانشجوی، #ملی',
//        store:'User'

    }
//    {
//        xtype: 'button',
////            text: 'جستجو',
//        icon: icon('zoom'),
//        handler: function () {
//            var query = this.up().down('textfield').getValue();
//            this.up('window').down('grid').getStore().load({params: {
//                query: query
//            }});
//            this.up('window').down('grid').getStore().getProxy().setExtraParams = {'query': query, 'start': 0};
////                this.up('window').down('grid').getStore().reload();
//        }
//    },
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
];

Ext.define("Ahura.grid.User", {
    extend: "Ahura.grid.Base",
    alias: "widget.users-grid",
    initComponent: function () {
        var me = this;
        me.store = "User";
        me.columns = columns;
        me.tbar = tbar;
        me.tbar.store = 'User';
        me.callParent(arguments);
        me.down('pagingtoolbar').bindStore(me.store);
    }
});
//        me.down('searchfield').bindStore('User');
