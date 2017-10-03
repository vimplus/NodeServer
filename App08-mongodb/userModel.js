/**
 * @overview: user model. - Provide user related data Schema.
 * @author: txBoy
 * @created 2017-09-05
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// 定义数据库中的集合名称（相当于 MySQL 数据库中的表名），如果有则保存到该集合，如果没有则创建名为 cims_users 的集合后保存数据。
const COLLECTTION = 'cims_users';

// 定义user的数据模型。
var UserSchema = new Schema({
    username: String,
    age: Number,
    createTime: {
        type: Number,
        default: Date.now()
    },
    updateTime: Number
}, {
    strict: false,  // 默认为true, 设置为false可以灵活存储未定义在Schema中的字段
    versionKey: false
});

// 根据Schema创建一个Model
var UserModel = mongoose.model(COLLECTTION, UserSchema);

export default UserModel;
