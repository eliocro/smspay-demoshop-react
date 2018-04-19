
const products = [{
  id: 101,
  name: 'Dark Side of the Moon',
  artist: 'Pink Floyd',
  cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dark_Side_of_the_Moon.png/220px-Dark_Side_of_the_Moon.png',
  desc: 'The Dark Side of the Moon is the eighth studio album by the English progressive rock band Pink Floyd, released in March 1973. It built on ideas explored in the band\'s earlier recordings and live shows, but lacks the extended instrumental excursions that characterised their work following the departure in 1968 of founder member, principal composer, and lyricist, Syd Barrett.',
  year: 1973,
  price: 9000,
}, {
  id: 102,
  name: 'The Wall',
  artist: 'Pink Floyd',
  cover: 'https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg',
  desc: 'The Wall is the eleventh studio album by the English progressive rock group Pink Floyd. Released as a double album on 30 November 1979, it was subsequently performed live with elaborate theatrical effects, and adapted into a feature film, Pink Floyd—The Wall.',
  year: 1969,
  price: 8000
}, {
  id: 103,
  name: 'Led Zeppelin',
  artist: 'Led Zeppelin',
  cover: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png',
  desc: 'Led Zeppelin is the debut album by English rock band Led Zeppelin. It was recorded in October 1968 at Olympic Studios in London and released on Atlantic Records on 12 January 1969 in the United States and 31 March 1969 in the United Kingdom.',
  year: 1979,
  price: 13000
}, {
  id: 107,
  name: 'Fear of a Blank Planet',
  artist: 'Porcupine Tree',
  cover: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Fear_of_a_blank_planet.jpg',
  desc: 'Fear of a Blank Planet is the ninth studio album by British progressive rock band Porcupine Tree and their best selling (until it was surpassed by The Incident in 2010).',
  year: 2007,
  price: 59000
}, {
  id: 104,
  name: 'Led Zeppelin III',
  artist: 'Led Zeppelin',
  cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Led_Zeppelin_-_Led_Zeppelin_III.png',
  desc: 'Led Zeppelin III is the third studio album by the English rock band Led Zeppelin. It was recorded between January and August 1970 and released on 5 October by Atlantic Records.',
  year: 1970,
  price: 49000,
}, {
  id: 105,
  name: 'Houses of Holy',
  artist: 'Led Zeppelin',
  cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg',
  desc: 'Houses of the Holy is the fifth studio album by British rock band Led Zeppelin, released by Atlantic Records on 28 March 1973.',
  year: 1973,
  price: 7900,
}, {
  id: 106,
  name: 'In Absentia',
  artist: 'Porcupine Tree',
  cover: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Porcupine_tree_in_absentia.jpg',
  desc: 'In Absentia is the seventh studio album by British progressive rock band Porcupine Tree, first released on 24 September 2002. The album marked several changes for the band, with it being the first with new drummer Gavin Harrison.',
  year: 2002,
  price: 9000
}, {
  id: 108,
  name: 'Nevermind',
  artist: 'Nirvana',
  cover: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg',
  desc: 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991. Produced by Butch Vig, Nevermind was the group\'s first release on DGC Records.',
  year: 1991,
  price: 9900
}, {
  id: 109,
  name: 'Venus Isle',
  artist: 'Eric Johnson',
  cover: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Venusisle.JPG',
  desc: 'Venus Isle is the fourth studio album by guitarist Eric Johnson, released on September 3, 1996 through Capitol Records. The fourth track, "S.R.V.", is a tribute to guitarist Stevie Ray Vaughan, and features his elder brother Jimmie Vaughan as a guest soloist.',
  year: 1996,
  price: 9900
}];

const shipping = [{
  location: 'Norge',
  price: 4000
},{
  location: 'Sweden',
  price: 4500
},{
  location: 'Denmark',
  price: 5200
},{
  location: 'Portugal',
  price: 7900
}];

export { products, shipping };
