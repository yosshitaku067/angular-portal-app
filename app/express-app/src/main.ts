import * as express from 'express';
import * as Path from 'path';
import * as fs from 'fs';
import * as multer from 'multer';
const app = express();
const bodyParser = require('body-parser');

const siteMapFilePath = './site-map/site-map.json';

let route = '';
if (process.argv.length === 3) {
  route = process.argv[2];
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 保存したいパス
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router
  .get('/api/site-map', (req, res) => {
    res.status(200).sendFile(Path.resolve(siteMapFilePath));
  })
  .post('/api/site-map', (req, res) => {
    try {
      const newSiteMap = JSON.stringify(req.body, null, 2);
      const filePath = Path.resolve(siteMapFilePath);
      fs.writeFileSync(filePath, newSiteMap, {
        encoding: 'utf-8',
      });
      res.status(200).send('success');
    } catch (err) {
      res.status(500).send('サーバーエラー');
    }
  })
  .get('/api/images-list', (req, res) => {
    try {
      const images = fs
        .readdirSync(Path.resolve('./images'))
        .filter(file => Path.parse(file).ext.toLowerCase() === '.png');
      res.status(200).send(images);
    } catch (err) {
      res.status(500).send('サーバーエラー');
    }
  })
  .get('/api/images/:file', (req, res) => {
    try {
      const file = req.params.file;
      res.status(200).sendFile(Path.resolve('./images/' + file));
    } catch (err) {
      res.status(500).send('サーバーエラー');
    }
  })
  .delete('/api/images/:file', (req, res) => {
    try {
      const file = req.params.file;

      fs.unlinkSync(`./images/${file}`);

      res.status(200).send('サクセス');
    } catch (err) {
      res.status(500).send('サーバーエラー');
    }
  })
  .post('/api/images/:file', upload.single('file'), (req, res) => {
    try {
      res.status(200).send('サクセス');
    } catch (err) {
      res.status(500).send('サーバーエラー');
    }
  });

app.use(express.static('www'));

app.use(`/${route}`, router);

app.listen(3000, () => {
  console.log('listen on 3000');
});
