var entityColumns = [
    {
        xtype: 'actioncolumn',
        header:'مدیریت',
        width: 30,
        items: [
            {
                icon: icon('gear'),                // Use a URL in the icon config
                tooltip: 'مدیریت نهاد',
                handler: function (grid, rowIndex, colIndex) {
                    Ext.create('Mehr.view.entity.Info');
                }
            }
        ]

    },
    {
        header: "نوع",
        dataIndex: "type"
    },
    {
        header: "عنوان",
        dataIndex: "title",
        flex:1
    },
    {
        header: "مخاطبان",
        dataIndex: "program_type_txt"
    },
    {
        header: "اعضاء",
        dataIndex: "confirmed_count",
    }];
Ext.define("Mehr.view.entity.Grid", {
    extend: "Ahura.grid.Base",
    xtype: "entityGrid",
    columns: entityColumns,
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
    store: [
        [1, 2, 3.4, 4, 5, 6, 7]
    ]

//    view: new Ext.grid.GroupingView(),


});

Ext.define("Mehr.view.entity.List", {
    extend: "Ahura.window.Grid",
    title: 'نهاد‌ها',
    items: [
        {xtype: 'entityGrid'}
    ]
});
