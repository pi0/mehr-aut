Ext.define('Mehr.model.News', {
    extend: 'Ext.data.Model',
    fields: ['id','title','subject','name','desc'],
    proxy: {
        type: 'direct',
        api: {
            read: 'RPC.NewsApi.read',
            destroy: 'RPC.NewsApi.destroy',
            create: 'RPC.NewsApi.create',
            update: 'RPC.NewsApi.create'
        }
    }
});