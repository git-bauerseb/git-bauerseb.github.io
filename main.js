let articles = [
    // Verlet integration
    {
            searchTerms: 'verlet',
            date: new Date(2021, 8, 13),
            header: 'Verlet Integration for Motion Simulation',
            description: 'Using verlet integration to generate physics simulation '
            + 'of clothes and other objects',
            topics: ['Physics', 'Simulation'],
            url: 'verlet.html'
    },
    // Brainfuck
    {
        searchTerms: 'brainfuck',
        date: new Date(2021, 8, 10),
        header: 'Stepwise brainfuck interpreter',
        description: 'A small brainfuck interpreter that shows the steps taken',
        topics: ['Computer Science', 'Interpreter'],
        url: 'brainfuck.html'
    },
    // Matrix calculus
    {
        searchTerms: 'matrix calculus',
        date: new Date(2021, 8, 21),
        header: 'Identities for Matrix Calculus used in Deep Learning',
        description: 'A collection of matrix identities used for the backprop algorithm and other stuff ' +
        'related to deep learning',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    // Line drawing
    {
        searchTerms: 'line drawing',
        date: new Date(2021, 8, 21),
        header: 'Pixel-based line drawing',
        description: 'Here I present an algorithm how to draw a line with given endpoints on a per pixel basis',
        topics: ['Computer Science', 'Deep Learning'],
        url: 'matrix_calculus.html'
    },
    
    ];
    
    
    let searchBtn = document.getElementById('search');
    let resultDiv = document.getElementById('search-results');
    
    
    let searchTerm = document.getElementById('search-term');

    let months = {
        1: 'January',
        2: 'Februrary',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    };
    
    function constructResult(article) {

        /*

        <div class="blog-post">
            <h2 class="blog-post-title">Matrix Calculus for Deep Learning</h2>
            <p class="blog-post-meta">August 18, 2021 by <strong>Sebastian Bauer</strong></p>

            <p>This blog post shows a few different types of content that's supported and styled with Bootstrap.
                Basic typography, images, and code are all supported.</p>
            <hr>
        </div>


        */

    
        let card = document.createElement('div');
        card.setAttribute('class', 'blog-post');
    
        // Header
        let cardHeader = document.createElement('h5');
        cardHeader.setAttribute('class', 'blog-post-title');
        cardHeader.setAttribute('style', 'font-size: 2rem');

        cardHeader.textContent = article.header;

        // Date
        let info = document.createElement('p');
        info.setAttribute('class', 'blog-post-meta');
        info.textContent = months[article.date.getMonth()] + ' ' + article.date.getDate() + ', ' + article.date.getFullYear();


        
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
    
    
        card.appendChild(cardHeader);
        card.appendChild(info);
        card.appendChild(cardBody);

        // Add separator
        let separator = document.createElement('hr');
        card.appendChild(separator);

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
    
    
        let searchedArticles = getArticlesByLevenshtein(searchTerm.value);
    
        searchedArticles.forEach(art => {
            let result = constructResult(art);
            resultDiv.append(result);
        });
    };

mapper = {
    1: 'a',
    2: 'b',
    3: 'e',
    4:'g',
    5:'i',
    6:'l',
    7:'m',
    8:'n',
    9:'r',
    10:'s',
    11:'t',
    12:'u',
    13:'.',
    14:'@',
    15: 'c',
    16: 'o'
};



// Obscure email such that it cannot directly be found
function generateEmail() {

    let vals = [7,1,5,6, 13, 2,1,12,3,9,10,3,2,14,4,7,1,5,6,13,15,16,7];
    
    let m = '';

    vals.forEach(val => {
        m += mapper[val];
    });

    return m;
}

// On load javascript
document.querySelector('body').onload = () => {

    // Make arithmetic question
    let a = Math.floor(Math.random() * 30);
    let b = Math.floor(Math.random() * 40);

    let ans = a + b;

    // Select random question
    // let r = Math.ceil(Math.random() * quests.length) - 1;
    // r = r < 0 ? 0 : r;

    let quest = {q: `What is ${a} + ${b}?`, a: `${ans}`};

    // Generate riddle for 
    document.getElementById('question').textContent = quest.q;

    document.getElementById('answer').onclick = () => {
        let answer = document.getElementById('riddle-answer').value;

        if (answer == quest.a) {

            let link = document.createElement('a');
            link.setAttribute('href', `mailto: ${generateEmail()}`);
            link.textContent = generateEmail();

            document.getElementById('email').appendChild(link);
        }
    };
};