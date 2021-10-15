/*
Navicat MySQL Data Transfer

Source Server         : 99-体验后台
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : 00-todolist

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-10-15 15:59:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `isdone` int(11) DEFAULT NULL,
  `author_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo
-- ----------------------------
INSERT INTO `todo` VALUES ('1', '我是修改后的内容', '0', '8');
INSERT INTO `todo` VALUES ('5', '测试内容', '1', '12');
INSERT INTO `todo` VALUES ('3', 'ccccc', '0', '8');
INSERT INTO `todo` VALUES ('4', 'def', '0', '8');
INSERT INTO `todo` VALUES ('6', 'def', '0', '8');
INSERT INTO `todo` VALUES ('8', '123asd', '0', '13');
INSERT INTO `todo` VALUES ('9', '123', '0', '13');
INSERT INTO `todo` VALUES ('10', '123', '0', '13');
INSERT INTO `todo` VALUES ('13', '测试数据2', '0', '13');
INSERT INTO `todo` VALUES ('14', '测试数据9', '0', '13');
INSERT INTO `todo` VALUES ('15', '测试数据1', '0', '14');
INSERT INTO `todo` VALUES ('16', '测试数据2', '0', '14');
INSERT INTO `todo` VALUES ('17', '测试数据3', '0', '14');
INSERT INTO `todo` VALUES ('18', 's', '0', '16');
INSERT INTO `todo` VALUES ('19', 'sc', '0', '16');
INSERT INTO `todo` VALUES ('31', '123', '0', '11');
INSERT INTO `todo` VALUES ('26', 'www', '0', '18');
INSERT INTO `todo` VALUES ('25', 'www', '0', '18');
INSERT INTO `todo` VALUES ('32', 'wwwwwwww', '0', '11');
INSERT INTO `todo` VALUES ('30', '234', '0', '11');
INSERT INTO `todo` VALUES ('41', 'wwwww', '1', '19');
INSERT INTO `todo` VALUES ('40', 'rrrrrrrrrrrrrrrrrrrrrrrr', '1', '19');
INSERT INTO `todo` VALUES ('39', 'tttttttttttttttttttttt', '1', '19');
INSERT INTO `todo` VALUES ('38', 'yyyyyyyyyyyyyyyyyyy', '1', '19');
INSERT INTO `todo` VALUES ('42', '111', '0', '19');
INSERT INTO `todo` VALUES ('43', '123', '1', '20');
INSERT INTO `todo` VALUES ('44', '234', '1', '20');
INSERT INTO `todo` VALUES ('45', '345', '1', '20');
