// Calculator Program


  


// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;

// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "ERROR";
//     }

// }

// function clearDisplay(){
//     display.value = "";

// }


function addToResult(value) {
    document.getElementById('display').value += value;
  }

  function clearResult() {
    document.getElementById('display').value = '';
  }

  function backspaceResult(value) {
    var display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }

  function reciprocalResult() {
    var display = document.getElementById('display');
    var currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = 1 / currentValue;
        } else {
          alert("Cannot divide by zero!");
        }
      }

        
        function squareResult() {
          var display = document.getElementById('display');
          var currentValue = parseFloat(display.value);
          display.value = currentValue * currentValue;
        }
        
        function sqrtResult() {
          var display = document.getElementById('display');
          var currentValue = parseFloat(display.value);
          display.value = Math.sqrt(currentValue);
      } 

      function changeSignResult() {
        var display = document.getElementById('display');
        var currentValue = parseFloat(display.value);
        display.value = -currentValue;
    }


  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }





 document.getElementById('btnPercent').addEventListener('click', function() { addToResult('%'); });
 document.getElementById('btnClear').addEventListener('click', clearResult);
 document.getElementById('btnClearAll').addEventListener('click', clearResult);
 document.getElementById('btnBackspace').addEventListener('click', backspaceResult);
 document.getElementById('btnReciprocal').addEventListener('click', reciprocalResult);
 document.getElementById('btnSqrt').addEventListener('click', sqrtResult);
 document.getElementById('btnChangeSign').addEventListener('click', changeSignResult);


    document.getElementById('btn1').addEventListener('click', function() { addToResult('1'); });
    document.getElementById('btn2').addEventListener('click', function() { addToResult('2'); });
    document.getElementById('btn3').addEventListener('click', function() { addToResult('3'); });
    document.getElementById('btnPlus').addEventListener('click', function() { addToResult('+'); });

    document.getElementById('btn4').addEventListener('click', function() { addToResult('4'); });
    document.getElementById('btn5').addEventListener('click', function() { addToResult('5'); });
    document.getElementById('btn6').addEventListener('click', function() { addToResult('6'); });
    document.getElementById('btnMinus').addEventListener('click', function() { addToResult('-'); });

    document.getElementById('btn7').addEventListener('click', function() { addToResult('7'); });
    document.getElementById('btn8').addEventListener('click', function() { addToResult('8'); });
    document.getElementById('btn9').addEventListener('click', function() { addToResult('9'); });
    document.getElementById('btnMultiply').addEventListener('click', function() { addToResult('*'); });

    document.getElementById('btn0').addEventListener('click', function() { addToResult('0'); });
    document.getElementById('btnDecimal').addEventListener('click', function() { addToResult('.'); });
    document.getElementById('btnEquals').addEventListener('click', calculateResult);
    document.getElementById('btnDivide').addEventListener('click', function() { addToResult('/'); });



    function limitInput() {
      var display = document.getElementById('display');
      var maxLength = display.maxLength;

      if (display.value.length > maxLength) {
          display.value = display.value.slice(0, maxLength);
      }
  }