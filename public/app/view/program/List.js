var columns = [
    {
        xtype: 'actioncolumn',
        alt: "54",
        width: 50,
        items: [
            {
                icon: icon('pencil'),                // Use a URL in the icon config
                tooltip: 'ویرایش برنامه',
                handler: function (grid, rowIndex, colIndex) {
                    var id = grid.getStore().getAt(rowIndex).data.id;
                    var panel = Ext.create('Mehr.view.program.Edit');
                    panel.down('form').getForm().load({params: {id: id}});
//                    Ext.create('Mehr.view.program.Edit').down('form').getForm().load({params: {'id': id}});
//                    var rec = Mehr.store.Programs.getAt(rowIndex);
//                    Mehr.v.program_id = rec.get('program_id');
//                    Mehr.formPanel.ProgramEdit.load({
//                        url: '/admin/json-Get-Programe',
//                        params: {
//                            program_id: Mehr.v.program_id
//                        },
//                        failure: function (form, action) {
//                            Ext.Msg.alert("Load failed", action.result.errorMessage);
//                        }
//                    });
//                    Mehr.window.ProgramEdit.show();
                }
            },
            {
                icon: icon('groupAdd'),                // Use a URL in the icon config
                tooltip: 'مدیریت نام نوشتگان',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.create('Mehr.view.program.Enrollers');
//                    var rec = Mehr.store.Programs.getAt(rowIndex);
//                    Mehr.v.program_id = rec.get('program_id');
//                    Mehr.store.Enrollers.load({params: {program_id: Mehr.v.program_id}
//                    });
//                    Mehr.window.Enrollers.show();
                }
            }
        ]

    },
    {
        flex: 1,
        header: "عنوان",
        dataIndex: "name",
        sortable: true
    },
    {
        header: "شمار نام‌نوشتگاه قطعی",
        dataIndex: "confirmedCount",
        hidden: true,
        sortable: true
    }
    ,
    {
        header: "نوع",
        dataIndex: "typeTxt",
        sortable: true
    }
    ,
    {
        header: "موضوع",
        dataIndex: "subject",
        sortable: true
    }
    ,
    {
        header: "وضعیت نام‌نویسی",
        dataIndex: "enrollment_status_txt",
        sortable: true,
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if (0 == record.get('enrollmentStatus'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('enrollmentStatus'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('enrollmentStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return value;

        }
    }
    ,
    {
        header: "وضعیت اجرا",
        dataIndex: "execution_status_txt",
        sortable: true,
        renderer: function (value, metaData, record, rowIndex, colIndex, store) {
            if (0 == record.get('executionStatus'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('executionStatus'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('executionStatus'))
                return  '<span style="color:green;">' + value + '</span>';
            return value;

        }
    },
    {
        header: "شمار نام‌نوشته‌گان",
        dataIndex: "enrolledCount",
        sortable: true
    }

];
Ext.define("Mehr.view.program.Grid", {
    extend: "Ahura.grid.Base",
    xtype: "programsGrid",
    columns: columns,
    //    sm:new Ext.grid.RowSelectionModel({
    //        singleSelect:true,
    //        listeners:{
    //            rowselect:{
    //                fn:function(sm,i,r)
    //                {
    //                    //department_id=r.data['college_id'];
    //                    // if(dormitory_id!='')
    //                    location.href="/program/program-info?program_id="+r.data['program_id'];
    //                }
    //            }
    //        }
    //    }),
    reader: {
        type: 'json',
        root: 'data',
        totalProperty: 'total'
    },
    store: 'Program'
//    view: new Ext.grid.GroupingView(),


});
Ext.define("Mehr.view.program.List", {
    extend: "Ahura.window.Grid",
    alias: "widget.programs",
    title: 'برنامه‌ها',
    items: [
        {xtype: 'programsGrid'}
    ]
});
