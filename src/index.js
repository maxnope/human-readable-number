module.exports = function toReadable (number) {
  let dosen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
  let tens = ['', 'ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function tenner(n) {
    if (n<=20){
      return dosen[n];
    }
    else {
      if (Number.isInteger(n/10)) {
        return tens[n/10];
      }
      else {
        var firstWord = Math.trunc(n/10)
        var secondWord = n - firstWord * 10
        return tens[firstWord] + ' ' + dosen [secondWord]
      }
    }
  }

  function hundred(n) {
    var firstWord = Math.trunc(n/100)
    var secondWord = n - firstWord * 100
    if (Number.isInteger(n/100)) {
      return dosen[firstWord] + ' hundred'
    }
    else 
      return dosen[firstWord] + ' hundred ' + tenner(secondWord);
  }

  if (number<=20) {
    return dosen[number]
  }
  else if (number>20 && number < 100)
    return tenner(number);
  else {
    return hundred(number);
  }
} 