export function categorySheet(typeSheet, numberSheet){
  if( typeSheet === 'people' && numberSheet <= 20 ) {
    return 'Especial';
  } else if ( typeSheet === 'starship' && numberSheet <= 10 ) {
    return 'Especial';
  } else {
    return 'Regular';
  }
}