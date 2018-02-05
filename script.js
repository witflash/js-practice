// GLOBAL VARIABLES (DON'T REMOVE ITS!)
var snippetIndex = 0;


// ==========================================================================================
// |                             FIBONACCI with RECURSION                                   |
// ==========================================================================================

function getFibonacciRecursion(n) {
    if (n === 1) {
        return [0, 1];
    }

    let fib = getFibonacciFor(n - 1),
        len = fib.length;
    fib.push(fib[len - 1] + fib[len - 2]);
    
    return fib;
}

addSnippetOnPage(getFibonacciRecursion);


// ==========================================================================================
// |                                FIBONACCI with CYCLE                                    |
// ==========================================================================================

function getFibonacciFor(n) {
    let fib = [0, 1];

    for (i = 0; i < (n -1); i++) {
        let len = fib.length;
        fib.push(fib[len - 1] + fib[len - 2]);
    }

    return fib.slice(1);
}

addSnippetOnPage(getFibonacciFor)


// ==========================================================================================
// |                                CHECK BRACKETS BALANCE                                  |
// ==========================================================================================

function checkBrackets(str) {
	let open = {
		'(': ')',
		'[': ']',
		'<': '>'
    };
    let close = {
        ')': true,
        ']': true,
        '>': true
    };
    let stack = [];

    for (i = 0; i < str.length; i++) {
        let char = str[i];
        if (open[char]) {
            stack.push(char);
        } else if (close[char]) {
            if (open[stack.pop()] != char) {
                return 0;
            }
        }
    }
    return stack.length == 0 ? 1 : 0;
}

addSnippetOnPage(checkBrackets);



// ==========================================================================================
// |                                    NOTADAPTIVE FUNC                                    |
// ==========================================================================================

function notGoodCode(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=s.length-1;
        var aIndex=-1;
        var bIndex=-1;

        while ((aIndex==-1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;
        	i--;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
    }
};

addSnippetOnPage(notGoodCode);

function itsGoodCode (s, a, b) {
    if (!s.length) {
        return -1;
    };

    return s.indexOf(a) > s.indexOf(b) ? s.indexOf(a) : s.indexOf(b);
}

addSnippetOnPage(itsGoodCode);


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
            class: 'button button_collapse snippet__button',
            data: ['expand', 'button'],
            type: 'button'
        },
        body: {
            tag: 'div',
            class: 'snippet__body',
            data: ['expand', 'content']
        },
        code: {
            tag: 'pre',
            class: 'snippet__code',
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
    snippet.code.innerHTML = funcName;

    snippet.header.appendChild(snippet.title);
    snippet.header.appendChild(snippet.button);
    snippet.body.appendChild(snippet.code);
    snippet.main.appendChild(snippet.header);
    snippet.main.appendChild(snippet.body);

    document.querySelector('.page').appendChild(snippet.main);
};

addSnippetOnPage(addSnippetOnPage);
addSnippetOnPage(toggleVisibility);
addSnippetOnPage(createNode);


// ==========================================================================================
// |                              SHOW / HIDE FULL SNIPPET                                  |
// ==========================================================================================

var snippets = document.querySelectorAll('[data-index]');

snippets.forEach( function(item) {
    item.addEventListener('click', function(e) {
        if (e.target.dataset.expand == 'button') {
            let block = this.querySelector('[data-expand="content"]');
            let button = this.querySelector('[data-expand="button"]')
            toggleVisibility(block, 500);
        }
    });
})


function toggleVisibility (elem, timing) {

    let show = function (elem, timing) {

        let getHeight = function () {
            elem.style.display = 'block';
            let height = elem.scrollHeight + 'px';
            elem.style.display = '';
            return height;
        };

        let height = getHeight();
        elem.classList.add('is-visible');
        elem.style.height = height;

        window.setTimeout( function () {
            elem.style.height = '';
        }, timing);

    };

    let hide = function (elem, timing) {
        elem.style.height = elem.scrollHeight + 'px';

        window.setTimeout( function () {
            elem.style.height = '0';
        }, 1);

        window.setTimeout( function () {
            elem.classList.remove('is-visible');
        }, timing);

    };

    let toggle = function (elem, timing) {

        if (elem.classList.contains('is-visible')) {
            hide(elem, timing);
            return;
        };

        show(elem, timing);
    };

    toggle(elem, timing);

};


// ==========================================================================================
// |                                    STICKY HEADER                                       |
// ==========================================================================================

var header = document.querySelector('.header');
var headerTitle = document.querySelector('.header__title');
var sticky = header.offsetTop;

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > sticky) {
        headerTitle.classList.add('header__title_narrow');
        header.classList.add('sticky');
    } else {
        headerTitle.classList.remove('header__title_narrow');
        header.classList.remove('sticky');
    }
})


// ==========================================================================================
// |                                      SHOW MORE                                         |
// ==========================================================================================

var hiddenText = document.querySelector('[data-show-more]');
textToHide(hiddenText, 200);

function textToHide (node, letters) {
    let data = node.innerHTML;
    if (data.length <= letters) {
        return;
    }

    let newButton = {
            tag: 'button',
            attributes: {
                class: 'button button_more page__button',
                type: 'button',
                'data-event': 'show-more'
            }
        };
    let button = createNode(newButton, 'Show More');

    node.innerHTML = data.slice(0, letters) + '...';
    node.appendChild(button);

    let isHidden = true;
    button.addEventListener('click', function () {
        if (isHidden) {
            node.firstChild.textContent = data;
            button.textContent = 'Hide Text';
        } else {
            node.firstChild.textContent = data.slice(0, letters) + '...';
            button.textContent = 'Show More';
        }
        isHidden = !isHidden;
    })
};


// ==========================================================================================
// |                                     NODE CREATOR                                       |
// ==========================================================================================
// INFO:
// node = {tag: name[, attributes: {atributeName: value, ...}]}
// inner = some text (not a DOM element)

function createNode (node, inner) {
    let newNode = document.createElement(node.tag);
    for (name in node.attributes) {
        newNode.setAttribute(name, node.attributes[name]);
    }
    if (inner) {
        newNode.innerHTML = inner;
    }
    return newNode;
};