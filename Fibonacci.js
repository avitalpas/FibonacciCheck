function isLegalInput() {
    // input numbers
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
    var lastNum = document.querySelector('#lastNum').value;

    if (num1 == '' || num2 == '' || lastNum == '') return false;
    else return true
}

function reset() {

    // input numbers
    document.querySelector('#num1').value = '';
    document.querySelector('#num2').value = '';
    document.querySelector('#lastNum').value = '';

    // hide result
    var resultDiv = document.querySelector('#result');
    resultDiv.classList.add('slide-out-bck-center')
    resultDiv.classList.remove('tilt-in-top-2')
    // resultDiv.hidden=true;

}

function checkFibonacci() {

    console.log('*** checking Fibonacci ***');

    // check if empty
    if (!isLegalInput()) {
        alert('not legal input');
    }
    else {
        // result div
        var resultDiv = document.querySelector('#result');
        var resultCount = document.querySelector('#resultCount');

        // input numbers
        var num1 = parseInt(document.querySelector('#num1').value);
        var num2 = parseInt(document.querySelector('#num2').value);
        var lastNum = parseInt(document.querySelector('#lastNum').value);

        // log to console
        console.log('num1:' + num1);
        console.log('num2:' + num2);
        console.log('last num:' + lastNum);

        // counter for result position
        var count = 3;

        // while nums sum is not last num, continue checking
        while (num1 + num2 != lastNum) {

            // if sum larger than sum, break, illegal series
            if( num1 + num2 > lastNum ) break;

            // log current nums
            console.log('--- counting --- ')
            console.log('num1: ' + num1);
            console.log('num2: ' + num2);

            // continue to next nums in series
            let tempNum = num2;
            num2 = num1 + num2;
            num1 = tempNum;

            // log new sum
            console.log('num1 + num2: ' + (num1 + num2));

            // add to counter
            count++;
        }

        if( num1 + num2 > lastNum ){
            console.log('--- result --- ')
            console.log(' illegal series ');

            resultCount.innerHTML = 'illegal series';
            resultDiv.hidden = false;
            resultDiv.classList.add('tilt-in-top-2');
        }
        else{
            console.log('--- result --- ')
            console.log(lastNum + ' location in Fibonacci:' + count);

            resultCount.innerHTML = count;
            resultDiv.hidden = false;
            resultDiv.classList.add('tilt-in-top-2');
        }
        
    }


}