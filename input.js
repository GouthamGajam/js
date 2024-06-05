const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter something: ', (input) => {
    console.log('You entered:', input);
    readline.close();
  });
  