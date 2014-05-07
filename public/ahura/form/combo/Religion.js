Ext.define("Ahura.form.combo.Religion",{
    xtype:'religion-combo',
    extend:"Ahura.form.combo.Local",
    name:"level",
    fieldLabel: 'دین',
    labelWidth:50,
    store: ['مسلمان (مذهب نامشخص)','مسلمان (اهل تشیع)', 'مسلمان (اهل تسنن)', 'ارمنی/مسیحی', 'کلیمی/یهودی', 'زرتشتی', 'دیگر','نامشخص']

});
