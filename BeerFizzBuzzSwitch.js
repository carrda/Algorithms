let myBeer = '';

for (i = 99; i > 0; i--) {
    let isValid = true;
    

    switch(isValid) {
        case(i % 35 === 0):
            myBeer = 'Miller Lite';
            break;
   
        case(i % 7 === 0):
            myBeer = 'Miller';
            break;

        case(i % 5 === 0):
            myBeer = 'Lite';
            break;

         default:  
            myBeer = 'Beer' 

    }
    console.log(`${i} bottles of ${myBeer} on the wall, take one down, pass it around, ${i - 1} bottles of ${myBeer} on the wall.`);
}
