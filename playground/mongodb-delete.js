
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// cosnt { MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
  if(err){
    return console.log('unable to connect server .');
  }

  let db = client.db('TodoApp');
  console.log('connected to MongoDB server .');

  //deleteMany
  // db.collection('Todos').deleteMany({text : 'eat lunch'}).then((result )=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: "eat launch"}).then((result)=>{
    console.log(result);
  })
  // client.close();
});
