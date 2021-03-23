console.warn("Welcome to DaTI v0.85");
var pastequations = [];
const x = 0;
while (x == 0) { var equation = prompt("Equation: ");
  if (equation == "Addition") {
    var equ = "Addition";
    var numI = prompt("Addend 1: ")
    if (numI) {
      var sumI = parseFloat(numI);
      var numII = prompt("Addend 2: ");
      if (numII) {
        var sumII = parseFloat(numII);
        var totalSum = sumI + sumII;
        console.log("Sum: "+totalSum);
        pastequations.push(numI+" + "+numII+" = "+totalSum);
      }}}else if (equation == "Subtraction") {
      var equ = "Subtraction";
      var numI = prompt("Minuend: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Subtrahend: ");
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI - sumII;
          console.log("Difference: "+totalSum);
          pastequations.push(numI+" - "+numII+" = "+totalSum);
        }}}else if (equation == "Division") {
      var equ = "Division";
      var numI = prompt("Dividend: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Divisor: ");
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI / sumII;
          console.log("Quotient: "+totalSum);
          pastequations.push(numI+" / "+numII+" = "+totalSum);
        }}} else if (equation == "Multiplication") {
      var equ = "Multiplication";
      var numI = prompt("Factor: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Factor: ");
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI * sumII;
          console.log("Product: "+totalSum);
          pastequations.push(numI+" * "+numII+" = "+totalSum);
        }}} else if (equation == "Previous") {
      if (equ == "Addition") {
      console.log(numI+" + "+numII+" = "+totalSum);
      } else if (equ == "Subtraction") {
      console.log(numI+" - "+numII+" = "+totalSum);
      } else if (equ == "Division") {
      console.log(numI+" / "+numII+" = "+totalSum);
      } else if (equ == "Multiplication") {
      console.log(numI+" * "+numII+" = "+totalSum);
      } else if (equ == "Exponent") {
      console.log(numI+" ^ "+numII+" = "+totalSum);
      } else if (equ == "Absolute Value") {
      console.log("The absolute value of "+numI+" equals "+totalSum);
      } else if (equ == "Diameter") {
      console.log(numI+" * 2 = "+totalSum);
      }}else if (equation == "All") {
        console.warn("All equations:\n___");
        if (pastequations.length == 0) {
          pastequations.push("None");
        }
        var iterator = pastequations.values();
        for (let letter of iterator) {
          console.log(letter);
        }
        console.warn("–––");
      }else if (equation == "Exponent") {
      var equ = "Exponent";
      var numI = prompt("Base: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Exponent: ");
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = Math.pow(sumI, sumII);
          console.log("Solution: "+totalSum);
          pastequations.push(numI+" ^ "+numII+" = "+totalSum);
        }}} else if (equation == "Absolute Value") {
      var equ = "Absolute Value";
      var numI = prompt("Value: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var totalSum = Math.abs(sumI);
        console.log("Solution: "+totalSum);
        pastequations.push(totalSum);
      }}else if (equation == "Diameter") { var equ = "Diameter";
      var numI = prompt("Radius: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var totalSum = sumI * 2;
        console.log("Solution: "+totalSum);
        pastequations.push(numI+" * 2 = "+totalSum);
        }}else if (equation == "Radius") { var equ = "Radius";
      var numI = prompt("Circumference: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var tpi = 2 * Math.PI;
        var totalSum = sumI / tpi;
        console.log("Solution: "+totalSum);
        pastequations.push(numI+" / 2π = "+totalSum);
        }}else if (equation == "Area [C]") { var equ = "Area [C]";
      var numI = prompt("Radius: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var tpi = Math.PI * sumI;
        var totalSum = Math.PI * (sumI * sumI);
        console.log("Solution: "+totalSum);
        pastequations.push("π"+numI+" ^ 2 = "+totalSum);
        }}else if (equation == "Perimeter [S]") { var equ = "Perimeter [S]";
      var numI = prompt("Width/Length: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var totalSum = sumI * 4;
        console.log("Solution: "+totalSum);
        pastequations.push(numI+" * 4 = "+totalSum);
        }}else if (equation == "Perimeter [R]") { var equ = "Perimeter [R]";
      var numI = prompt("Width: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Length: ")
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI * 2 + sumII * 2;
          console.log("Solution: "+totalSum);
          pastequations.push(numI+" * 2 + "+numII+" * 2 = "+totalSum);
        }}}else if (equation == "Area [R]") { var equ = "Area [R]";
      var numI = prompt("Width: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numII = prompt("Length: ")
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI * sumII;
          console.log("Solution: "+totalSum);
          pastequations.push(numI+" * "+numII+" = "+totalSum);
        }}}else if (equation == "Area [S]") { var equ = "Area [S]";
      var numI = prompt("Width/Length: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var totalSum = sumI * sumI;
        console.log("Solution: "+totalSum);
        pastequations.push(numI+" * "+numI+" = "+totalSum);
        }}else if (equation == "Function") { var equ = "Function";
      var numI = prompt("Notation: ")
      if (numI) {
        var sumI = parseFloat(numI);
        var numI = prompt("Input: ")
        if (numII) {
          var sumII = parseFloat(numII);
          var totalSum = sumI * sumII;
          console.log("Solution: "+totalSum);
          pastequations.push(numI+" * "+numII+" = "+totalSum);
        }}}}