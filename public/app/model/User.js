Ext.define('Mehr.model.User', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'direct',
//        paramsAsHash: true,
        api: {
            read: 'RPC.UserApi.read',
            destroy: 'RPC.UserApi.destroy',
            create: 'RPC.UserApi.create'
        }
    },
    fields: ['id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'address', 'phone', 'mobile', 'email', 'role_id', 'birthdayDate', 'zip', 'provinceId', 'departmentId', 'startTerm', 'endTerm', 'religion', 'dormitory_al', 'active', 'user_type', 'job_title', 'countryId', 'nationality']
});