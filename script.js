// ==========================================================================================
// |                                    new                                        |
// ==========================================================================================


// ==========================================================================================
// |                                    GOOD VS EVIL                                        |
// ==========================================================================================
{
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
}

let snippet = document.createElement('div'),
    title = document.createElement('h3'),
    body = document.createElement('pre');

title.className = "snippet__title";
title.innerHTML = goodVsEvil.name;
body.className = "snippet__body";
body.innerHTML = goodVsEvil;

snippet.className = "snippet page__snippet";
snippet.appendChild(title);
snippet.appendChild(body);

document.querySelector('.page').appendChild(snippet);
}

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