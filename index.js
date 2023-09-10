const app = require('express')();
const port = 3000;
const textLength = 100000;

// Spin the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


// GET
app.get('*', (req, res) => {
    let quranVerse = '"Or were they created by nothing or were they the creators [of themselves]" [<a href="https://quran.com/en/at-tur/35">Quran 52:35 </a>]';
    let text =
        '<h2 style="text-align: center;">The below text is randomly generated, try to find any meaningful paragraph, sentence or even a word. ' +
        'If you can\'t, if randomness can\'t produce a meaningful word, how would it produce the whole universe?</h2> <br>' +
        '<h4 style="text-align: center;">' + quranVerse + '</h4><br>';
        '<p style="text-align: center;">If you want to argue that the text size is not enough, feel free</p><br>';

    text += getRandomText(textLength);


    res.send(`${text}`);
});



/**
 * Randomly generates text
 *
 * @param length characters length to be returned
 * @returns random text
 */
function getRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}