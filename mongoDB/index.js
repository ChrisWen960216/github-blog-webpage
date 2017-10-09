const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/chriswen';

//Connect MongoDB
MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log('Successfully Connected to Server');
    insertDocutments(db, () => {
        findDocuments(db, () => {
            db.close();
        })
    });
});

//Insert Document
const insertDocutments = (db, callback) => {
    const collection = db.collection('documents');
    collection.insertMany([
        {
            a: 1
        }, {
            a: 2
        }, {
            a: 3
        }
    ], (err, result) => {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log('Inserted 3 documents into the collection');
        callback(result);
    });
};

const findDocuments = (db, callback) => {
    const collection = db.collection('documents');
    collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log('Found the follwing records');
        console.log(docs);
        callback(docs);
    })
}