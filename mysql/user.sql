/*
Navicat MySQL Data Transfer

Source Server         : 99-体验后台
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : 00-todolist

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-10-15 16:00:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'aaa', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('2', 'bbb', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('3', 'ccc', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('4', 'ddd', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('5', 'eee', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('6', 'fff', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('7', 'ggg', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('8', 'hhh', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('9', '111', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('10', '111', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('11', '123', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('12', '123', '670b14728ad9902aecba32e22fa4f6bd');
INSERT INTO `user` VALUES ('13', '123', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('20', '555', '15de21c670ae7c3f6f3f1f37029303c9');
INSERT INTO `user` VALUES ('19', '999', 'b706835de79a2b4e80506f582af3676a');
INSERT INTO `user` VALUES ('16', '123456', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('17', 'qqqqq', '437599f1ea3514f8969f161a6606ce18');
INSERT INTO `user` VALUES ('18', 'www', '4eae35f1b35977a00ebd8086c259d4c9');
