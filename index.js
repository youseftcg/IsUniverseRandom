const app = require('express')();
const port = process.env.PORT | 3000;
const textLength = 100000;

// Spin the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


// GET
app.get('*', (req, res) => {
    const quranVerse = '"Or were they created by nothing or were they the creators [of themselves]" [<a href="https://quran.com/en/at-tur/35">Quran 52:35</a>]';
    const title = `
        <br><h2 style="text-align: center;">Below is randomly generated text: can you discover a paragraph or even a sentence that makes sense?
        <br>If not, could the universe really be born of randomness?</h2>
        <h4 style="text-align: center;">${quranVerse}</h4>
        <p style="text-align: center;">If you want to argue that the text size is not enough, feel free to change the text size and explore the source code <a href="https://github.com/youseftcg/IsUniverseRandom">here</a></p>
    `;
    const randomText = getRandomText(textLength);
    res.send(`${title}<br>${randomText}`);
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