var columns=[
    {
        header:"عنوان",
        dataIndex:"title",
        sortable:true
    }
    ,
    {
        header:"نوع",
        dataIndex:"plan_type",
        sortable:true
    }
    ,
    {
        header:"موضوع",
        dataIndex:"subject",
        sortable:true
    }
    ,
    {
        header:"وضعیت",
        dataIndex:"status",
        sortable:true
    }

];
Ext.define("Mehr.view.plan.Grid", {
    extend: "Ext.grid.Panel",
    alias: "widget.plansGrid",
    columns: columns,
    loadMask: true,
    clicksToEdit: 1,
    autoExpandColumn: "title",

    //    sm:new Ext.grid.RowSelectionModel({
    //        singleSelect:true,
    //        listeners:{
    //            rowselect:{
    //                fn:function(sm,i,r)
    //                {
    //                    //department_id=r.data['college_id'];
    //                    // if(dormitory_id!='')
    //                    location.href="/plan/plan-info?plan_id="+r.data['plan_id'];
    //                }
    //            }
    //        }
    //    }),
//    store: 'Mehr.store.Plans',

//    view: new Ext.grid.GroupingView(),
    defaults: {
        sortable: true
    },
    bbar: new Ext.PagingToolbar({
        pageSize: 50,
        displayInfo: true,
        displayMsg: 'نمایش موارد {0} - {1} از {2}',
        emptyMsg: "موردی یافت نشد.",
        store: Mehr.store.Plans
    })
});

Ext.define("Mehr.view.plan.Window", {
    rtl: true,
    extend: "Ext.window.Window",
    alias: "widget.plans",
    layout: 'fit',
    height: 400,
    width: 900,
    title: 'طرح‌ها',
    autoShow:true,
//    closeAction:'hide',
    items: [
        {xtype: 'plansGrid'}
    ]
});
