let articles = [
{
        searchTerms: 'verlet',
        header: 'Verlet Integration for Motion Simulation',
        description: 'Using verlet integration to generate physics simulation '
        + 'of clothes and other objects',
        topics: ['Physics', 'Physics Simulation', 'Simulation'],
        url: 'verlet.html'
},
{
    searchTerms: 'brainfuck',
    header: 'Stepwise brainfuck interpreter',
    description: 'A small brainfuck interpreter that shows the steps taken',
    topics: ['Computer Science', 'Languages', 'Interpreter'],
    url: 'brainfuck.html'
},
{
    searchTerms: 'matrix calculus',
    header: 'Identities for Matrix Calculus used in Deep Learning',
    description: 'A collection of matrix identities used for the backprop algorithm and other stuff ' +
    'related to deep learning',
    topics: ['Computer Science', 'Mathematics', 'Deep Learning', 'Matrix Calculus'],
    url: 'matrix_calculus.html'
}
];


let searchBtn = document.getElementById('search');
let resultDiv = document.getElementById('search-results');


let searchTerm = document.getElementById('search-term');

function constructResult(article) {

    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('style', 'margin: 1em');

    // Header
    let cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'card-header');
    
    let headerTxt = article.header;

    let title = document.createElement('strong');
    title.textContent = headerTxt;


    // Breadcrums
    let crum = document.createElement('ol');
    crum.setAttribute('class', 'breadcrumb');

    article.topics.forEach(topic => {
        let item = document.createElement('li');
        item.setAttribute('class', 'breadcrumb-item active');
        item.setAttribute('aria-current', 'page');

        let itemContent = document.createElement('a');
        itemContent.textContent = topic;

        item.appendChild(itemContent);
        crum.appendChild(item);
    });


    // Description
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    let description = document.createElement('p');
    description.textContent = article.description;


    cardBody.appendChild(crum);
    cardBody.appendChild(description);


    // Append link
    let link = document.createElement('a');
    link.setAttribute('href', article.url);
    link.textContent = 'Visit';

    cardBody.append(link);


    cardHeader.appendChild(title);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    return card;
}

function levenshteinScore(a, b) {
    if (b.length == 0) {return a.length;}
    if (a.length == 0) {return b.length;}

    if (a[0] == b[0]) {
        return levenshteinScore(a.substring(1, a.length), b.substring(1, b.length));
    }

    return 1 + Math.min(
        levenshteinScore(a.substring(1, a.length), b),
        Math.min(
            levenshteinScore(a, b.substring(1,b.length)),
            levenshteinScore(a.substring(1, a.length), b.substring(1,b.length)),
        )
    );
}

function levenshteinScoreArray(keywords, searched) {
    let score = 0;

    keywords.forEach(k => {
        score += levenshteinScore(k, searched);
    });

    return score / keywords.length;
}

function getArticlesByLevenshtein(term) {

    let scores = [];

    articles.forEach(article => {

        let keywords = article.searchTerms.split(' ');

        scores.push({
            score: levenshteinScoreArray(keywords, term),
            article: article
        });
    });



    scores.sort(
        (art1, art2) => {

            if (art1.score < art2.score) {return 1;}
            if (art1.score > art2.score) {return -1;}

            return 0;
        }
    );


    let pushed = 0;
    let result = [];

    while (pushed < 5 && (scores.length > 0)) {
        result.push(scores.pop().article);
        pushed++;   
    }

    return result;
}

searchBtn.onclick = () => {

    // Remove all children
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }

    console.log('Hello World');

    let txt = document.createElement('p');
    txt.append('Hier steht ein Text');


    let searchedArticles = getArticlesByLevenshtein(searchTerm.value);

    searchedArticles.forEach(art => {
        let result = constructResult(art);
        resultDiv.append(result);
    });
};