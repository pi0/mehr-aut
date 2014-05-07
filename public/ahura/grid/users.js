Ext.require("Ext.ux.form.SearchField");
var columns = [
    {
        xtype: 'actioncolumn',
        alt: "54",
        width: 20,
        items: [
            {
                icon: icon('user_edit'),
                tooltip: 'ویرایش کاربر',
                handler: function (grid, rowIndex, colIndex) {
                    var w = Ext.create("Mehr.view.user.Edit");
                }
            }
        ]    }    ,
    {
        width: 20,
        sortable: true,
        header: "جنسیت",
        dataIndex: "sex",
        renderer: function (val) {
            if (val == 'm')return 'مرد'; else return 'زن';
        }
    },
    {
        header: "# دانشجوی",
        dataIndex: "student_id",
        sortable: true
    },


    {
        header: "نام",
        dataIndex: "first_name",
        sortable: true
    },

    {

        header: "نام خانوادگی",
        dataIndex: "last_name"
    },


//        {
//            header:"نقش",
//            dataIndex:"role_id",
//            renderer:function(val){
//                if (val!='-1')return 'استاد/مربی' ;else return 'دانشجو';
//            }
//        }
//        ,

    {

        header: "نقش",
        dataIndex: "user_type_text"
    }
    ,
    {

        header: "رشته",
        flex: 1,
        dataIndex: "discipline_title"
    }
    ,

    {

        header: "مقطع",
        dataIndex: "degree_title",
        width: 150
    }
    ,

    {

        header: "دوره",
        dataIndex: "course_title",
        width: 50
    }
];

Ext.define("Ahura.grid.Users", {
    rtl: true,
    extend: "Ahura.grid.Base",
    xtype: "users-grid",
    columns: columns,
//    store: "Users",
    store: ['3']
});