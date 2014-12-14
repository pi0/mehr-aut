-- MySQL dump 10.13  Distrib 5.6.19, for Win64 (x86_64)
--
-- Host: localhost    Database: mehr
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `constant`
--

LOCK TABLES `constant` WRITE;
/*!40000 ALTER TABLE `constant` DISABLE KEYS */;
INSERT INTO `constant` VALUES (91,'تیم ورزشی','tm','entityType'),(117,'شبانه','2','course'),(116,'روزانه','1','course'),(63,'شورای حمايت و نظارت بر انجمن‌های علمي','a','council'),(62,'شوراي فرهنگي','f','council'),(15,'بین الملل','99','audienceLevel'),(14,'کشور','95','audienceLevel'),(13,'منطقه کشوری','90','audienceLevel'),(12,'استان','80','audienceLevel'),(11,'شهرستان','70','audienceLevel'),(9,'دانشکده','50','audienceLevel'),(10,'دانشگاه','60','audienceLevel'),(32,'لغو شده','10','plan_status'),(73,'ارجاع به','refer','plan_comment'),(72,'رد','cancel','plan_comment'),(71,'نیاز به اصلاح جزئی','edit','plan_comment'),(82,'دوفصلنامه','0180','period'),(81,'فصلنامه','0090','period'),(80,'دوماهنامه','0060','period'),(79,'ماهنامه','0030','period'),(76,'روزنامه','0001','period'),(77,'هفته نامه','0007','period'),(78,'دوهفته نامه','0014','period'),(86,'سالنامه','0360','period'),(85,'ویژه نامه','3000','period'),(84,'تکشماره','2000','period'),(70,'نیاز به اصلاح','change','plan_comment'),(55,'شورای صنفی','s','entityType'),(52,'تشکل اسلامی','t','entityType'),(51,'کانون فرهنگی','k','entityType'),(50,'انجمن علمی','a','entityType'),(4,'عضو علي البدل شورای مرکزی','understudy','councilMembership'),(3,'عضو شورای مرکزی','councillor','councilMembership'),(2,'دبیر','secretary','councilMembership'),(68,'کمیته ناظر برنشریات دانشجویی','n','council'),(65,'شورای هماهنگی کانونهای فرهنگی','k','council'),(67,'هیئت نظارت بر تشکلهای دانشجویی','t','council'),(112,'لغو عضویت','canceled','membership'),(60,'نهاد غیر دانشجویی','x','entityType'),(61,'','o','entityType'),(111,'درخواست عضویت','applied','membership'),(102,'عضو برجسته','active','membership'),(1,'عضو عادی','member','membership'),(104,'انجمن ورزشی','sport','entityType'),(92,'بسیج دانشجویی (دانشکده)','bs','entityType'),(90,'انجمن ورزشی','sp','entityTpye'),(121,'نیمه‌حضوری','6','course'),(105,'نهایی','final','enrollmentStatus'),(106,'اولیه','pre','enrollmentStatus'),(129,'تجرد','s','maritalStatus'),(109,'مهمان','guest','enrollmentStatus'),(110,'ذخیره','alternative','enrollmentStatus'),(127,'عضو تیم اجرایی','committee','enrollmentStatus'),(69,'تایید','ok','plan_comment'),(83,'گاهنامه','1000','period'),(128,'استاد','professor','enrollmentStatus'),(120,'دبیری','5','course'),(119,'بین‌الملل','4','course'),(118,'مجازی','3','course'),(5,'کلاس','10','audienceLevel'),(6,'گروه آموزشی','20','audienceLevel'),(7,'دانشکده','30','audienceLevel'),(8,'خوابگاه','40','audienceLevel'),(33,'انجام شده','15','plan_status'),(34,'منتظر تصویب','25','plan_status'),(35,'تصویب شده','20','plan_status'),(36,'در حال اجرا','30','plan_status'),(37,'کلاس/کارگاه','1','programType'),(38,'اردو/بازدید','10','programType'),(39,'جشنواره','20','programType'),(40,'برنامه جمعی','30','programType'),(41,'نمایشگاه','40','programType'),(42,'مسابقه','50','programType'),(43,'دیگر','100','programType'),(75,'راهپیمایی/تجمع','120','programType'),(101,'نمایش فیلم','35','programType'),(93,'مسلمان (مذهب نامشخص)','1','religion'),(94,'مسلمان (اهل تشیع)','2','religion'),(95,'مسلمان (اهل تسنن)','3','religion'),(96,'ارمنی/مسیحی','4','religion'),(97,'کلیمی/یهودی','5','religion'),(98,'زرتشتی','6','religion'),(99,'دیگر','7','religion'),(100,'نامشخص','8','religion'),(17,'علمی','2','subject'),(18,'فرهنگی','4','subject'),(19,'سیاسی','6','subject'),(20,'اجتماعی','8','subject'),(21,'دینی/آئینی','10','subject'),(23,'هنری','14','subject'),(24,'تفریحی','16','subject'),(25,'ورزشی','18','subject'),(26,'ادبی','20','subject'),(27,'پژوهشی','22','subject'),(28,'دیگر','24','subject'),(47,'صنفی','25','subject'),(48,'طنز','26','subject'),(49,'خبری','27','subject'),(113,'جاری','c','timeStage'),(114,'گذشته','p','timeStage'),(115,'آینده','f','timeStage'),(122,'استاد','2','userType'),(123,'دانشجو','1','userType'),(124,'کارمند','3','userType'),(125,'عضو','4','userType'),(126,'کاربر تعریف شده','5','userType'),(130,'تأهل','m','maritalStatus'),(131,'طلاق','d','maritalStatus'),(132,'فوت همسر','k','maritalStatus'),(133,'برنامه','program','postType'),(134,'خبر','news','postType'),(135,'نهاد','entity','postType'),(136,'نشریه','issue','postType');
/*!40000 ALTER TABLE `constant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES ('AW','آروبا'),('AR','آرژانتین'),('AL','آلبانی'),('DE','آلمان'),('AN','آنتیل هلند'),('AG','آنتیگوا و باربودا'),('AD','آندورا'),('AO','آنگولا'),('AI','آنگیل'),('AT','اتریش'),('ET','اتیوپی'),('JO','اردن'),('AM','ارمنستان'),('ER','اریتره'),('UZ','ازبکستان'),('AU','استرالیا'),('EE','استونی'),('IL','سرزمین‌های اشغالی'),('SK','اسلواکی'),('SI','اسلوونی'),('SJ','اسوالبارد و جان ماین'),('ES','اسپانیا'),('ZA','افریقای جنوبی'),('AF','افغانستان'),('DZ','الجزایر'),('SV','السالوادور'),('AE','امارات متحدهٔ عربی'),('ID','اندونزی'),('UY','اوروگوئه'),('UA','اوکراین'),('UG','اوگاندا'),('EC','اکوادر'),('US','ایالات متحدهٔ امریکا'),('IT','ایتالیا'),('IR','ایران'),('IE','ایرلند'),('IS','ایسلند'),('BB','باربادوس'),('BS','باهاما'),('BH','بحرین'),('BR','برزیل'),('BM','برمودا'),('BN','برونئی'),('GB','بریتانیا'),('BG','بلغارستان'),('BE','بلژیک'),('BZ','بلیز'),('BD','بنگلادش'),('BJ','بنین'),('BT','بوتان'),('BW','بوتسوانا'),('BI','بوروندی'),('BF','بورکینافاسو'),('BA','بوسنی و هرزگوین'),('BO','بولیوی'),('BY','بیلوروسی'),('TJ','تاجیکستان'),('TZ','تانزانیا'),('TH','تایلند'),('TW','تایوان'),('TM','ترکمنستان'),('TR','ترکیه'),('TT','ترینیداد و توباگو'),('TN','تونس'),('TO','تونگا'),('TV','تووالو'),('TK','توکلائو'),('TG','توگو'),('TL','تیمور شرقی'),('JM','جامائیکا'),('GI','جبل‌الطارق'),('JE','جرسی'),('AX','جزایر آلاند'),('TC','جزایر ترک و کایکوس'),('SB','جزایر سلیمان'),('FO','جزایر فارو'),('FK','جزایر فالکلند'),('MH','جزایر مارشال'),('MP','جزایر ماریانای شمالی'),('VI','جزایر ویرجین ایالات متحده'),('VG','جزایر ویرجین بریتانیا'),('UM','جزایر کوچک دورافتادهٔ ایالات متحده'),('CK','جزایر کوک'),('CC','جزایر کوکوس'),('KY','جزایر کِیمن'),('BV','جزیرهٔ بووت'),('IM','جزیرهٔ مان'),('NF','جزیرهٔ نورفولک'),('HM','جزیرهٔ هرد و جزایر مک‌دونالد'),('CX','جزیرهٔ کریسمس'),('AZ','جمهوری آذربایجان'),('CF','جمهوری افریقای مرکزی'),('DO','جمهوری دومینیکن'),('CZ','جمهوری چک'),('AQ','جنوبگان'),('GS','جورجیای جنوبی و جزایر ساندویچ جنوبی'),('DJ','جیبوتی'),('DK','دانمارک'),('DM','دومینیک'),('RW','رواندا'),('RU','روسیه'),('RO','رومانی'),('RE','ریونیون'),('ZM','زامبیا'),('NZ','زلاند نو'),('ZW','زیمبابوه'),('ST','سائو تومه و پرینسیپه'),('CI','ساحل عاج'),('WS','ساموا'),('AS','ساموای امریکا'),('SM','سان مارینو'),('LK','سری‌لانکا'),('BL','سنت بارتلیمی'),('LC','سنت لوسیا'),('MF','سنت مارتین'),('SH','سنت هلن'),('VC','سنت وینسنت و گرنادین'),('PM','سنت پیر و میکلون'),('KN','سنت کیتس و نویس'),('SN','سنگال'),('SG','سنگاپور'),('SE','سوئد'),('CH','سوئیس'),('SZ','سوازیلند'),('SD','سودان'),('SR','سورینام'),('SY','سوریه'),('SO','سومالی'),('SL','سیرالئون'),('SC','سیشل'),('CL','شیلی'),('EH','صحرای غربی'),('RS','صربستان'),('CS','صربستان و مونته‌نگرو'),('IQ','عراق'),('SA','عربستان سعودی'),('OM','عمان'),('GH','غنا'),('FR','فرانسه'),('PS','فلسطین'),('FI','فنلاند'),('FJ','فیجی'),('PH','فیلیپین'),('CY','قبرس'),('KG','قرقیزستان'),('KZ','قزاقستان'),('QA','قطر'),('LA','لائوس'),('LB','لبنان'),('LV','لتونی'),('LS','لسوتو'),('PL','لهستان'),('LU','لوکزامبورگ'),('LR','لیبریا'),('LY','لیبی'),('LT','لیتوانی'),('LI','لیختن‌اشتاین'),('MG','ماداگاسکار'),('MQ','مارتینیک'),('MW','مالاوی'),('MT','مالت'),('MV','مالدیو'),('MY','مالزی'),('ML','مالی'),('MO','ماکائو، ناحیهٔ ویژهٔ حکومتی چین'),('YT','مایوت'),('HU','مجارستان'),('MA','مراکش'),('IO','مستعمره‌های بریتانیا در اقیانوس هند'),('TF','مستعمره‌های جنوبی فرانسه'),('EG','مصر'),('MN','مغولستان'),('MK','مقدونیه'),('MR','موریتانی'),('MU','موریس'),('MZ','موزامبیک'),('MD','مولداوی'),('MC','موناکو'),('ME','مونته‌نگرو'),('MS','مونت‌سرات'),('MX','مکزیک'),('MM','میانمار'),('FM','میکرونزی'),('NR','نائورو'),('ZZ','ناحیهٔ نامشخص یا نامعتبر'),('NA','نامیبیا'),('NO','نروژ'),('NP','نپال'),('NE','نیجر'),('NG','نیجریه'),('NU','نیوئه'),('NI','نیکاراگوئه'),('HT','هاییتی'),('NL','هلند'),('IN','هند'),('HN','هندوراس'),('HK','هنگ‌کنگ، ناحیهٔ ویژهٔ حکومتی چین'),('VA','واتیکان'),('WF','والیس و فیوتونا'),('VU','وانواتو'),('VE','ونزوئلا'),('VN','ویتنام'),('PY','پاراگوئه'),('PW','پالائو'),('PA','پاناما'),('PG','پاپوا گینهٔ نو'),('PK','پاکستان'),('PT','پرتغال'),('PE','پرو'),('PF','پلی‌نزی فرانسه'),('PR','پورتو ریکو'),('PN','پیتکایرن'),('TD','چاد'),('CN','چین'),('JP','ژاپن'),('CR','کاستاریکا'),('NC','کالدونیای جدید'),('KH','کامبوج'),('CM','کامرون'),('CA','کانادا'),('KR','کرهٔ جنوبی'),('KP','کرهٔ شمالی'),('HR','کرواسی'),('CO','کلمبیا'),('CG','کنگو برازویل'),('CD','کنگو کینشاسا'),('KE','کنیا'),('CU','کوبا'),('KM','کومورو'),('KW','کویت'),('KI','کیریباتی'),('CV','کیپ ورد'),('GA','گابون'),('GM','گامبیا'),('GD','گرانادا'),('GE','گرجستان'),('GG','گرنزی'),('GL','گروئنلند'),('GT','گواتمالا'),('GP','گوادلوپ'),('GU','گوام'),('GY','گویان'),('GF','گویان فرانسه'),('GN','گینه'),('GQ','گینهٔ استوایی'),('GW','گینهٔ بیسائو'),('YE','یمن'),('GR','یونان');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` VALUES (1,'بی سواد',NULL,NULL),(2,'دبستان',NULL,NULL),(3,'راهنمایی',NULL,NULL),(4,'دیپلم',NULL,NULL),(5,'کاردانی پیوسته',NULL,NULL),(6,'کاردانی','s',4),(7,'کارشناسی','s',8),(11,'دکتری','z',8),(9,'پسادکتری','z',4),(8,'کارشناسی ارشد','z',NULL);
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-14 15:36:25
