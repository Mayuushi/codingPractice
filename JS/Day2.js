const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function inputSample(){
    readline.question("Sample input: ", (sample)=>{
        sample = String(sample);
        readline.close();

    })
}

inputSample();