q-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.12-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             8.3.0.4775
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for mehr2
CREATE DATABASE IF NOT EXISTS `mehr2` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_persian_ci */;
USE `mehr2`;


-- Dumping structure for table mehr2.college
CREATE TABLE IF NOT EXISTS `college` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.college: 2 rows
DELETE FROM `college`;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
INSERT INTO `college` (`id`, `level`, `name`, `cDate`) VALUES
	(1, NULL, 'شیمی', '2014-05-22 13:28:55'),
	(2, NULL, 'نفت', NULL);
/*!40000 ALTER TABLE `college` ENABLE KEYS */;


-- Dumping structure for table mehr2.constant
CREATE TABLE IF NOT EXISTS `constant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `value` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.constant: 91 rows
DELETE FROM `constant`;
/*!40000 ALTER TABLE `constant` DISABLE KEYS */;
INSERT INTO `constant` (`id`, `text`, `value`, `category`) VALUES
	(1, 'عضو عادی', 'member', 'membership'),
	(2, 'دبیر', 'secretary', 'councilMembership'),
	(3, 'عضو شورای مرکزی', 'councillor', 'councilMembership'),
	(4, 'عضو علي البدل شورای مرکزی', 'understudy', 'councilMembership'),
	(5, 'کلاس', '10', 'audienceLevel'),
	(6, 'گروه آموزشی', '20', 'audienceLevel'),
	(7, 'دانشکده', '30', 'audienceLevel'),
	(8, 'خوابگاه', '40', 'audienceLevel'),
	(9, 'دانشکده', '50', 'audienceLevel'),
	(10, 'دانشگاه', '60', 'audienceLevel'),
	(11, 'شهرستان', '70', 'audienceLevel'),
	(12, 'استان', '80', 'audienceLevel'),
	(13, 'منطقه کشوری', '90', 'audienceLevel'),
	(14, 'کشور', '95', 'audienceLevel'),
	(15, 'بین الملل', '99', 'audienceLevel'),
	(17, 'علمی/دانشیک', '2', 'subject'),
	(18, 'فرهنگی', '4', 'subject'),
	(19, 'سیاسی', '6', 'subject'),
	(20, 'اجتماعی', '8', 'subject'),
	(21, 'دینی/عقیدتی', '10', 'subject'),
	(23, 'هنری', '14', 'subject'),
	(24, 'تفریحی', '16', 'subject'),
	(25, 'ورزشی', '18', 'subject'),
	(26, 'ادبی', '20', 'subject'),
	(27, 'پژوهشی', '22', 'subject'),
	(28, 'دیگر', '24', 'subject'),
	(32, 'لغو شده', '10', 'plan_status'),
	(33, 'انجام شده', '15', 'plan_status'),
	(34, 'منتظر تصویب', '25', 'plan_status'),
	(35, 'تصویب شده', '20', 'plan_status'),
	(36, 'در حال اجرا', '30', 'plan_status'),
	(37, 'کلاس/کارگاه', '1', 'programType'),
	(38, 'اردو/بازدید', '10', 'programType'),
	(39, 'جشنواره', '20', 'programType'),
	(40, 'برنامه جمعی', '30', 'programType'),
	(41, 'نمایشگاه', '40', 'programType'),
	(42, 'مسابقه', '50', 'programType'),
	(43, 'دیگر', '100', 'programType'),
	(47, 'صنفی', '25', 'subject'),
	(48, 'طنز', '26', 'subject'),
	(49, 'خبری', '27', 'subject'),
	(50, 'انجمن علمی', 'a', 'entityType'),
	(51, 'کانون فرهنگی', 'k', 'entityType'),
	(52, 'تشکل اسلامی', 't', 'entityType'),
	(55, 'شورای صنفی', 's', 'entityType'),
	(60, 'نهاد غیر دانشجویی', 'x', 'entityType'),
	(61, '', 'o', 'entityType'),
	(62, 'شوراي فرهنگي', 'f', 'council'),
	(63, 'شورای حمايت و نظارت بر انجمن‌های علمي', 'a', 'council'),
	(65, 'شورای هماهنگی کانونهای فرهنگی', 'k', 'council'),
	(67, 'هیئت نظارت بر تشکلهای دانشجویی', 't', 'council'),
	(68, 'کمیته ناظر برنشریات دانشجویی', 'n', 'council'),
	(69, 'تایید', 'ok', 'plan_comment'),
	(70, 'نیاز به اصلاح', 'change', 'plan_comment'),
	(71, 'نیاز به اصلاح جزئی', 'edit', 'plan_comment'),
	(72, 'رد', 'cancel', 'plan_comment'),
	(73, 'ارجاع به', 'refer', 'plan_comment'),
	(102, 'عضو برجسته', 'active', 'membership'),
	(75, 'راهپیمایی/تجمع', '120', 'programType'),
	(76, 'روزنامه', '0001', 'period'),
	(77, 'هفته نامه', '0007', 'period'),
	(78, 'دوهفته نامه', '0014', 'period'),
	(79, 'ماهنامه', '0030', 'period'),
	(80, 'دوماهنامه', '0060', 'period'),
	(81, 'فصلنامه', '0090', 'period'),
	(82, 'دوفصلنامه', '0180', 'period'),
	(83, 'گاهنامه', '1000', 'period'),
	(84, 'تکشماره', '2000', 'period'),
	(85, 'ویژه نامه', '3000', 'period'),
	(86, 'سالنامه', '0360', 'period'),
	(91, 'تیم ورزشی', 'tm', 'entityType'),
	(90, 'انجمن ورزشی', 'sp', 'entityTpye'),
	(92, 'بسیج دانشجویی (دانشکده)', 'bs', 'entityType'),
	(93, 'مسلمان (مذهب نامشخص)', '1', 'religion'),
	(94, 'مسلمان (اهل تشیع)', '2', 'religion'),
	(95, 'مسلمان (اهل تسنن)', '3', 'religion'),
	(96, 'ارمنی/مسیحی', '4', 'religion'),
	(97, 'کلیمی/یهودی', '5', 'religion'),
	(98, 'زرتشتی', '6', 'religion'),
	(99, 'دیگر', '7', 'religion'),
	(100, 'نامشخص', '8', 'religion'),
	(101, 'نمایش فیلم', '35', 'programType'),
	(104, 'انجمن ورزشی', 'sport', 'entityType'),
	(105, 'نهایی', 'final', 'enrollmentStatus'),
	(106, 'اولیه', 'pre', 'enrollmentStatus'),
	(107, 'انصراف', 'cancel', 'enrollmentStatus'),
	(108, '', NULL, NULL),
	(109, 'هزینه پرداخت شده', 'payed', 'enrollmentStatus'),
	(110, 'ذخیره', 'alternative', 'enrollmentStatus'),
	(111, 'درخواست عضویت', 'applied', 'membership'),
	(112, 'لغو عضویت', 'canceled', 'membership');
/*!40000 ALTER TABLE `constant` ENABLE KEYS */;


-- Dumping structure for table mehr2.council
CREATE TABLE IF NOT EXISTS `council` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entityId` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `enrollmentStartDate` date DEFAULT NULL,
  `enrollmentEndDate` date DEFAULT NULL,
  `electionStartDate` date DEFAULT NULL,
  `electionEndDate` date DEFAULT NULL,
  `note` text COLLATE utf8_persian_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- Dumping data for table mehr2.council: 16 rows
