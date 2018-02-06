//==============================================================================
//                             FIBONACCI with RECURSION                        |
//==============================================================================

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


//==============================================================================
//                                FIBONACCI with CYCLE                         |
//==============================================================================

function getFibonacciFor(n) {
    let fib = [0, 1];

    for (i = 0; i < (n -1); i++) {
        let len = fib.length;
        fib.push(fib[len - 1] + fib[len - 2]);
    }

    return fib.slice(1);
}

addSnippetOnPage(getFibonacciFor)


//==============================================================================
//                              CHECK BRACKETS BALANCE                         |
//==============================================================================

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



//==============================================================================
//                            NOTADAPTIVE FUNC                                 |
//==============================================================================

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


//==============================================================================
//                                   GOOD VS EVIL                              |
//==============================================================================
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


//==============================================================================
//                                TESTS FROM ADRABA                            |
//==============================================================================
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