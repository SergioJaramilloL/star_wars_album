import { categorySheet } from './categorySheet';

export function openEnvelope (data){
let envelope = [];
const random = Math.floor(Math.random() * (10 - 1)) + 1;
let numSheet;
if ( random >= 5 ){
  numSheet = Math.floor(Math.random() * (6 - 1)) + 1;
  envelope.push({ 
    sheet: data.films[numSheet - 1],
    number: numSheet,
    type: 'films',
    category: 'Especial'
  });

  for( let i=0; i<3; i++) {
    numSheet = Math.floor(Math.random() * (82 - 1)) + 1;
    envelope.push({
      sheet: data.people[numSheet - 1],
      number: numSheet,
      type: 'people',
      category: categorySheet('people', numSheet)
    });
  };

  numSheet = Math.floor(Math.random() * (36 - 1)) + 1;
  envelope.push({ 
    sheet: data.starships[numSheet - 1],
    number: numSheet,
    type: 'starships',
    category: categorySheet('starship', numSheet)
  });
} else {
  for( let i=0; i<3; i++) {
    numSheet = Math.floor(Math.random() * (82 - 1)) + 1;
    envelope.push({
      sheet: data.people[numSheet - 1],
      number: numSheet,
      type: 'people',
      category: categorySheet('people', numSheet)
    });
  };

  for( let i=0; i<2; i++) {
    numSheet = Math.floor(Math.random() * (36 - 1)) + 1;
    envelope.push({
      sheet: data.starships[numSheet - 1],
      number: numSheet,
      type: 'starships',
      category: categorySheet('starship', numSheet)
    });
  };
}

return envelope;
}