Ext.define('Mehr.model.User', {
    extend: 'Ext.data.Model',
    idProperty:'user_id',
    fields: ['use_id','student_id','first_name','last_name','sex','role_id','discipline_title','course_title','degree_title','user_type_text']
    proxy:{
        type:"ajax",
        url:'/admin/json-users?limit=50',
        reader:{
            type:'json',
            root:'row',
            totalProperty: 'results'
        }
    }

});