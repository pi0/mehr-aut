Ext.define('Mehr.store.Program', {
    extend: 'Ahura.store.Direct',
    fields: [
        "id",
        "name",
        "manager",
        "type",
        "typeText",
        "cDate",
        "enrollmentStartDate",
        "enrollmentEndDate",
        "enrollmentMethod",
        'executionStatusText',
        'enrollmentStatusText',
        'enrollmentStatus',
        'executionStatus',
        "minCapacity",
        "maxCapacity",
        "cost",
        "paymentMethod",
        "level",
        "details",
        "subject",
        "subjectText",
        "audienceLevel",
        "audience",
        "executionFromDate",
        "executionToDate",
        "planId",
        "sessions",
        "enrollerCount",
        'entityFullName'
    ],
    constructor: function () {
        this.callParent(arguments);
        this.getProxy().api.read = RPC.ProgramApi.read;
    }
});
