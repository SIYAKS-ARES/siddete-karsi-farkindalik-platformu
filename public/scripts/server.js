const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Şiddet Haritası API Sunucusu Çalışıyor!');
});
app.get('/veri', (req, res) => {

  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Veri okuma hatası:', err);
      return res.status(500).send('Sunucu hatası');
    }

    const shiddetVerisi = JSON.parse(data);

    res.json(shiddetVerisi);
  });
});
app.get('/api/veriler', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Veri okunurken bir hata oluştu.');
    }
    res.json(JSON.parse(data));
  });
});
app.post('/api/veriler', (req, res) => {
  const yeniVeri = req.body;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Veri okunurken bir hata oluştu.');
    }

    const veriler = JSON.parse(data);
    veriler.push(yeniVeri);

    fs.writeFile('data.json', JSON.stringify(veriler, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Veri eklenirken bir hata oluştu.');
      }
      res.status(201).send('Yeni veri eklendi.');
    });
  });
});
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde dinliyor...`);
});
