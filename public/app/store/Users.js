Ext.define('Mehr.store.Users', {
    extend: 'Ext.data.Store',
    type:'json',
    model: 'Mehr.model.User',
    storeId:"users",
    autoLoad: true,
    proxy:{
        type:"ajax",
        actionMethods:"POST",
//        url:'/admin/json-users?limit=50',
        reader:{
            type:'json',
            root:'row',
            totalProperty: 'results'
        }
    },
    pageSize:50
});