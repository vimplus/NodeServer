const fs = require('fs');
const request = require('request');
const randomString = require('randomstring');


fs.readFile('./urls.list', async function (err, data) {
    if (err) {
        throw new Error(err);
    }
    const content = data.toString().replace(/\r\n|\s+/g, '');
    // console.log('-----content:', content)
    const imgUrls = content.split(';');
    console.log('-----imgUrls:', imgUrls)

    for (let i = 0; i < imgUrls.length; i++) {
        const url = imgUrls[i];
        const fileName = randomString.generate(10);
        request(url).pipe(fs.createWriteStream(`./images/${fileName}.jpg`))
    }
})
