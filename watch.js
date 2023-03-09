let intervalId = null;


/*_____________ step-1 start _______________*/ 
// setInterval(showTime, 1000)

let num= 0;
function showTime(){
    const count= (++num)
    if(count === 60){
        clearInterval(intervalId)
    }
    document.getElementById('display').innerText=count;
}

/*_____________ step-1 end _______________*/ 

function startTime (){
    intervalId = setInterval(showTime, 1000) 
}

function stopTime (){
    clearInterval(intervalId)
}

function reset (){
    document.getElementById("display").innerText = '';
  }

// call function
showTime()