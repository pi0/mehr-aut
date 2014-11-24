/*  PERSIANA_TO_JD  --  Obtain Julian day from a given Persian
 astronomical calendar date.  */

function mod(a, b)
{
    return a - (b * Math.floor(a / b));
}
function persiana_year(jd) {
    var guess = jd_to_gregorian(jd)[0] - 2,
        lasteq, nexteq, adr;

    lasteq = tehran_equinox_jd(guess);
    while (lasteq > jd) {
        guess--;
        lasteq = tehran_equinox_jd(guess);
    }
    nexteq = lasteq - 1;
    while (!((lasteq <= jd) && (jd < nexteq))) {
        lasteq = nexteq;
        guess++;
        nexteq = tehran_equinox_jd(guess);
    }
    adr = Math.round((lasteq - PERSIAN_EPOCH) / TropicalYear) + 1;

    return new Array(adr, lasteq);
}

function persiana_to_jd(year, month, day) {
    var adr, equinox, guess, jd;

    guess = (PERSIAN_EPOCH - 1) + (TropicalYear * ((year - 1) - 1));
    adr = new Array(year - 1, 0);

    while (adr[0] < year) {
        adr = persiana_year(guess);
        guess = adr[1] + (TropicalYear + 2);
    }
    equinox = adr[1];

    jd = equinox +
        ((month <= 7) ?
            ((month - 1) * 31) :
            (((month - 1) * 30) + 6)
            ) +
        (day - 1);
    return jd;
}

function jd_to_gregorian(jd) {
    var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
        yindex, dyindex, year, yearday, leapadj;

    wjd = Math.floor(jd - 0.5) + 0.5;
    depoch = wjd - GREGORIAN_EPOCH;
    quadricent = Math.floor(depoch / 146097);
    dqc = mod(depoch, 146097);
    cent = Math.floor(dqc / 36524);
    dcent = mod(dqc, 36524);
    quad = Math.floor(dcent / 1461);
    dquad = mod(dcent, 1461);
    yindex = Math.floor(dquad / 365);
    year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
    if (!((cent == 4) || (yindex == 4))) {
        year++;
    }
    yearday = wjd - gregorian_to_jd(year, 1, 1);
    leapadj = ((wjd < gregorian_to_jd(year, 3, 1)) ? 0
        :
        (leap_gregorian(year) ? 1 : 2)
        );
    month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
    day = (wjd - gregorian_to_jd(year, month, 1)) + 1;

    return new Array(year, month, day);
}
function gregorian_to_jd(year, month, day) {
    return (GREGORIAN_EPOCH - 1) +
        (365 * (year - 1)) +
        Math.floor((year - 1) / 4) +
        (-Math.floor((year - 1) / 100)) +
        Math.floor((year - 1) / 400) +
        Math.floor((((367 * month) - 362) / 12) +
            ((month <= 2) ? 0 :
                (leap_gregorian(year) ? -1 : -2)
                ) +
            day);
}
var PERSIAN_EPOCH = 1948320.5;
var GREGORIAN_EPOCH = 1721425.5;
TropicalYear      = 365.24219878;           // Mean solar tropical year
persiana_to_jd(1393,3,14);