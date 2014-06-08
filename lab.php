<?php
////$time=new DateTime();
//
////
//////echo "before: ", , "\n";
////echo "before: ", $formatter->format($formatter->parse('1393-03-14')), "\n";
////
/////* note that the calendar's locale is not used! */
//
////echo $formatter->parse("2014-50-3 22:00");
////echo "after:  ", $formatter->format($formatter->parse("2014-50-3 02:00")), "\n";
////echo $formatter->getErrorMessage();
////
////echo $time->format('U').' '.time();
//
////function convert($time, $fromCalendar = 'gregorian', $toCalender = 'persian', $fromFormat = 'yyyy-MM-dd HH:mm:ss',
////                 $toFormat = 'yyyy-MM-dd HH:mm:ss', $timezone = null, $local = 'fa_IR')
////{
////    $formatter = IntlDateFormatter::create($local . '@calendar:' . $fromCalendar, null, null, $timezone, null, $fromFormat);
////    $formatter->setCalendar(IntlCalendar::createInstance(null, $local . '@calendar:' . $toCalender));
////    $output = $formatter->format($formatter->parse($time));
////    if ($output) return $output;
////    return $formatter->getErrorMessage();
////}
//
////echo $formatter->parse($time) . PHP_EOL;
////    $output = $formatter->format(strtotime($time));
////echo convert('2014-12-30 15:0:5');
////1419939005
////21023753405
////$formatter = IntlDateFormatter::create("en_US", null, null, null, null, 'yyyy-MM-dd HH:mm:ss');
////echo "after:  ", $formatter->format($formatter->parse("1380-03-03 00:00:00")), "\n";
////echo "after:  ", $formatter->format($formatter->parse("1380-03-03 00:00:00")), "\n";
////
////
//////echo "before: ", $formatter->format($time), "\n";
//////echo $formatter->parse("1380-03-03 00:00:00");
//////$time = strtotime("2013-03-03 00:00:00 UTC");
/////* note that the calendar's locale is not used! */
////
////
////$formatter = IntlDateFormatter::create('fa_IR@', IntlDateFormatter::FULL,
////    IntlDateFormatter::FULL, 'Asia/Tokyo',null,'yy-MM-dd');
//////echo $formatter->format("1392-01-02");
////echo  $formatter->format($formatter->parse('1393-03-14'));
//
//$formatter = IntlDateFormatter::create('en_US@calendar=persian', IntlDateFormatter::FULL,
//    IntlDateFormatter::FULL, 'Asia/Tehran',IntlDateFormatter::TRADITIONAL,'yyyy-MM-dd');
////$formatter->setCalendar(IntlCalendar::createInstance(null, "en_US"));
////$formatter->setCalendar(IntlDateFormatter::GREGORIAN);
////echo $formatter->format($formatter->parse("1392-2-31"));
//echo $formatter->format(['tm_year'=>1392,'tm_mon'=>2,'tm_mday'=>16]);
//echo $formatter->getErrorMessage();
////
////var_dump(getdate());
////var_dump(localtime(time(),true));


$time = IntlCalendar::createInstance("Asia/Tokyo", "en_US@calendar=persian");
$time->set(1392,2,31);

$formatter = IntlDateFormatter::create("en_US@calendar=gregorian",
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'Asia/Tokyo',
    IntlDateFormatter::TRADITIONAL);

//print $formatter->format($time);
//Friday, Shaʻban 13, 1434 AH at 8:52:23 AM Japan Standard Time

$fmt = new IntlDateFormatter(
    'en_US@calendar=persian',
    IntlDateFormatter::SHORT, //date format
    IntlDateFormatter::NONE, //time format
    'Asia/Tokyo',
    IntlDateFormatter::TRADITIONAL
//    'yyyy/MM/dd'
);

$time = $fmt->parse('3/31/1393 AP');

$formatter = IntlDateFormatter::create("en_US@calendar=gregorian",
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'Asia/Tokyo',
    IntlDateFormatter::TRADITIONAL);

print $formatter->format($time);
//Friday, Shaʻban 13, 1434 AH at 8:52:23 AM Japan Standard Time