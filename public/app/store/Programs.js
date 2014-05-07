Ext.define('Mehr.store.Programs', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    url: '/program/json-programs?limit=50',
    remoteSort: true,
    sortInfo: {
        direction: 'asc',
        field: 'name'
    },
    reader: new Ext.data.JsonReader({
            root: 'row',
            totalProperty: 'results',
            id: 'program_id'
        },
        ['program_id', 'title', 'program_type', 'subject', 'program_type_txt', 'enrollment_status_txt', 'execution_status_txt', 'enrollment_status', 'execution_status', 'enrolled_count', 'confirmed_count']
    )
});