DELETE FROM `council`;
/*!40000 ALTER TABLE `council` DISABLE KEYS */;
INSERT INTO `council` (`id`, `entityId`, `name`, `startDate`, `enrollmentStartDate`, `enrollmentEndDate`, `electionStartDate`, `electionEndDate`, `note`) VALUES
	(1, 1, 'adsf', '2014-06-01', '2014-06-01', '2014-06-01', '2014-06-01', '2014-06-01', 'sse'),
	(2, 3, 'as', NULL, NULL, NULL, NULL, NULL, NULL),
	(3, 62, 'adsf', NULL, NULL, NULL, NULL, NULL, 'undefined'),
	(4, 62, 'adf', '1393-03-30', '1393-03-08', '1393-03-21', '1393-03-23', '1393-03-29', 'یییی'),
	(5, 62, 'asdf', '1393-06-03', '1393-02-14', NULL, NULL, NULL, 'undefined'),
	(6, 62, 'adf', '1393-04-16', '1393-03-12', '1393-03-20', '1393-03-29', '1393-03-29', 'ss'),
	(7, 62, 'پنجم', '1393-03-27', '1393-03-06', NULL, NULL, NULL, 'undefined'),
	(8, 63, 'شسب۲', '2014-10-13', '2014-06-03', '2014-06-03', '2014-06-03', '2014-06-03', 'sdad'),
	(9, 62, 'پنجم', '1393-03-27', NULL, NULL, NULL, NULL, 'undefined'),
	(10, 62, 'adsf', '1393-03-28', '1393-03-13', '1393-03-27', NULL, NULL, 'undefined'),
	(11, 62, 'asdf', '2014-07-19', '2014-07-06', '2014-07-21', NULL, NULL, 'undefined'),
	(12, 62, 'asdf', NULL, NULL, NULL, NULL, NULL, 'undefined'),
	(13, 62, 'طط', '2014-07-19', NULL, NULL, NULL, NULL, 'undefined'),
	(14, 65, 'a', '0635-11-14', '2014-07-11', NULL, NULL, NULL, 'undefined'),
	(15, 65, 'ss', '0635-10-09', NULL, NULL, NULL, NULL, 'undefined'),
	(16, 64, 'یک', '0635-10-18', '2014-07-13', NULL, NULL, NULL, 'undefined');
/*!40000 ALTER TABLE `council` ENABLE KEYS */;


