// GLOBAL VARIABLES (DON'T REMOVE ITS!)
var snippetIndex = 0;


// ==========================================================================================
// |                                    new                                                 |
// ==========================================================================================


// ==========================================================================================
// |                                    GOOD VS EVIL                                        |
// ==========================================================================================
function goodVsEvil(good, evil) {
    let goodWorth = [1, 2, 3, 3, 4, 10],
        evilWorth = [1, 2, 2, 2, 3, 5, 10],
        wins = {
            '1': 'Battle Result: Good triumphs over Evil',
            '-1': 'Battle Result: Evil eradicates all trace of Good',
            '0': 'Battle Result: No victor on this battle field'
        };

    function powerIt(amount, worth) { // amount = string; worth = array;
        let arr = amount.split(' ').map( (item, i) => ( item * worth[i]) );
        return arr.reduce( (accum, next) => (accum += next) )        
    };

    let result = Math.sign(powerIt(good, goodWorth) - powerIt(evil, evilWorth));
    return wins[result]
};

addSnippetOnPage(goodVsEvil);


// ==========================================================================================
// |                                  TESTS FROM ADRABA                                     |
// ==========================================================================================
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () { console.log(i); }, i * 1000);
//     })(i);
// };

// const arr1 = [1,2,3];
// const arr2 = arr1;
// arr1[2] = 0;
// console.log(arr1);
// console.log(arr2);

// const obj1 = {name: 'Andrew'};
// const obj2 = obj1;
// obj2.name = 'WitFlash';
// console.log(obj1);
// console.log(obj2);

// (function (x) {
//     return (function (y) {
//         console.log(x);
//     })(2)
// })(1);


// ==========================================================================================
// |                              ADD SNIPPET ON THE PAGE                                   |
// ==========================================================================================

function addSnippetOnPage(funcName) {
    let snippet = {
        main: {
            tag: 'div',
            class: 'snippet page__snippet',
            data: ['index', ++snippetIndex]
        },
        header: {
            tag: 'div',
            class: 'snippet__header'
        },
        title: {
            tag: 'h3',
            class: 'snippet__title',
        },
        button: {
            tag: 'button',
            class: 'button snippet__button',
            data: ['expand', 'button'],
            type: 'button'
        },
        body: {
            tag: 'pre',
            class: 'snippet__body',
            data: ['expand', 'content']
        },
    };

    for (element in snippet) {
        let node = snippet[element];
        let newElem = document.createElement(node.tag);
        newElem.className = node.class;
        if (node.data) {
            newElem.dataset[node.data[0]] = node.data[1];
        };
        if (node.type) {
            newElem.setAttribute('type', node.type);
        };
        snippet[element] = newElem;
    };

    snippet.title.innerHTML = funcName.name;
    snippet.button.innerHTML = "+";
    snippet.body.innerHTML = funcName;

    snippet.header.appendChild(snippet.title);
    snippet.header.appendChild(snippet.button);
    snippet.main.appendChild(snippet.header);
    snippet.main.appendChild(snippet.body);

    document.querySelector('.page').appendChild(snippet.main);
};

addSnippetOnPage(addSnippetOnPage);
addSnippetOnPage(addSnippetOnPage);


// ==========================================================================================
// |                              SHOW / HIDE FULL SNIPPET                                  |
// ==========================================================================================
var snippets = document.querySelectorAll('[data-index]');

snippets.forEach( function(item) {
    item.addEventListener('click', function(e) {
        if (e.target.dataset.expand == 'button') {
            let block = this.querySelector('[data-expand="content"]');
            block.classList.toggle('snippet__body_show');
        }
    });
})