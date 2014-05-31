Ext.define('Mehr.store.Program', {
    extend: 'Ahura.store.Direct',
//    storeId:'program',
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
        "enrollerCount"
    ],
    constructor: function () {
        this.callParent(arguments);
        this.getProxy().api.read = RPC.ProgramApi.read;
    }
});
