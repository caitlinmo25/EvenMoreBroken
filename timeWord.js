function timeWord(timeStr) {
    const numbersToWords = {
      0: 'twelve',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty'
    };

    function getWordForNumber(num) {
      if (num < 20) {
        return numbersToWords[num];
      } else if (num < 60) {
        let tens = Math.floor(num / 10) * 10;
        let ones = num % 10;
        return ones === 0 ? numbersToWords[tens] : numbersToWords[tens] + ' ' + numbersToWords[ones];
      }
    }

    let [hours, minutes] = timeStr.split(':').map(str => parseInt(str, 10));
    let period = hours < 12 ? 'am' : 'pm';

    if (hours === 0 && minutes === 0) return 'midnight';
    if (hours === 12 && minutes === 0) return 'noon';

    hours = hours > 12 ? hours - 12 : hours;
    let hoursWord = getWordForNumber(hours);
    let minutesWord = minutes === 0 ? "o'clock" : minutes < 10 ? 'oh ' + getWordForNumber(minutes): getWordForNumber(minutes);

    return `${hoursWord} ${minutesWord} ${period}`.replace(/  o'clock/, "");
  }

  module.exports = timeWord;
