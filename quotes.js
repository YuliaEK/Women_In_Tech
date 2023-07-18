var quotes = [
    '“If we do not share our stories and shine a light on inequities, things will not change.” - Ellen Pao',
    '“Life is a series of building, testing, changing and iterating.” - Lauren Mosenthal',
    '“A creative block is nature\’s way of calling in a moment of self-reflection. In order to improve, you need to stop between sessions and think about those steps.” - Susan Lin',
    '“A creative block is nature\’s way of calling in a moment of self-reflection. In order to improve, you need to stop between sessions and think about those steps.” - Susan Lin',
    '“Trust in yourself, believe that your voice matters, and know that your words are good enough.” - Amber Gordon',
    
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById ('quoteDisplay').innerHTML = quotes[randomNumber];
}