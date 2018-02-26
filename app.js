'use strict';

/* DRAW FIGURES WITH CYCLES */
function drawFigure() {
    let types = [
        'rectangle', 
        'right triangle', 
        'regular triangle', 
        'diamond'
    ];
    let errorMessage = "Incorrect enter. Please try again";
    let greeting = `What do you want to draw? (Enter the number)
        1: ${types[0]}
        2: ${types[1]}
        3: ${types[2]}
        4: ${types[3]}`;
    let type,
        width,
        height;

    while (true) {
        type = prompt(greeting);
        if (type > 0 && type <= types.length) break;
        alert(errorMessage);
    };
    
    width = userInput("Enter the figure's width (integer)", errorMessage);
    height = userInput("Enter the figure's height (integer)", errorMessage);

    console.log(`I'll draw the ${types[type - 1]} with ${width} width and ${height} height`);
    console.log(getFigure(type, width, height));


    function userInput(message, errorMessage) {
        let input;
        while (true) {
            input = prompt(message);
            if ( Number.isInteger(+input) && input > 0 ) break;
            alert(errorMessage);
        };
        return input;
    };

    function getFigure(type, width, height) {
        // Rectangle
        if (type == 1) {
            let figure = "";
            for (let i = 0; i < height; i++) {
                let row = "";
                for (let j = 0; j < width; j++) {
                    row += "*";
                }
                figure += row + "\n";
            }
            return figure;
        }
        
        // Right Triangle
        if (type == 2) {
            let row = '*';
            let figure = '';
            for (let i = 0; i < width; i++) {
                figure += (row + '\n');
                row += '*';
            }
            console.log('Height is ignored');
            return figure;
        }
    };
};

addSnippetOnPage(drawFigure);

/* SHIFTED DIFFERENT */
function shiftedDiff(first, second) {
    let count = 0;
    for (let i = 0; i < first.length; i++) {
        if (first == second) {
            return count;
        }
        first = first.slice(-1) + first.slice(0, -1);
        count++;
    }
    return -1;
}

addSnippetOnPage(shiftedDiff);

/* FORMAT PHONE NUMBER */
function createPhoneNumber(numbers) {
    let formatChars = { "0": "(", "4": ")", "5": " ", "9": "-" };
    for (let key in formatChars) {
        numbers.splice(key, 0, formatChars[key]);
    }
    return numbers.join("");
}

addSnippetOnPage(createPhoneNumber);

/* FIBONACCI with RECURSION */
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

/* FIBONACCI with CYCLE */
function getFibonacciFor(n) {
    let fib = [0, 1];

    for (i = 0; i < n - 1; i++) {
        let len = fib.length;
        fib.push(fib[len - 1] + fib[len - 2]);
    }

    return fib.slice(1);
}

addSnippetOnPage(getFibonacciFor);

/* CHECK BRACKETS BALANCE */
function checkBrackets(str) {
    let open = {
        "(": ")",
        "[": "]",
        "<": ">",
    };
    let close = {
        ")": true,
        "]": true,
        ">": true,
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

/* NOTADAPTIVE FUNC */
function notGoodCode(s, a, b) {
    var match_empty = /^$/;
    if (s.match(match_empty)) {
        return -1;
    } else {
        var i = s.length - 1;
        var aIndex = -1;
        var bIndex = -1;

        while (aIndex == -1 && bIndex == -1 && i >= 0) {
            if (s.substring(i, i + 1) == a) aIndex = i;
            if (s.substring(i, i + 1) == b) bIndex = i;
            i--;
        }

        if (aIndex != -1) {
            if (bIndex == -1) return aIndex;
            else return Math.max(aIndex, bIndex);
        } else {
            if (bIndex != -1) return bIndex;
            else return -1;
        }
    }
}

addSnippetOnPage(notGoodCode);

function itsGoodCode(s, a, b) {
    if (!s.length) {
        return -1;
    }

    return s.indexOf(a) > s.indexOf(b) ? s.indexOf(a) : s.indexOf(b);
}

addSnippetOnPage(itsGoodCode);

/* GOOD VS EVIL */
function goodVsEvil(good, evil) {
    let goodWorth = [1, 2, 3, 3, 4, 10],
        evilWorth = [1, 2, 2, 2, 3, 5, 10],
        wins = {
            "1": "Battle Result: Good triumphs over Evil",
            "-1": "Battle Result: Evil eradicates all trace of Good",
            "0": "Battle Result: No victor on this battle field",
        };

    function powerIt(amount, worth) {
        let arr = amount.split(" ").map((item, i) => item * worth[i]);
        return arr.reduce((accum, next) => (accum += next));
    }

    let result = Math.sign(powerIt(good, goodWorth) - powerIt(evil, evilWorth));
    return wins[result];
}

addSnippetOnPage(goodVsEvil);

// add snippets from main.js
addSnippetOnPage(addSnippetOnPage);
addSnippetOnPage(toggleVisibility);
addSnippetOnPage(textToHide);
addSnippetOnPage(createNode);
