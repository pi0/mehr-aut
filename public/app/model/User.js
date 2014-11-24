Ext.define('Mehr.model.User',
    {
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

