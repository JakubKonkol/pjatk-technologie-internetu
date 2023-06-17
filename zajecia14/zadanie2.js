const fs = require('fs');

const command = process.argv[2];
const file = process.argv[3];
const text = process.argv[4];
if (!command) {
  console.log('Podaj komendę (open, append lub delete) jako pierwszy parametr!');
  process.exit(1);
}

if (command === 'open') {
  if (!file) {
    console.log('Podaj nazwę pliku jako drugi parametr!');
    process.exit(1);
  }
  fs.readFile(`files/${file}`, 'utf8', (err, data) => {
    if (err) {
      console.log(`Plik ${file} nie istnieje!`);
    } else {
      console.log(`${file}: ${data}`);
    }
  });
}

if (command === 'append') {
  if (!file || !text) {
    console.log('Podaj nazwę pliku jako drugi parametr i tekst do dopisania jako trzeci parametr!');
    process.exit(1);
  }
  fs.appendFile(`files/${file}`, `${text}\n`, 'utf8', (err) => {
    if (err) {
      console.log(`Błąd przy zapisie do pliku ${file}: ${err.message}`);
    } else {
      console.log(`Zapisałem do pliku ${file}: ${text}`);
    }
  });
}

if (command === 'delete') {
  if (!file) {
    console.log('Podaj nazwę pliku jako drugi parametr!');
    process.exit(1);
  }
  fs.unlink(`files/${file}`, (err) => {
    if (err) {
      console.log(`Błąd przy usuwaniu pliku ${file}: ${err.message}`);
    } else {
      console.log(`Usunąłem plik ${file}`);
    }
  });
}
