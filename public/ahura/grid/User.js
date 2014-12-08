(function () {
    var columns = [
        {
            xtype: 'actioncolumn',
            alt: "54",
            width: 20,
            items: [
                {
                    icon: icon('userEdit'),
                    tooltip: 'ویرایش کاربر',
                    handler: function (grid, rowIndex, colIndex, item, e, record) {
                        var id = record.getId();
                        openUserEditWindow(id);
                    }
                }
            ]
        },
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
        {

            header: "نوع‌",
            dataIndex: "typeText"
        },
        {

            header: "رشته",
            flex: 1,
            dataIndex: "disciplineTitle"
        },
        {

            header: "مقطع",
            dataIndex: "degreeTitle",
            hidden: true,
            width: 150
        },
        {
            header: "دوره",
            hidden: true,
            dataIndex: "courseTitle",
            width: 50
        }
    ];
    Ahura.userColumns = columns;
    var tbar = [
        {
            width: 400,
            fieldLabel: 'جستجو',
            xtype: 'searchfield',
            emptyText: 'نام، #دانشجوی، #ملی',
            store: 'User'
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
        menu: [
            {
                icon: icon('userEdit'),
                text: 'ویرایش کاربر',
                handler: function () {
                    openUserEditWindow(this.up().rowId);
                }

            },
            {
                text: 'پرونده فرهنگی',
                menu: [
                    {
                        text: 'برنامه‌ها',
                        handler: function () {
                            var row = this.up().up().model;
                            var grid = this.up().up().grid;
                            var programs = Ext.create('Mehr.view.program.List', {
                                info: {
                                    title: 'برنامه‌های: ' + Ahura.window.Base.userWindowTitle(row),
                                    row: row
                                }
                            });
                        }

                    },
                    {
                        text: 'عضویت‌ها',
                        handler: function () {
                            var row = this.up().up().model;
                            var grid = this.up().up().grid;
                            var programs = Ext.create('Mehr.view.entity.List', {
                                info: {
                                    title: 'عضویت‌های: ' + Ahura.window.Base.userWindowTitle(row),
                                    row: row
                                }
                            });
                        }

                    },
                    {
                        text: 'شوراها',
                        handler: function () {
                            var row = this.up().up().model;
                            var grid = this.up().up().grid;
                            var programs = Ext.create('Mehr.view.council.List', {
                                info: {
                                    title: 'عضویت‌ها در شورای مرکزی: ' + Ahura.window.Base.userWindowTitle(row),
                                    row: row,
                                    for: 'user'
                                }
                            });
                        }

                    }
                ]
            }
        ],


        initComponent: function () {
            var me = this;
            me.store = "User";
            me.columns = columns;
            me.tbar = tbar;
            me.tbar.store = 'User';
            me.callParent(arguments);
            me.down('pagingtoolbar').bindStore(me.store);
//        me.down('searchfield').store=me.store;
        }
    });

    var openUserEditWindow = function (id) {
        var panel = Ext.create('Mehr.view.user.Edit');
        panel.down('form').getForm().load({params: {id: id}});
    }

})()