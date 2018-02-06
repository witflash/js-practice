// This file is for main actions on the page

// GLOBAL VARIABLES (DON'T REMOVE ITS!)
var snippetIndex = 0;

// add snippets from main.js
addSnippetOnPage(addSnippetOnPage);
addSnippetOnPage(toggleVisibility);
addSnippetOnPage(textToHide);
addSnippetOnPage(createNode);

//==============================================================================
//                         ADD SNIPPET ON THE PAGE                             |
//==============================================================================

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
            data: ['expandButton', snippetIndex],
            type: 'button'
        },
        body: {
            tag: 'div',
            class: 'snippet__body',
            data: ['expandContent', snippetIndex]
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


//==============================================================================
//                         SHOW / HIDE FULL SNIPPET                            |
//==============================================================================

document.addEventListener('click', function(e) {

    if (e.target.dataset.expandButton) {
        let index = e.target.dataset.expandButton;
        let snippet = this.querySelector(`[data-expand-content="${index}"]`);
        toggleVisibility(snippet, 500);
    }

});

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


//==============================================================================
//                               STICKY HEADER                                 |
//==============================================================================

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


//==============================================================================
//                               SHOW MORE TEXT                                |
//==============================================================================

var hiddenText = document.querySelector('[data-show-more]');
textToHide(hiddenText, 300);

function textToHide (node, letters) {
    let data = node.innerHTML;
    if (data.length <= letters) {
        return;
    }
    let dataCut = data.slice(0, letters) + '...';

    let newButton = {
            tag: 'button',
            attributes: {
                class: 'button button_more page__button',
                type: 'button',
                'data-event': 'show-more'
            }
        };
    let button = createNode(newButton, 'Show More');

    node.innerHTML = dataCut;
    node.parentNode.appendChild(button);

    let isHidden = true;
    button.addEventListener('click', function () {
        if (isHidden) {
            node.innerHTML = data;
            button.textContent = 'Hide Text';
        } else {
            node.innerHTML = dataCut;
            button.textContent = 'Show More';
        }
        isHidden = !isHidden;
    })
};


//==============================================================================
//                                 NODE CREATOR                                |
//==============================================================================
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