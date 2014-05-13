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
                icon: icon('group_add'),                // Use a URL in the icon config
                tooltip: 'مدیریت نام نوشتگان',
                handler: function (grid, rowIndex, colIndex) {
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
        header: "عنوان",
        dataIndex: "title",
        sortable: true
    },
    {
        header: "شمار نام‌نوشته‌گان",
        dataIndex: "enrolled_count",
        sortable: true
    }
    ,
    {
        header: "شمار نام‌نوشتگاه قطعی",
        dataIndex: "confirmed_count",
        hidden: true,
        sortable: true
    }
    ,
    {
        header: "نوع",
        dataIndex: "program_type_txt",
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
            if (0 == record.get('enrollment_status'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('enrollment_status'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('enrollment_status'))
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
            if (0 == record.get('execution_status'))
                return  '<span style="font-weight:bold;color:red;">' + value + '</span>';
            if (-1 == record.get('execution_status'))
                return  '<span style="font-weight:bold;color:blue;">' + value + '</span>';
            if (1 == record.get('execution_status'))
                return  '<span style="color:green;">' + value + '</span>';
            return value;

        }
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
//    store: 'Mehr.store.Programs',
    store:[
        [1,2,3.4,4,5,6,7]
    ],

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
