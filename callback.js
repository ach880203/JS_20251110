function repeat(count, callBack){
    for(let idx = 0; idx < count; idx++){
        callBack(idx + 1);
    }
}

function origin(count){
    console.log(count);
    }

    function double(count){
        console.log(count*2);
            }
   
            
   repeat(5, double);   
   repeat(5, origin); 


   function repeat2(count, callBack){
    for(let idx = 0 ; idx < count; idx++){
        callBack(idx + 1);
    }
    function origin2(count){
        console.log(count);
        }

    let fA = (count) => {
        console.log(count);

    function double2(count){
        console.log(count*2);
            }

    let fB = (count) => {
        console.log(count*2);
    }

    repeat2(5, fB);
    repeat2(5, fA);
   }

   let greeting = (name) => `Hello, ${name}!`;

   function greeting(name){
    return `Hello, ${name}!`;
   }

   const greetingText = greeting('Alice');
   console.log(greetingText);