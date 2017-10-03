import mongoose from 'mongoose';

export default function (uri) {
    mongoose.Promise = global.Promise;
    let db = mongoose.connect(uri, { config: { autoIndex: false } });
    return db;
}
