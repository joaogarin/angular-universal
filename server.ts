import * as express from 'express';
import {ng2engine} from 'angular2-universal-preview';

// Angular 2
import {App} from './src/app';

let app = express();

app.set('port', 80);

// Express View
app.engine('.ng2.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'ng2.html');


// static files
app.use(express.static(__dirname));


app.use('/', (req, res) => {
  res.render('index', { App });
});


app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
