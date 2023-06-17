const http = require('http'); // 1 - Import Node.js core module
const fs = require('fs');
var server = http.createServer(function (req, res) {   // 2 - creating server
    let method = req.method;
    let url = req.url;
    if(method === 'GET'){
        if(url === '/'){
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>Nie podales pliku</p>');
        }
        else{
            let file = url.substring(1);
            fs.readFile(`files/${file}`, 'utf8', (err, data) => {
                if (err) {
                  res.statusCode = 404;
                  res.setHeader('Content-Type', 'text/html');
                  res.write('<p>Plik nie istnieje!</p>');
                } else {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'text/html');
                  res.write(data);
                }
                res.end();
              }
    )}
    }
    else if(method === 'POST'){
        if (url === '/') {
            res.statusCode = 400;
            res.end('Podaj nazwę pliku');
          } else {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              const fileName = url.substring(1); 
              const text = body.trim();
              fs.appendFile(`files/${fileName}`, `${text}\n`, 'utf8', (err) => {
                if (err) {
                  res.statusCode = 500;
                  res.end(`Błąd przy zapisie do pliku ${fileName}: ${err.message}`);
                } else {
                  res.statusCode = 200;
                  res.end(`zapisano ${fileName}: ${text}`);
                }
              });
            });
          }
    }
    if (method === 'DELETE') {
        if (url === '/') {
          res.statusCode = 400;
          res.end('Podaj nazwę pliku w URL');
        } else {
          const fileName = url.substring(1); 
          fs.unlink(`files/${fileName}`, (err) => {
            if (err) {
              res.statusCode = 500;
              res.end(`Błąd przy usuwaniu pliku ${fileName}: ${err.message}`);
            } else {
              res.statusCode = 200;
              res.end(`Usunąłem plik ${fileName}`);
            }
          });
        }
      }
});

server.listen(5000, ()=>{
    console.log('serwer uruchomiony na porcie 5000');
}); //3 - listen for any incoming requests
