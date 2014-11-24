var columns=[
    {
        header:"عنوان",
        dataIndex:"title",
        flex:1,
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
    extend: "Ahura.grid.Base",
    alias: "widget.plansGrid",
    columns: columns,
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

});

Ext.define("Mehr.view.plan.Window", {
    rtl: true,
    extend: "Ahura.window.Grid",
    alias: "widget.plans",
    height: 400,
    width: 900,
    title: 'طرح‌ها',
    items: [
        {xtype: 'plansGrid'}
    ]
});
