<?php

/**
 * Created by PhpStorm.
 * User: Reza
 * Date: 6/3/14
 * Time: 5:04 PM
 */
class Calendar extends DateTime
{
    const PERSIAN_EPOCH = 1948321;
    const GREGORIAN = 'gregorian';
    const JULIAN = 'julian';
    const JEWISH = 'jewish';
    const FRENCH = 'french'; //year should be between 1 and 14
    const SOLAR_HIJRI = 'shamsi';
    const LUNAR_HIJRI = 'hijri';
    public $type;


    public function __construct($time = null, $sourceCalendarType = null, $timeZone = null)
    {
        if ($time && $sourceCalendarType && 'gregorian' !== $sourceCalendarType) {
            // split a string date to an array
            preg_match('#(\d+)[^\d]+(\d+)[^\d]+(\d+)(.*)#', $time, $parts);
            list($match, $y, $m, $d, $t) = $parts;
            if ($sourceCalendarType === 'shamsi') {
                $time = jdtogregorian(self::shamsitojd($m, $d, $y));
            } elseif ($sourceCalendarType === 'julian') {
                $jd = juliantojd($m, $d, $y);
                $time = jdtogregorian(juliantojd($m, $d, $y));
            } elseif ($sourceCalendarType === 'jewish') {
                $time = jdtogregorian(jewishtojd($m, $d, $y));
            } elseif ($sourceCalendarType === 'french') {
                $time = jdtogregorian(frenchtojd($m, $d, $y));
            } else {
            }
        }
        parent::__construct($time, $timeZone);
    }



    /**
     * Returns date formatted according to given format.
     * @param string $format
     * @param string $calender
     * @return string
     * @link http://php.net/manual/en/datetime.format.php
     */
    public function formatCal ($format,$calendar) {}

