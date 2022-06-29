// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const cassandra = require('cassandra-driver');

// async function run() {
   
    // client.connect(function(err, result){
    //     console.log('editsubscriber: cassandra connected');
    //   });
  
    
    const client = new cassandra.Client({
       contactPoints: ['127.0.0.1:9042'], 
       localDataCenter: 'datacenter1',
       keyspace:'todo'
    });



// const client = new cassandra.Client({ 
//   contactPoints: ['host1', 'host2'],
//   localDataCenter: 'datacenter1'
// });

client.connect(function(err, result){
    console.log('editsubscriber: cassandra connected');
  });

function Cassandrom() {
    this.connections = [];
   
    this.models = {};
    this.modelSchemas = {};
   
    this.uuid = types.uuid;
   
    this.Types = require('./lib/types');
   
    this.UUIDType = require('./lib/schema/uuid');
    this.ListId = require('./lib/schema/listid');
   
    this.options = {
   
    };
   }


   


const kespace='CREATE KEYSPACE todo WITH replication  { class: SimpleStrategy , replication_factor:3};'
var createTable = 'CREATE TABLE todo.lis ( id UUID PRIMARY KEY,  email text, first_name text,last_name text)';

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
fastify.post('/additem', function(req, res){
    uid = cassandra.types.Uuid;
    id=uid.random();
    var upsertSubscriber = 'INSERT INTO todo.lis(id, email, first_name, last_name) VALUES(?,?,?,?)';
  
    client.execute(upsertSubscriber, [id, req.body.email, req.body.first_name, req.body.last_name],
      function(err, result){
        if(err){
        res.status(404).send({msg: err});
      } else {
        console.log('Subscriber Added');
        res.redirect('/');
      }
      });
  });


  fastify.get('/getallitem', function(req, res) {
    var getAllSubscribers='SELECT * FROM todo.lis'
    client.execute(getAllSubscribers,[], function(err, result){
      if(err){
        res.status(404).send({msg: err});
      } else {
        res.status(400).send('index', {
          subscribers: result.rows
        })
        console.log(result.rows);
      }
    });
  });


  fastify.post('/signIn', function(req, res) {
    const {name, email,password}=req.body;
    signInWithEmailAndPassword(auth, email, password)
            .then(cred => {
            console.log('user logged in:', cred.user);
            navigate('/');
    })
    .catch(err => {
      console.log(err.message)
    })
    
      }
    );
  fastify.post('/signUp', function(req, res) {
    const {name, email,password}=req.body;
    createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                updateProfile(cred.user,{
                    displayName:credential.name,
                })
                console.log('user created:', cred.user)
    
      }
    );
     } )
    fastify.post('/logout',(req,res)=>{
      signOut(auth)
            .then(()=>{
              console.log("You are logged out");
            })
            .catch((err)=>{
              console.log(err.message);
            })
    })
 




// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()