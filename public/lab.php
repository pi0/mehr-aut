<script type="text/javascript" src="vendor/ext/ext-all-rtl-dev.js"></script>
<script type="text/javascript">
    Ext.define('User', {
        extend: 'Ext.data.Model',
        proxy: {
            type: 'memory',
            data: [
                {id: 2, lastName: 'reza'}
            ]
        },
        fields: ['id', 'firstName', 'lastName', 'nid', 'sid', 'sex', 'address', 'phone', 'mobile', 'email', 'role_id', 'birthdayDate', 'zip', 'provinceId', 'departmentId', 'startTerm', 'endTerm', 'religion', 'dormitory_al', 'active', 'user_type', 'job_title', 'countryId', 'nationality']
    });
    Ext.define('Users', {
            extend: 'Ext.data.Store',
            model: 'User'
        }
    );

</script>