    /**
     * this is a clone of the internal php function date()
     * with a few exceptions in the acceptable parameters
     *
     * These are the supported formats from php.date():
     * a: Lowercase Ante meridiem and Post meridiem      am or pm
     * A: Uppercase Ante meridiem and Post meridiem     AM or PM
     * d: days from 01 to 31
     * D: days --short-- from ش to آ
     * j: days from 1 to 31
     * l (lowercase 'L'): days from شنبه to آدینه
     * N: number of day in week from 1 (شنبه) to 7 (آدینه)
     * w: number of day in week
     * S: month days from یکم to سی و یکم
     *    this is slightly different from php.date()!
     * z: day in the year
     * W: week in the year
     * F: Month name from قروردین to اسفند
     * m: Month number from 01 to 12
     * M: month from فرو to اسف
     * n: Month number from 1 to 12
     * Y: full year numeric representation -- 4 digit
     * y: year numeric representation -- 2 digit
     * g: 12-hour format of an hour without leading zeros     1 through 12
     * G: 24-hour format of an hour without leading zeros     0 through 23
     * h: 12-hour format of an hour with leading zeros     01 through 12
     * H: 24-hour format of an hour with leading zeros     00 through 23
     * i: Minutes with leading zeros     00 to 59
     * s: Seconds, with leading zeros     00 through 59
     * T: Timezone abbreviation     Examples: EST, MDT ...
     * U: Seconds since the Unix Epoch See also time()
     * L: whether it's a leap year
     * I: (capital i) Whether or not the date is in daylight saving time 1 if
     *    Daylight Saving Time, 0 otherwise.
     * O: Difference to Greenwich time (GMT) in hours     Example: +0200
     * P: Difference to Greenwich time (GMT) with colon
     *    between hours and minutes (added in PHP 5.1.3)
     * Z: Timezone offset in seconds. The offset for timezones west of UTC is
     *    always negative, and for those east of UTC is always positive.
     *    -43200 through 50400
     * c: ISO 8601 date (added in PHP 5)     2004-02-12T15:19:21+00:00
     * r: » RFC 2822 formatted date    Example: Thu, 21 Dec 2000 16:01:07 +0200
     * e: Timezone identifier (added in PHP 5.1.0) Examples: GMT, Atlantic/Azores
     *
     * The following identifiers are not available:
     * t: number of days in the given month
     * o: year number
     * B: Swatch Internet time     000 through 999
     * u: Microseconds (added in PHP 5.2.2)     Example: 54321
     * @param string $format
     * @param int $timestamp the unix-type timestamp to be used for output
     * @param boolean $decorate if true function decorate is used for chanhing
     *        the face of output. if false the normal face of output is returned.
     *        for numbers false returns number, true returns string.
     * @access public
     * @return mixed
     */
    public function format($format, $timestamp = 0, $decorate = true)
    {
        if ($timestamp) {
            $this->_timestamp = $timestamp;
        }
        $this->_date();
        $format = str_replace("a", ($this->_hour <= 12 ? "ق.ظ" : "ب.ظ"), $format);
        $format = str_replace("A", ($this->_hour <= 12 ? "ق.ظ" : "ب.ظ"), $format);
        $format = str_replace("d", str_pad($this->_day, 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace(
            "D", $this->dayShortName(
                $this->dayOfWeek($this->_year, $this->_dayOfYear)
            ), $format
        );
        $format = str_replace("j", $this->_day, $format);
        $format = str_replace("l", $this->dayName(
                $this->dayOfWeek($this->_year, $this->_dayOfYear)), $format
        );
        $format = str_replace("N", $this->dayOfWeek($this->_year, $this->_dayOfYear) + 1, $format);
        $format = str_replace("w", $this->dayOfWeek($this->_year, $this->_dayOfYear), $format);
        $format = str_replace("S", $this->monthDayString($this->_day), $format);
        $format = str_replace("z", $this->_dayOfYear, $format);
        $format = str_replace("W", $this->weekOfYear(), $format);
        $format = str_replace("F", $this->monthName($this->_month), $format);
        $format = str_replace("m", str_pad($this->_month, 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace("M", $this->monthShortName($this->_month), $format);
        $format = str_replace("n", $this->_month, $format);
        $format = str_replace("Y", $this->_year, $format);
        $format = str_replace("y", ($this->_year % 100), $format);
        $format = str_replace("g", ($this->_hour % 12), $format);
        $format = str_replace("G", $this->_hour, $format);
        $format = str_replace("h", str_pad(($this->_hour % 12), 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace("H", str_pad($this->_hour, 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace("i", str_pad($this->_minute, 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace("s", str_pad($this->_second, 2, '0', STR_PAD_LEFT), $format);
        $format = str_replace("U", $this->_timestamp, $format);
        $format = str_replace("L", $this->isLeap($this->_year), $format);
        $format = str_replace("Y", $this->_year, $format);
        $format = str_replace("I", $this->_DLS, $format);
        $format = str_replace("O", $this->_GMTDiff, $format);
        $format = str_replace("P", $this->_GMTDiffC, $format);
        $format = str_replace("Z", $this->_timezoneOffset, $format);
        $format = str_replace("c", $this->_year . "-" .
            str_pad($this->_month, 2, '0', STR_PAD_LEFT) . "-" .
            str_pad($this->_day, 2, '0', STR_PAD_LEFT) . "ز" .
            str_pad($this->_hour, 2, '0', STR_PAD_LEFT) . ":" .
            str_pad($this->_minute, 2, '0', STR_PAD_LEFT) . ":" .
            str_pad($this->_second, 2, '0', STR_PAD_LEFT) .
            $this->_GMTDiffC, $format);
        $format = str_replace("r",
            $this->dayShortName(
                $this->dayOfWeek($this->_year, $this->_dayOfYear)
            ) . "، " .
            $this->_day . " " .
            $this->monthShortName($this->_month) . " " .
            $this->_year . " " .
            $this->_hour . ":" .
            $this->_minute . ":" .
            $this->_second .
            $this->_GMTDiff, $format);
        $format = str_replace("T", $this->_timeZoneAbb, $format);
        $format = str_replace("e", $this->_timeZone, $format);

        if ($decorate) {
            return self::ParsiNumbers($format);
        } else {
            return $format;
        }
    }

    static function shamsitojd($month, $day, $year)
    {
//        var epbase, epyear;

        $epbase = $year - (($year >= 0) ? 474 : 473);
        $epyear = 474 + $epbase % 2820;

        return $day +
        (($month <= 7) ?
            (($month - 1) * 31) :
            ((($month - 1) * 30) + 6)
        ) +
        floor((($epyear * 682) - 110) / 2816) +
        ($epyear - 1) * 365 +
        floor($epbase / 2820) * 1029983 +
        (self::PERSIAN_EPOCH - 1);
    }
}

//2456435
//echo Calendar::SolarHijriToJd(1392, 3, 1);
$t = new Calendar('1393-3-20', 'shamsi');
echo $t->format(DateTime::ISO8601).PHP_EOL;
 echo $t->getTimestamp();
echo $t->format(DateTime::ISO8601);
//
//$today = unixtojd(mktime(0, 0, 0, 8, 16, 2003));
//print_r(cal_from_jd($today, CAL_GREGORIAN));
//$d=cal_days_in_month(CAL_GREGORIAN,10,2005);
//echo "There was $d days in October 2005";
//echo cal_days_in_month(CAL_JULIAN,10,2005);
////print_r(cal_info());
//preg_match('#(\d+)[^\d]+(\d+)[^\d]+(\d+)([^\d].*)#u', '12 13 13', $part);
//var_dump($part);
//echo jdtogregorian(2456812.5+.5);
//echo jdtogregorian(2426423);
//echo 12%5;