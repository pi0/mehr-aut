Ext.define("Ahura.form.combo.SID",{
    extend:"Ahura.form.combo.Local",
//    queryMode:'remote',
    xtype:'sid-combo',
    fieldLabel: "# دانشجویی",
    name: 'student_id',
    anchor: '90%',
    store:[
        ['90131004','ناصر ناصری'],
        ['90131003','رضا سالارمهر'],
        ['90131002','حسن حسنی'],
    ]

});
