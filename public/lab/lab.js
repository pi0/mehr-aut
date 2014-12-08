Mehr.cnst = function (c, v) {
    _.find(Mehr.constants, function (val) {
        if (val['c'] == c && val['v'] == v) {
            return val[t];
        }
    })
};