-- Dumping structure for table mehr2.councilmember
CREATE TABLE IF NOT EXISTS `councilmember` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `councilId` int(11) NOT NULL,
  `role` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT 'member',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_councilId` (`userId`,`councilId`)
) ENGINE=MyISAM AUTO_INCREMENT=852552328 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.councilmember: 8 rows
DELETE FROM `councilmember`;
/*!40000 ALTER TABLE `councilmember` DISABLE KEYS */;
INSERT INTO `councilmember` (`id`, `userId`, `councilId`, `role`) VALUES
	(852552327, 882221271, 7, 'understudy'),
	(852552326, 882143245, 7, 'secretary'),
	(852552325, 841140234, 9, 'understudy'),
	(852552324, 841140239, 9, 'secretary'),
	(852552323, 821662225, 9, 'councillor'),
	(852552322, 841140239, 11, 'councillor'),
	(852552321, 811772210, 11, 'understudy'),
	(852552320, 2, 9, 'councillor');
/*!40000 ALTER TABLE `councilmember` ENABLE KEYS */;


-- Dumping structure for view mehr2.councilmemberlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `councilmemberlist` (
	`id` INT(10) UNSIGNED NOT NULL,
	`userId` INT(11) NOT NULL,
	`councilId` INT(11) NOT NULL,
	`role` CHAR(50) NOT NULL COLLATE 'utf8_persian_ci',
	`roleText` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`fullName` VARCHAR(91) NULL COLLATE 'utf8_persian_ci',
	`sid` CHAR(20) NULL COLLATE 'utf8_persian_ci'
) ENGINE=MyISAM;


-- Dumping structure for table mehr2.country
CREATE TABLE IF NOT EXISTS `country` (
  `id` varchar(2) COLLATE utf8_persian_ci NOT NULL,
  `name` varchar(64) COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- Dumping data for table mehr2.country: 248 rows
DELETE FROM `country`;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` (`id`, `name`) VALUES
	('AW', 'آروبا'),
	('AR', 'آرژانتین'),
	('AL', 'آلبانی'),
	('DE', 'آلمان'),
	('AN', 'آنتیل هلند'),
	('AG', 'آنتیگوا و باربودا'),
	('AD', 'آندورا'),
	('AO', 'آنگولا'),
	('AI', 'آنگیل'),
	('AT', 'اتریش'),
	('ET', 'اتیوپی'),
	('JO', 'اردن'),
	('AM', 'ارمنستان'),
	('ER', 'اریتره'),
	('UZ', 'ازبکستان'),
	('AU', 'استرالیا'),
	('EE', 'استونی'),
	('IL', 'سرزمین‌های اشغالی'),
	('SK', 'اسلواکی'),
	('SI', 'اسلوونی'),
	('SJ', 'اسوالبارد و جان ماین'),
	('ES', 'اسپانیا'),
	('ZA', 'افریقای جنوبی'),
	('AF', 'افغانستان'),
	('DZ', 'الجزایر'),
	('SV', 'السالوادور'),
	('AE', 'امارات متحدهٔ عربی'),
	('ID', 'اندونزی'),
	('UY', 'اوروگوئه'),
	('UA', 'اوکراین'),
	('UG', 'اوگاندا'),
	('EC', 'اکوادر'),
	('US', 'ایالات متحدهٔ امریکا'),
	('IT', 'ایتالیا'),
	('IR', 'ایران'),
	('IE', 'ایرلند'),
	('IS', 'ایسلند'),
	('BB', 'باربادوس'),
	('BS', 'باهاما'),
	('BH', 'بحرین'),
	('BR', 'برزیل'),
	('BM', 'برمودا'),
	('BN', 'برونئی'),
	('GB', 'بریتانیا'),
	('BG', 'بلغارستان'),
	('BE', 'بلژیک'),
	('BZ', 'بلیز'),
	('BD', 'بنگلادش'),
	('BJ', 'بنین'),
	('BT', 'بوتان'),
	('BW', 'بوتسوانا'),
	('BI', 'بوروندی'),
	('BF', 'بورکینافاسو'),
	('BA', 'بوسنی و هرزگوین'),
	('BO', 'بولیوی'),
	('BY', 'بیلوروسی'),
	('TJ', 'تاجیکستان'),
	('TZ', 'تانزانیا'),
	('TH', 'تایلند'),
	('TW', 'تایوان'),
	('TM', 'ترکمنستان'),
	('TR', 'ترکیه'),
	('TT', 'ترینیداد و توباگو'),
	('TN', 'تونس'),
	('TO', 'تونگا'),
	('TV', 'تووالو'),
	('TK', 'توکلائو'),
	('TG', 'توگو'),
	('TL', 'تیمور شرقی'),
	('JM', 'جامائیکا'),
	('GI', 'جبل‌الطارق'),
	('JE', 'جرسی'),
	('AX', 'جزایر آلاند'),
	('TC', 'جزایر ترک و کایکوس'),
	('SB', 'جزایر سلیمان'),
	('FO', 'جزایر فارو'),
	('FK', 'جزایر فالکلند'),
	('MH', 'جزایر مارشال'),
	('MP', 'جزایر ماریانای شمالی'),
	('VI', 'جزایر ویرجین ایالات متحده'),
	('VG', 'جزایر ویرجین بریتانیا'),
	('UM', 'جزایر کوچک دورافتادهٔ ایالات متحده'),
	('CK', 'جزایر کوک'),
	('CC', 'جزایر کوکوس'),
	('KY', 'جزایر کِیمن'),
	('BV', 'جزیرهٔ بووت'),
	('IM', 'جزیرهٔ مان'),
	('NF', 'جزیرهٔ نورفولک'),
	('HM', 'جزیرهٔ هرد و جزایر مک‌دونالد'),
	('CX', 'جزیرهٔ کریسمس'),
	('AZ', 'جمهوری آذربایجان'),
	('CF', 'جمهوری افریقای مرکزی'),
	('DO', 'جمهوری دومینیکن'),
	('CZ', 'جمهوری چک'),
	('AQ', 'جنوبگان'),
	('GS', 'جورجیای جنوبی و جزایر ساندویچ جنوبی'),
	('DJ', 'جیبوتی'),
	('DK', 'دانمارک'),
	('DM', 'دومینیک'),
	('RW', 'رواندا'),
	('RU', 'روسیه'),
	('RO', 'رومانی'),
	('RE', 'ریونیون'),
	('ZM', 'زامبیا'),
	('NZ', 'زلاند نو'),
	('ZW', 'زیمبابوه'),
	('ST', 'سائو تومه و پرینسیپه'),
	('CI', 'ساحل عاج'),
	('WS', 'ساموا'),
	('AS', 'ساموای امریکا'),
	('SM', 'سان مارینو'),
	('LK', 'سری‌لانکا'),
	('BL', 'سنت بارتلیمی'),
	('LC', 'سنت لوسیا'),
	('MF', 'سنت مارتین'),
	('SH', 'سنت هلن'),
	('VC', 'سنت وینسنت و گرنادین'),
	('PM', 'سنت پیر و میکلون'),
	('KN', 'سنت کیتس و نویس'),
	('SN', 'سنگال'),
	('SG', 'سنگاپور'),
	('SE', 'سوئد'),
	('CH', 'سوئیس'),
	('SZ', 'سوازیلند'),
	('SD', 'سودان'),
	('SR', 'سورینام'),
	('SY', 'سوریه'),
	('SO', 'سومالی'),
	('SL', 'سیرالئون'),
	('SC', 'سیشل'),
	('CL', 'شیلی'),
	('EH', 'صحرای غربی'),
	('RS', 'صربستان'),
	('CS', 'صربستان و مونته‌نگرو'),
	('IQ', 'عراق'),
	('SA', 'عربستان سعودی'),
	('OM', 'عمان'),
	('GH', 'غنا'),
	('FR', 'فرانسه'),
	('PS', 'فلسطین'),
	('FI', 'فنلاند'),
	('FJ', 'فیجی'),
	('PH', 'فیلیپین'),
	('CY', 'قبرس'),
	('KG', 'قرقیزستان'),
	('KZ', 'قزاقستان'),
	('QA', 'قطر'),
	('LA', 'لائوس'),
	('LB', 'لبنان'),
	('LV', 'لتونی'),
	('LS', 'لسوتو'),
	('PL', 'لهستان'),
	('LU', 'لوکزامبورگ'),
	('LR', 'لیبریا'),
	('LY', 'لیبی'),
	('LT', 'لیتوانی'),
	('LI', 'لیختن‌اشتاین'),
	('MG', 'ماداگاسکار'),
	('MQ', 'مارتینیک'),
	('MW', 'مالاوی'),
	('MT', 'مالت'),
	('MV', 'مالدیو'),
	('MY', 'مالزی'),
	('ML', 'مالی'),
	('MO', 'ماکائو، ناحیهٔ ویژهٔ حکومتی چین'),
	('YT', 'مایوت'),
	('HU', 'مجارستان'),
	('MA', 'مراکش'),
	('IO', 'مستعمره‌های بریتانیا در اقیانوس هند'),
	('TF', 'مستعمره‌های جنوبی فرانسه'),
	('EG', 'مصر'),
	('MN', 'مغولستان'),
	('MK', 'مقدونیه'),
	('MR', 'موریتانی'),
	('MU', 'موریس'),
	('MZ', 'موزامبیک'),
	('MD', 'مولداوی'),
	('MC', 'موناکو'),
	('ME', 'مونته‌نگرو'),
	('MS', 'مونت‌سرات'),
	('MX', 'مکزیک'),
	('MM', 'میانمار'),
	('FM', 'میکرونزی'),
	('NR', 'نائورو'),
	('ZZ', 'ناحیهٔ نامشخص یا نامعتبر'),
	('NA', 'نامیبیا'),
	('NO', 'نروژ'),
	('NP', 'نپال'),
	('NE', 'نیجر'),
	('NG', 'نیجریه'),
	('NU', 'نیوئه'),
	('NI', 'نیکاراگوئه'),
	('HT', 'هاییتی'),
	('NL', 'هلند'),
	('IN', 'هند'),
	('HN', 'هندوراس'),
	('HK', 'هنگ‌کنگ، ناحیهٔ ویژهٔ حکومتی چین'),
	('VA', 'واتیکان'),
	('WF', 'والیس و فیوتونا'),
	('VU', 'وانواتو'),
	('VE', 'ونزوئلا'),
	('VN', 'ویتنام'),
	('PY', 'پاراگوئه'),
	('PW', 'پالائو'),
	('PA', 'پاناما'),
	('PG', 'پاپوا گینهٔ نو'),
	('PK', 'پاکستان'),
	('PT', 'پرتغال'),
	('PE', 'پرو'),
	('PF', 'پلی‌نزی فرانسه'),
	('PR', 'پورتو ریکو'),
	('PN', 'پیتکایرن'),
	('TD', 'چاد'),
	('CN', 'چین'),
	('JP', 'ژاپن'),
	('CR', 'کاستاریکا'),
	('NC', 'کالدونیای جدید'),
	('KH', 'کامبوج'),
	('CM', 'کامرون'),
	('CA', 'کانادا'),
	('KR', 'کرهٔ جنوبی'),
	('KP', 'کرهٔ شمالی'),
	('HR', 'کرواسی'),
	('CO', 'کلمبیا'),
	('CG', 'کنگو برازویل'),
	('CD', 'کنگو کینشاسا'),
	('KE', 'کنیا'),
	('CU', 'کوبا'),
	('KM', 'کومورو'),
	('KW', 'کویت'),
	('KI', 'کیریباتی'),
	('CV', 'کیپ ورد'),
	('GA', 'گابون'),
	('GM', 'گامبیا'),
	('GD', 'گرانادا'),
	('GE', 'گرجستان'),
	('GG', 'گرنزی'),
	('GL', 'گروئنلند'),
	('GT', 'گواتمالا'),
	('GP', 'گوادلوپ'),
	('GU', 'گوام'),
	('GY', 'گویان'),
	('GF', 'گویان فرانسه'),
	('GN', 'گینه'),
	('GQ', 'گینهٔ استوایی'),
	('GW', 'گینهٔ بیسائو'),
	('YE', 'یمن'),
	('GR', 'یونان');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;


