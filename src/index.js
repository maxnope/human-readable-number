module.exports = function toReadable (number) {
  var dosen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  let teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']

    if (number<=10)
      return dosen[number]
    else if (number<=20)
      return teen[number]
  
}