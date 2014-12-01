Ext.define('Mehr.model.User',
    {
        extend: 'Ext.data.Model',
        proxy: {
            type: 'direct',
            api: {
                read: 'RPC.UserApi.read',
                destroy: 'RPC.UserApi.destroy',
                create: 'RPC.UserApi.create'
            }
        },
        fields: [
            'id',
            'username',
            'password',
            'firstName',
            'lastName',
            'nid',
            'fatherName',
            'sex',
            'sid',
            'birthdayDate',
            'cDate',
            'lastLoginDate',
            'source',
            'sourceId',
            'address',
            'phone',
            'mobile',
            'email',
            'email2',
            'role',
            'zip',
            'province',
            'department',
            'degree',
            'course',
            'startTerm',
            'endTerm',
            'religion',
            'dormitory',
            'active',
            'level',
            'typeText',
            'nationality',
            'lastUniversity',
            'lastDegree',
            'lastDepartment'
        ]
    });



Ext.define('Mehr.store.User', {
        extend: 'Ahura.store.Direct',
        storeId:'userStore',
        model: 'Mehr.model.User',
        constructor: function () {
            this.callParent(arguments);
            this.getProxy().api.read = RPC.UserApi.read;
        }}
);