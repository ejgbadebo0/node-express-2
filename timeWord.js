const HOURS = [
 'twelve',
 'one',
 'two',
 'three',
 'four',
 'five',
 'six',
 'seven',
 'eight',
 'nine',
 'ten',
 'eleven'];

 const TENS = [
     'oh',
     '',
     'twenty',
     'thirty',
     'forty',
     'fifty'];
const ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'];

const UNIQUE = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'];


function timeWord(string) {

    if(string == '00:00') {
        return 'midnight';
    }
    if(string == '12:00') {
        return 'noon';
    }
    const time = string.split(':');
    const hour = time[0];
    const minutes = time[1];
    let meridian;
    let hIndex;

    if( parseInt(hour) < 12) {
        meridian = 'am';
        hIndex = parseInt(hour);
    } else {
        meridian = 'pm';
        hIndex = parseInt(hour) - 12;
    }

    const hourString = HOURS[hIndex];
    let minString;

    if (minutes == '00') {
        minString = 'o\'clock';
    }
    else {
        const tensOnes = minutes.split('');
        if (TENS[parseInt(tensOnes[0])] == '') {
            minString = UNIQUE[parseInt(tensOnes[1])];
        }
        else {
            minString = [ TENS[parseInt(tensOnes[0])], ONES[parseInt(tensOnes[1])] ].join(' ');
        }
    }

    const timeStrings = [hourString, minString, meridian];
    const timeString = timeStrings.join(' ');

    return timeString;
};

module.exports = timeWord;