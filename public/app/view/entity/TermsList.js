Ext.define('Mehr.view.entity.TermsList', {
    extend: 'Ahura.window.Grid',
    height: 300,
    width: 300,
    bbar:null,
    items: [
        Ext.create('Ahura.grid.Base', {
            store: {
                fields:['term','secretary'],
                data:[
                    [1,'رضا سالارمهر'],
                    [2,'رضا سالارمهر']
                ],
                type:'array'
            },
            columns: [
                {
                    width: 30,
                    xtype: 'actioncolumn',
                    items: [
                        {
                            tooltip: 'ویرایش/مشاهده',
                            icon: icon('gear'),
                            handler:function(){
                                Ext.create('Mehr.view.entity.TermEdit');
                            }
                        }
                    ]                },
                {
                    header: 'دوره',
                    width: 30,
                    dataIndex:'term'
                },
                {
                    header: 'دبیر',
                    width: 150,
                    flex:1,
                    dataIndex:'secretary'
                }
            ]

        })
    ]
});
