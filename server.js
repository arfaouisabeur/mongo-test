const mongoose = require('mongoose');
const express = require('express');
const collection= require('mongo')
const cors = require('cors');
const app = express();

app.use(cors());
mongoose.connect('mongodb+srv://cluster0.6witiyw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user:"arfaouisaber140",
  pass:"sabersabersaber"
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json())
app.use(express.urlencoded({extended:true}));
const genreSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  });

const Genre = mongoose.model('Genre', genreSchema);



app.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    console.log(genres)
    return res.json(genres);
  });

 app.post('/', async (req, res) => {

    const{msg}=req.body
    
  
    let genre = new Genre({ name: msg });
    genre = await genre.save();
    
    res.send(genre);
  });
  



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));