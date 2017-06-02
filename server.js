//dependencies

let express = require('express');
let app = express();
const path = require('path');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let cors = require('cors');
app.use(cors());
const jwt = require('express-jwt');//npm install
const jwks = require('jwks-rsa');//npm install

//Use the angular Folder
app.use(express.static(__dirname + '/public/dist'));

const authCheck = jwt({
        secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://shrutha.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
     audience: 'ramen-taka-api',
    issuer: "https://shrutha.auth0.com/",
    algorithms: ['RS256']
});

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');
mongoose.Promise = global.Promise;

//Schemas
var Schema = mongoose.Schema;
var MenuSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  description: {type: String, required: true, minlength: 2},
  price: {type: String, required: true},
  category: {type: String, required: true},
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  updatedBy: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  _menu:{type: Schema.Types.ObjectId, ref: 'Menu'},
});

var User = mongoose.model('User', UserSchema);
var Menu = mongoose.model('Menu', MenuSchema);

//get all products
app.get('/allmenu', function(req, res){
  Product.find({}, function (err, menu){
    console.log("server log all menu items: ", menu)
    res.json(menu);
  })
})

//get all of certain category
app.get('/menu/:category', function(req, res){
  console.log("server category:", req.params.category);
  Menu.find({category: category}, function (err, menu){
    console.log("server", menu)
    res.json(menu);
  })
})

//get admin users
app.get('/users', function(req, res){
  User.find({}, function (err, users){
    if(err){
      res.json({message:"error",error:err});
    }
    else{
      res.json({message:"success",users:users});
    }
    
  });//find ends
});//get ends

//create new menu
// app.post('/newmenu', function(req, res){
//   console.log("POST DATA", req.body);
//   var newMenu = new Menu({name: req.body.name, description: req.body.desc, price: req.body.price, category: req.body.category, createdBy: req.body.createdBy, updatedBy: req.body.updatedBy});
//   console.log("NEW MENU");
//   newMenu.save(function(err){
//     if(err){
//       console.log('error');
//       res.json(err)
//     }
//     else{
//       console.log('success');
//       res.json('success')
//     }
//   })
// });

//create new user
// app.post('/newuser', function(req, res){
//   console.log("POST DATA", req.body);
//   var newUser = new User({ <new user params go here > });
//   console.log("NEW USER");
//   newUser.save(function(err){
//     if(err){
//       console.log('error');
//       res.json(err)
//     }
//     else{
//       console.log('success');
//       res.json('success')
//     }
//   })
// });

// //show one product
// app.get('/product/:id', function(req, res){
//    console.log("id:",req.params.id);
//    Product.findOne({_id: req.params.id}).populate('seller').exec(function(err, product){
//        console.log('success')
//        console.log(product);
//        res.json(product)
//      });
//    });

// edit&update product
// app.post('/editmenu/:id', function(req, res){
//  console.log("EDIT MENU SERVER-SIDE", req.params.id);

//  Menu.update({_id: req.params.id}, {name: req.body.name, desc: req.body.desc, price: req.body.price, updatedBy: req.body.updatedBy, category: req.body.category}, function(err){
//    if(err){
//      console.log('errors')
//    }
//    else{
//      console.log('success')
//      res.redirect(somepath)
//    };
//  });
// });

//delete a product
// app.get('/delete/:id', function(req, res){
//     console.log("DELETE ID");
//    console.log(req.params.id);
//    Menu.findByIdAndRemove(req.params.id, function (err, menu) {
//      if(err){
//        // console.log('error')
//       //  console.log(star.errors);
//        res.json(err)
//      }
//      else{
//        console.log('success')
//        res.redirect(somepath);
//      };
//    });
//  });

//all other routes
app.get('*', function(req, res){
    res.sendFile(path.resolve('public/dist/index.html'));
})

//server listening...
app.listen(8000);
