    let f = 0;
    let s = 0; 
    const firstRow = 'мама мыла раму';
    const secondRow = 'собака друг человека';

for(let i=0; i < firstRow.length; i++) {
    if(firstRow[i]==="а") {
        f++
        }
    }
    
 for(let i=0; i < secondRow.length; i++) {
    if(secondRow[i]==="а") {
        s++
        }
    }
if (f>s) {
        console.log (firstRow)
    } else {
        console.log (secondRow)  
    }
