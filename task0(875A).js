const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What your number? \n', (answer) => {
    
    findX(+answer);

    rl.close();
});

function  findX(number) {              
    var result = 0;

    for (var i = 0; i < number; i++) {
        var sum = i;
        var line = String(i);

        for (var j = 0; j < line.length; j++) {
            sum += ( +line[j] );
        }

        if (sum == number) {
            if (result) result += (i + " ");
            else result = i + " ";
        }
    }
    
    console.log(result);
}
