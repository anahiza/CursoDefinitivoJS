var express=require ('express');
var app=express();
var ext = require('file-extension');

var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now()+'.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');


app.set('view engine','pug');

app.use(express.static('public'));


app.get('/', function(req, res){
	res.render('index',{title: 'Platzigram'});
})

app.get('/signup',function(req, res){
    res.render('index', {title: 'Platzigram - Sign Up'});
})

app.get('/signin',function(req, res){
    res.render('index', {title: 'Platzigram - Sign In'});
})

app.get('/api/pictures', function(req,res){
	var pictures=[
		{
			user:{
				username:'Anahi',
				avatar:'https://lh3.googleusercontent.com/-vHUbokKYy8E/AAAAAAAAAAI/AAAAAAAACIo/xcEEOpJnzfI/s60-p-rw-no/photo.jpg'
			},
			url:'https://image.freepik.com/free-photo/wooden-table-with-blurred-background_1134-14.jpg',
			likes:0,
			liked: false,
			createdAt: +new Date()
		},
		{
			user:{
				username:'Anahi',
				avatar:'https://lh3.googleusercontent.com/-vHUbokKYy8E/AAAAAAAAAAI/AAAAAAAACIo/xcEEOpJnzfI/s60-p-rw-no/photo.jpg'
			},
			url:'https://image.freepik.com/free-photo/working-with-a-coffee_1112-145.jpg',
			likes:156,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()-10)
			
		}

	];
	setTimeout(function(){
		res.send(pictures);
	}, 1000);	
})
app.post('/api/pictures', function(req,res){
    upload(req,res, function(err){
        if (err){
            return res.send(500, "Error uploading file");
        }
        res.sed("File uploaded");
        
    })
})

app.get('/user',function(req, res){
	res.render('index');
})

app.listen(3000,function(err){
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('Platzigram escuchando en el puerto 3000');
})
