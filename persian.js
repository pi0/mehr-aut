/*  PERSIANA_YEAR  --  Determine the year in the Persian
 astronomical calendar in which a
 given Julian day falls.  Returns an
 array of two elements:

 [0]  Persian year
 [1]  Julian day number containing
 equinox for this year.
 */

function mod(a, b)
{
    return a - (b * Math.floor(a / b));
}

var PERSIAN_EPOCH = 1948320.5;
var PERSIAN_WEEKDAYS = new Array("Yekshanbeh", "Doshanbeh",
    "Seshhanbeh", "Chaharshanbeh",
    "Panjshanbeh", "Jomeh", "Shanbeh");

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

/*  JD_TO_PERSIANA  --  Calculate date in the Persian astronomical
 calendar from Julian day.  */

function jd_to_persiana(jd) {
    var year, month, day,
        adr, equinox, yday;

    jd = Math.floor(jd) + 0.5;
    adr = persiana_year(jd);
    year = adr[0];
    equinox = adr[1];
    day = Math.floor((jd - equinox) / 30) + 1;

    yday = (Math.floor(jd) - persiana_to_jd(year, 1, 1)) + 1;
    month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
    day = (Math.floor(jd) - persiana_to_jd(year, month, 1)) + 1;

    return new Array(year, month, day);
}

/*  PERSIANA_TO_JD  --  Obtain Julian day from a given Persian
 astronomical calendar date.  */

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

/*  LEAP_PERSIANA  --  Is a given year a leap year in the Persian
 astronomical calendar ?  */

function leap_persiana(year) {
    return (persiana_to_jd(year + 1, 1, 1) -
        persiana_to_jd(year, 1, 1)) > 365;
}

//  LEAP_PERSIAN  --  Is a given year a leap year in the Persian calendar ?

function leap_persian(year) {
    return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
}

//  PERSIAN_TO_JD  --  Determine Julian day from Persian date

function persian_to_jd(year, month, day) {
    var epbase, epyear;

    epbase = year - ((year >= 0) ? 474 : 473);
    epyear = 474 + mod(epbase, 2820);

    return day +
        ((month <= 7) ?
            ((month - 1) * 31) :
            (((month - 1) * 30) + 6)
            ) +
        Math.floor(((epyear * 682) - 110) / 2816) +
        (epyear - 1) * 365 +
        Math.floor(epbase / 2820) * 1029983 +
        (PERSIAN_EPOCH - 1);
}

//  JD_TO_PERSIAN  --  Calculate Persian date from Julian day

function jd_to_persian(jd) {
    var year, month, day, depoch, cycle, cyear, ycycle,
        aux1, aux2, yday;


    jd = Math.floor(jd) + 0.5;

    depoch = jd - persian_to_jd(475, 1, 1);
    cycle = Math.floor(depoch / 1029983);
    cyear = mod(depoch, 1029983);
    if (cyear == 1029982) {
        ycycle = 2820;
    } else {
        aux1 = Math.floor(cyear / 366);
        aux2 = mod(cyear, 366);
        ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
            aux1 + 1;
    }
    year = ycycle + (2820 * cycle) + 474;
    if (year <= 0) {
        year--;
    }
    yday = (jd - persian_to_jd(year, 1, 1)) + 1;
    month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
    day = (jd - persian_to_jd(year, month, 1)) + 1;
    return new Array(year, month, day);
}