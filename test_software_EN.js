
function SymboltoNum(s) {
    const alienNums = {
        'A': 1,
        'B': 5,
        'Z': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'R': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        // Check last & Check 4 9 40 90 400 900
        if (i + 1 < s.length && alienNums[s[i]] < alienNums[s[i+1]]) {
            result += (alienNums[s[i+1]] - alienNums[s[i]]);
            i++;
        } else {
            result += alienNums[s[i]];
        }
    }

    return result;
}


//test 

// console.log(SymboltoNum("AAA"));
// console.log(SymboltoNum("LBAAA"));
// console.log(SymboltoNum("RCRZCAB"));
