
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// cosnt { MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
  if(err){
    return console.log('unable to connect server .');
  }

  let db = client.db('TodoApp');
  console.log('connected to MongoDB server .');

// db.collection('Todos').find({completed : true}).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs , undefined , 2));
// }, (err)=>{
//   console.log(err);
// });

db.collection('Users').find({name : 'Amera'}).count().then((count)=>{
  console.log(count);
}, (err)=>{
  console.log(err);
});


  // client.close();
});
