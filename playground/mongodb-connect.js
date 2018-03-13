
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// cosnt { MongoClient , ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
  if(err){
    return console.log('unable to connect server .');
  }
  let db = client.db('TodoApp');
  console.log('connected to MongoDB server .');

  // db.collection('Todos').insertOne({
  //   text : 'Some thing todo',
  //   completed : false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(result.ops);
  // });

  // db.collection('Users').insertOne({
  //   name : 'Amera',
  //   Age : 22,
  //   Location : 'Tripoli'
  // },(err ,result)=>{
  //   if(err){
  //     return console.log('can not insert data',err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined , 2));
  // });

  client.close();
});