-- Dumping structure for table mehr2.degree
CREATE TABLE IF NOT EXISTS `degree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `terms` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.degree: 10 rows
DELETE FROM `degree`;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` (`id`, `name`, `level`, `terms`) VALUES
	(1, 'بی سواد', NULL, NULL),
	(2, 'دبستان', NULL, NULL),
	(3, 'راهنمایی', NULL, NULL),
	(4, 'دیپلم', NULL, NULL),
	(5, 'کاردانی پیوسته', NULL, NULL),
	(6, 'کاردانی', 's', 4),
	(7, 'کارشناسی', 's', 8),
	(11, 'دکتری', 'z', 8),
	(9, 'پسادکتری', 'z', 4),
	(8, 'کارشناسی ارشد', 'z', NULL);
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;


-- Dumping structure for table mehr2.department
CREATE TABLE IF NOT EXISTS `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` char(5) COLLATE utf8_persian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `collegeId` bigint(20) DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.department: 2 rows
DELETE FROM `department`;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`id`, `level`, `name`, `collegeId`, `cDate`) VALUES
	(1, NULL, 'استخراج', 2, NULL),
	(2, NULL, 'ریاضی محض', 1, NULL);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;


-- Dumping structure for table mehr2.enroller
CREATE TABLE IF NOT EXISTS `enroller` (
  `programId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL,
  `status` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`programId`,`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- Dumping data for table mehr2.enroller: 3 rows
DELETE FROM `enroller`;
/*!40000 ALTER TABLE `enroller` DISABLE KEYS */;
INSERT INTO `enroller` (`programId`, `userId`, `status`, `cDate`) VALUES
	(0, 771322251, 'final', '2014-06-09 14:34:18'),
	(0, 811772210, 'final', '2014-06-09 14:32:32'),
	(0, 871151205, 'final', '2014-06-09 14:23:02');
/*!40000 ALTER TABLE `enroller` ENABLE KEYS */;


-- Dumping structure for view mehr2.enrollerlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `enrollerlist` (
	`programId` INT(10) UNSIGNED NOT NULL,
	`userId` INT(10) UNSIGNED NOT NULL,
	`status` VARCHAR(50) NULL COLLATE 'utf8_persian_ci',
	`id` BIGINT(20) UNSIGNED NOT NULL,
	`username` VARCHAR(255) NOT NULL COLLATE 'utf8_persian_ci',
	`password` VARCHAR(32) NOT NULL COLLATE 'utf8_persian_ci',
	`firstName` VARCHAR(45) NULL COMMENT 'نام' COLLATE 'utf8_persian_ci',
	`lastName` VARCHAR(45) NOT NULL COMMENT 'فامیل' COLLATE 'utf8_persian_ci',
	`nid` CHAR(50) NULL COMMENT 'کدملی' COLLATE 'utf8_persian_ci',
	`sid` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`cDate` DATETIME NULL,
	`lastLoginDate` DATETIME NULL,
	`fatherName` VARCHAR(45) NULL COLLATE 'utf8_persian_ci',
	`sex` CHAR(3) NOT NULL COLLATE 'utf8_persian_ci',
	`address` VARCHAR(150) NULL COLLATE 'utf8_persian_ci',
	`phone` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`mobile` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`email` VARCHAR(50) NULL COLLATE 'utf8_persian_ci',
	`email2` VARCHAR(50) NULL COLLATE 'utf8_persian_ci',
	`role_id` BIGINT(20) NULL,
	`birthdayDate` DATE NULL,
	`zip` CHAR(13) NULL COLLATE 'utf8_persian_ci',
	`provinceId` BIGINT(20) NULL,
	`departmentId` BIGINT(20) NULL,
	`startTerm` BIGINT(20) NULL,
	`endTerm` BIGINT(20) NULL,
	`religion` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`dormitory_al` TINYINT(4) NULL,
	`active` TINYINT(4) NULL,
	`user_type` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`job_title` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`countryId` INT(11) NULL COMMENT 'کدکشور ملیت',
	`nationality` CHAR(50) NULL COLLATE 'utf8_persian_ci',
	`departemntText` VARCHAR(255) NULL COLLATE 'utf8_persian_ci',
	`collegeText` VARCHAR(255) NULL COLLATE 'utf8_persian_ci',
	`statusText` CHAR(255) NULL COLLATE 'utf8_persian_ci'
) ENGINE=MyISAM;


-- Dumping structure for table mehr2.entity
CREATE TABLE IF NOT EXISTS `entity` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `type` varchar(3) COLLATE utf8_persian_ci DEFAULT NULL,
  `manager` bigint(20) DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `details` text COLLATE utf8_persian_ci,
  `audience` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  `councilMembers` int(11) DEFAULT NULL,
  `understudyConcuilMembers` int(11) DEFAULT NULL,
  `subscription` tinyint(4) DEFAULT NULL,
  `charter` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.entity: 4 rows
DELETE FROM `entity`;
/*!40000 ALTER TABLE `entity` DISABLE KEYS */;
INSERT INTO `entity` (`id`, `name`, `type`, `manager`, `cDate`, `details`, `audience`, `councilMembers`, `understudyConcuilMembers`, `subscription`, `charter`) VALUES
	(65, 'دانشکده نفت', 's', NULL, NULL, NULL, 'a:7:{s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL),
	(63, 'دانشکده برق', 'bs', NULL, NULL, NULL, 'a:8:{s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}s:12:"entityMember";s:0:"";}', NULL, NULL, NULL, NULL),
	(64, 'قرآن و عترت', 'k', NULL, NULL, NULL, 'a:7:{s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL),
	(62, 'نانو', 'a', NULL, NULL, NULL, 'a:7:{s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', 6, 65, 1, NULL);
/*!40000 ALTER TABLE `entity` ENABLE KEYS */;


-- Dumping structure for view mehr2.entitylist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `entitylist` (
	`id` INT(20) NOT NULL,
	`TYPE` VARCHAR(3) NULL COLLATE 'utf8_persian_ci',
	`typeText` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8_persian_ci',
	`fullName` VARCHAR(511) NULL COLLATE 'utf8_persian_ci',
	`councilCount` BIGINT(21) NOT NULL
) ENGINE=MyISAM;


-- Dumping structure for table mehr2.entitymember
CREATE TABLE IF NOT EXISTS `entitymember` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `entityId` int(11) NOT NULL,
  `role` char(50) COLLATE utf8_persian_ci NOT NULL DEFAULT 'member',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_entityId` (`userId`,`entityId`)
) ENGINE=MyISAM AUTO_INCREMENT=852552286 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.entitymember: 13 rows
DELETE FROM `entitymember`;
/*!40000 ALTER TABLE `entitymember` DISABLE KEYS */;
INSERT INTO `entitymember` (`id`, `userId`, `entityId`, `role`) VALUES
	(852552272, 771322251, 9, 'member'),
	(852552275, 3, 9, 'active'),
	(852552273, 821662225, 9, 'active'),
	(852552274, 841330214, 9, 'active'),
	(852552276, 821662215, 9, 'active'),
	(852552277, 882321234, 9, 'active'),
	(852552278, 882381213, 9, 'active'),
	(852552279, 2, 9, 'canceled'),
	(852552281, 822552204, 62, 'member'),
	(852552280, 4, 9, 'active'),
	(852552282, 832552228, 62, 'canceled'),
	(852552283, 821662215, 62, 'canceled'),
	(852552285, 871772237, 62, 'applied');
/*!40000 ALTER TABLE `entitymember` ENABLE KEYS */;


-- Dumping structure for view mehr2.entitymemberlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `entitymemberlist` (
	`id` INT(11) NOT NULL,
	`userId` INT(11) NOT NULL,
	`entityId` INT(11) NOT NULL,
	`role` CHAR(50) NOT NULL COLLATE 'utf8_persian_ci',
	`roleText` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`firstName` VARCHAR(45) NULL COMMENT 'نام' COLLATE 'utf8_persian_ci',
	`lastName` VARCHAR(45) NULL COMMENT 'فامیل' COLLATE 'utf8_persian_ci',
	`fullName` VARCHAR(91) NULL COLLATE 'utf8_persian_ci',
	`sid` CHAR(20) NULL COLLATE 'utf8_persian_ci'
) ENGINE=MyISAM;


-- Dumping structure for table mehr2.program
CREATE TABLE IF NOT EXISTS `program` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `entityId` int(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `manager` bigint(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `cDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `enrollmentStartDate` datetime DEFAULT NULL,
  `enrollmentEndDate` datetime DEFAULT NULL,
  `enrollmentMethod` char(10) COLLATE utf8_persian_ci DEFAULT NULL,
  `minCapacity` int(4) unsigned DEFAULT NULL,
  `maxCapacity` int(4) unsigned DEFAULT NULL,
  `cost` bigint(3) unsigned DEFAULT NULL,
  `paymentMethod` char(1) COLLATE utf8_persian_ci DEFAULT NULL,
  `level` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `subject` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audienceLevel` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `audience` varchar(5000) COLLATE utf8_persian_ci DEFAULT NULL,
  `executionStartDate` datetime DEFAULT NULL,
  `executionEndDate` datetime DEFAULT NULL,
  `planId` int(20) DEFAULT NULL,
  `sessions` int(3) unsigned DEFAULT '1',
  `prerequisites` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'ندارد',
  `details` text COLLATE utf8_persian_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- Dumping data for table mehr2.program: 16 rows
DELETE FROM `program`;
/*!40000 ALTER TABLE `program` DISABLE KEYS */;
INSERT INTO `program` (`id`, `entityId`, `name`, `manager`, `type`, `cDate`, `enrollmentStartDate`, `enrollmentEndDate`, `enrollmentMethod`, `minCapacity`, `maxCapacity`, `cost`, `paymentMethod`, `level`, `subject`, `audienceLevel`, `audience`, `executionStartDate`, `executionEndDate`, `planId`, `sessions`, `prerequisites`, `details`) VALUES
	(63, 62, 'asdf', NULL, 10, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, '6', '30', 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(62, 63, 'dd', NULL, 30, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, '10', '30', 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(61, 63, 'asdf', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(60, 0, 'asfad', NULL, NULL, NULL, NULL, NULL, 'auto', 13, 24, 122, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(59, 0, 'qqqqqqqqq', NULL, NULL, NULL, '2014-05-28 00:00:00', '2014-06-11 00:00:00', 'auto', 10, 11, 19, NULL, NULL, '28', NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:6:"138406";s:6:"toTerm";s:6:"138406";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(58, 0, 'asdfasdf', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(57, 64, 'راهیان نور', 821662215, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:10:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}s:12:"entityMember";s:0:"";}', NULL, NULL, NULL, NULL, NULL, '<div style="text-align: right;"><span style="font-family: Tahoma; font-size: 12px;">جهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\n\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس <a href="الكترونيكيwww.aut.ac.ir مراجعه">الكترونيكيwww.aut.ac.ir مراجعه</a> نماييد.\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.</span></div>'),
	(56, 0, 'dd', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, 2, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(55, 0, 'جشن دانش‌آموختگی', NULL, 30, '2014-06-15 18:03:40', '2014-06-15 18:03:42', '2014-06-15 18:03:42', 'auto', 50, 150, 2000, NULL, NULL, '25', '60', 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', '2014-06-15 18:04:06', '2014-06-15 18:04:08', NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(54, 0, 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, 8, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:6:"138303";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(53, 0, 'ss', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(52, 0, 'adf', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(51, 0, 'ddd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', '1393-05-02 00:00:00', '1393-05-01 00:00:00', NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(50, 0, 'ddd', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, 'c', NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(49, 0, 'sss', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, 'c', NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n'),
	(48, 0, 'asf', NULL, NULL, NULL, NULL, NULL, 'auto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a:9:{s:11:"departments";s:3:"434";s:8:"colleges";s:2:"33";s:8:"userType";s:1:"s";s:3:"sex";s:0:"";s:8:"fromTerm";s:0:"";s:6:"toTerm";s:0:"";s:7:"courses";a:1:{i:0;s:0:"";}s:7:"degrees";a:1:{i:0;s:0:"";}s:8:"religion";a:1:{i:0;s:0:"";}}', NULL, NULL, NULL, NULL, NULL, '\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\nجهت آشنايي بيشتر دانش آموزان با رشته هاي دانشگاه و جذب نخبگان در دانشگاه صنعتي اميركبير برنامه معرفي رشته ها مطابق جدول زير در آمفي تئاتر مركزي دانشگاه صورت مي پذيرد. شركت كليه علاقه مندان در اين برنامه آزاد بوده و بصورت رايگان مي باشد. معرفي رشته ها توسط اساتيد محترم دانشكده هاي مربوطه و با حضور دانشجويان ممتاز رشته ها انجام مي شود.\r\nجهت كسب اطلاعات بيشتر مي توانيد به سايت دانشگاه به آدرس الكترونيكيwww.aut.ac.ir مراجعه نماييد.\r\n');
/*!40000 ALTER TABLE `program` ENABLE KEYS */;


-- Dumping structure for view mehr2.programlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `programlist` (
	`id` INT(20) NOT NULL,
	`entityId` INT(20) NOT NULL,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8_persian_ci',
	`manager` BIGINT(20) NULL,
	`type` INT(11) NULL,
	`cDate` TIMESTAMP NULL,
	`enrollmentStartDate` DATETIME NULL,
	`enrollmentEndDate` DATETIME NULL,
	`enrollmentMethod` CHAR(10) NULL COLLATE 'utf8_persian_ci',
	`minCapacity` INT(4) UNSIGNED NULL,
	`maxCapacity` INT(4) UNSIGNED NULL,
	`cost` BIGINT(3) UNSIGNED NULL,
	`paymentMethod` CHAR(1) NULL COLLATE 'utf8_persian_ci',
	`level` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`subject` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`audienceLevel` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`audience` VARCHAR(5000) NULL COLLATE 'utf8_persian_ci',
	`executionStartDate` DATETIME NULL,
	`executionEndDate` DATETIME NULL,
	`planId` INT(20) NULL,
	`sessions` INT(3) UNSIGNED NULL,
	`prerequisites` VARCHAR(45) NULL COMMENT 'ندارد' COLLATE 'utf8_persian_ci',
	`details` TEXT NULL COLLATE 'utf8_persian_ci',
	`typeText` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`subjectText` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`enrollerCount` BIGINT(21) NOT NULL,
	`entityFullName` VARCHAR(511) NULL COLLATE 'utf8_persian_ci'
) ENGINE=MyISAM;


-- Dumping structure for table mehr2.religion
CREATE TABLE IF NOT EXISTS `religion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.religion: 8 rows
DELETE FROM `religion`;
/*!40000 ALTER TABLE `religion` DISABLE KEYS */;
INSERT INTO `religion` (`id`, `name`) VALUES
	(1, 'مسلمان (مذهب نامشخص)'),
	(2, 'مسلمان (اهل تشیع)'),
	(3, 'مسلمان (اهل تسنن)'),
	(4, 'ارمنی/مسیحی'),
	(5, 'کلیمی/یهودی'),
	(6, 'زرتشتی'),
	(7, 'دیگر'),
	(8, 'نامشخص');
/*!40000 ALTER TABLE `religion` ENABLE KEYS */;


-- Dumping structure for table mehr2.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_persian_ci NOT NULL,
  `password` varchar(32) COLLATE utf8_persian_ci NOT NULL,
  `firstName` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'نام',
  `lastName` varchar(45) COLLATE utf8_persian_ci NOT NULL COMMENT 'فامیل',
  `nid` char(50) COLLATE utf8_persian_ci DEFAULT NULL COMMENT 'کدملی',
  `sid` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `cDate` datetime DEFAULT NULL,
  `lastLoginDate` datetime DEFAULT NULL,
  `fatherName` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `sex` char(3) COLLATE utf8_persian_ci NOT NULL,
  `address` varchar(150) COLLATE utf8_persian_ci DEFAULT NULL,
  `phone` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `mobile` char(20) COLLATE utf8_persian_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `email2` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `birthdayDate` date DEFAULT NULL,
  `zip` char(13) COLLATE utf8_persian_ci DEFAULT NULL,
  `provinceId` bigint(20) DEFAULT NULL,
  `departmentId` bigint(20) DEFAULT NULL,
  `startTerm` bigint(20) DEFAULT NULL,
  `endTerm` bigint(20) DEFAULT NULL,
  `religion` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `dormitory_al` tinyint(4) DEFAULT '1',
  `active` tinyint(4) DEFAULT '1',
  `user_type` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `job_title` char(255) COLLATE utf8_persian_ci DEFAULT NULL,
  `countryId` int(11) DEFAULT NULL COMMENT 'کدکشور ملیت',
  `nationality` char(50) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `users_ibfk_4` (`provinceId`),
  KEY `users_ibfk_1` (`departmentId`),
  KEY `users_ibfk_3` (`endTerm`),
  KEY `users_ibfk_2` (`startTerm`)
) ENGINE=MyISAM AUTO_INCREMENT=8833812338 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mehr2.user: 5,386 rows
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

-- Dumping structure for view mehr2.userlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `userlist` (
	`fullName` VARCHAR(91) NULL COLLATE 'utf8_persian_ci',
	`id` BIGINT(20) UNSIGNED NOT NULL,
	`username` VARCHAR(255) NOT NULL COLLATE 'utf8_persian_ci',
	`password` VARCHAR(32) NOT NULL COLLATE 'utf8_persian_ci',
	`firstName` VARCHAR(45) NULL COMMENT 'نام' COLLATE 'utf8_persian_ci',
	`lastName` VARCHAR(45) NOT NULL COMMENT 'فامیل' COLLATE 'utf8_persian_ci',
	`nid` CHAR(50) NULL COMMENT 'کدملی' COLLATE 'utf8_persian_ci',
	`sid` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`cDate` DATETIME NULL,
	`lastLoginDate` DATETIME NULL,
	`fatherName` VARCHAR(45) NULL COLLATE 'utf8_persian_ci',
	`sex` CHAR(3) NOT NULL COLLATE 'utf8_persian_ci',
	`address` VARCHAR(150) NULL COLLATE 'utf8_persian_ci',
	`phone` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`mobile` CHAR(20) NULL COLLATE 'utf8_persian_ci',
	`email` VARCHAR(50) NULL COLLATE 'utf8_persian_ci',
	`email2` VARCHAR(50) NULL COLLATE 'utf8_persian_ci',
	`role_id` BIGINT(20) NULL,
	`birthdayDate` DATE NULL,
	`zip` CHAR(13) NULL COLLATE 'utf8_persian_ci',
	`provinceId` BIGINT(20) NULL,
	`departmentId` BIGINT(20) NULL,
	`startTerm` BIGINT(20) NULL,
	`endTerm` BIGINT(20) NULL,
	`religion` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`dormitory_al` TINYINT(4) NULL,
	`active` TINYINT(4) NULL,
	`user_type` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`job_title` CHAR(255) NULL COLLATE 'utf8_persian_ci',
	`countryId` INT(11) NULL COMMENT 'کدکشور ملیت',
	`nationality` CHAR(50) NULL COLLATE 'utf8_persian_ci',
	`departemntText` VARCHAR(255) NULL COLLATE 'utf8_persian_ci',
	`collegeText` VARCHAR(255) NULL COLLATE 'utf8_persian_ci'
) ENGINE=MyISAM;


-- Dumping structure for view mehr2.councilmemberlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `councilmemberlist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `councilmemberlist` AS select councilmember.*,text as roleText,fullName, sid from councilmember left join constant on constant.value=role and category='councilMembership' 
left join userList on userId=userList.id ;


-- Dumping structure for view mehr2.enrollerlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `enrollerlist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `enrollerlist` AS select enroller.*, userList.*, constant.text as statusText from userlist  join enroller on userlist.id=enroller.userId left join constant on constant.value=status and constant.category='enrollmentStatus' ;


-- Dumping structure for view mehr2.entitylist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `entitylist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `entitylist` AS SELECT entity.id, TYPE,constant.text AS typeText,name,concat(constant.text,' ',entity.name) as fullName,count(council.id) as councilCount
FROM entity
LEFT JOIN council ON council.entityId=entity.id
LEFT JOIN constant ON entity.type=`value` AND category='entityType'
group by entity.id ;


-- Dumping structure for view mehr2.entitymemberlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `entitymemberlist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `entitymemberlist` AS select entitymember.*,text as roleText,firstName, lastName, fullName, sid from entitymember left join constant on constant.value=role and category='membership' 
left join userList on userId=userList.id ;


-- Dumping structure for view mehr2.programlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `programlist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `programlist` AS SELECT program.*,ct.text AS typeText,cs.text as subjectText, count(programId) as enrollerCount,e.fullName as entityFullName
FROM program
left join enroller on program.id=programId
LEFT JOIN constant ct ON `type`=ct.value
left join constant cs on `subject`=cs.value 
left join entitylist e on e.id=program.entityId
WHERE (ct.category='programType' OR ct.category IS NULL)
and (cs.category='subject' OR cs.category IS NULL)
group by program.id ;


-- Dumping structure for view mehr2.userlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `userlist`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` VIEW `userlist` AS SELECT concat(user.firstName,' ',user.lastName) as fullName, user.*,department.name as departemntText,college.name as collegeText from user left join department on department.id=user.departmentId left join college on college.id=department.collegeId ;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
