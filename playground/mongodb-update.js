
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// cosnt { MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
  if(err){
    return console.log('unable to connect server .');
  }

  let db = client.db('TodoApp');
  console.log('connected to MongoDB server .');

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5a95ed43d2d9ac8df2a8ceec')
  // },{
  //   $set : {
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5a95d46c0a57b52194ef37d4')
  },{
    $set : {
      name : 'Moataz'
    }
   ,
    $inc : {
      Age : 1
    }
  },{
    returnOriginal : false
  }).then((result)=>{
    console.log(result);
  });
  // client.close();
});
