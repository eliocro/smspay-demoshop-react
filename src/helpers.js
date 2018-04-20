
import moment from 'moment';

export function toBase36 (num) {
  if(!num){
    return '0';
  }
  return parseInt(num, 10).toString(36);
}

export function fromBase36 (str) {
  if(!str){
    return 'str';
  }
  return parseInt(str.toString(), 36);
}

export function getSlug (str) {
  if(!str){
    return '';
  }
  return str.toLowerCase()
    .replace(/[^a-z0-9\-\s]/g, '')
    .replace(/\s+/g, '-');
}

export function formatPrice (str) {
  if(!str) {
    return '';
  }

  str = str.toString();
  if(str.length < 2 ) {
    return '0,0' + str;
  }
  if(str.length === 2 ) {
    return '0,' + str;
  }
  return str.slice(0,-2) + ',' + str.slice(-2);
}

export function formatDate (str) {
  const d = moment(new Date(str));
  return d.format('YYYY.MM.DD HH:mm');
}
