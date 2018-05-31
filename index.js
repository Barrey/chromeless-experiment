const { Chromeless } = require('chromeless');
const path = require('path');

async function run(){
    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('https://www.tokopedia.com')
        .type('parsel', 'input[name="q"]')
        .click('.new-btn-search')
        .wait(5000)
        .screenshot({ filePath: path.join(__dirname, 'tokopedia.png')})

    console.log('image dir ', path.join(__dirname, 'tokopedia.png'))

    await chromeless.end()
}

run().catch(console.error.bind(console))