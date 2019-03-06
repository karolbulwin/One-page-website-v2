const sharp = require('sharp');

const imgTitles = [
  'walk_1600.jpg',
  'bike_1600.jpg',
  'swim_1600.jpg',
  'canoe_1600.jpg',
  'paragliders_1600.jpg'
];

const prefix = 'a_';

const resizeList = [
  { width: 288, height: 144, title: 320 },
  { width: 368, height: 184, title: 400 },
  { width: 448, height: 224, title: 480 },
  { width: 568, height: 284, title: 600 },
  { width: 735, height: 368, title: 767 },
  { width: 635, height: 318, title: 800 },
  { width: 802, height: 401, title: 1000 },
  { width: 968, height: 484, title: 1200 },
  { width: 1135, height: 568, title: 1400 },
  { width: 1600, height: 800, title: 1600 }
];

imgTitles.forEach((img) => {
  const inputBuffer = `public/images/${img}`;

  let imgTitle = inputBuffer.split('public/images/');
  imgTitle = imgTitle[1].split('_');
  imgTitle = imgTitle[0].toLowerCase();

  resizeList.forEach((size) => {
    sharp(inputBuffer)
      .resize(size.width, size.height)
      .toFile(`${prefix}${imgTitle}_${size.title}.jpg`, (err) => {
        console.log(err);
      });
  });
});
