const tesseract = require('node-tesseract-ocr')
 
const config = {
  lang: 'eng',
  oem: 1,
  psm: 3
}
 console.log('tesseract :', tesseract);
tesseract
  .recognize('./test.png', config)
  .then(text => {
    console.log('Result:', text)
  })
  .catch(err => {
    console.log('error:', err)
  })