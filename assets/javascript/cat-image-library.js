// Create constant to store cat library objects
// Equal distribution of longhair and shorthair,
// and equal distribution of each of the colors which are orange,
// black, grey, white, calico, tabby, persian, and siamese //
const catLibrary = [
  {
    index: 0,
    age: "Adult",
    color: "Black",
    coat: "Short Hair",
    image: "./assets/images/short.black.adult.jpg"
  },
  {
    index: 1,
    age: "Kitten",
    color: "Orange",
    coat: "Short Hair",
    image: "./assets/images/short.orange.kitten.jpg"
  },
  {
    index: 2,
    age: "Kitten",
    breed: "Siamese",
    coat: "Short Hair",
    image: "./assets/images/short.siamese.kitten.jpg"
  },
  {
    index: 3,
    age: "Adult",
    color: "Orange",
    coat: "Long Hair",
    image: "./assets/images/long.orange.adult.jpg"
  },
  {
    index: 4,
    age: "Kitten",
    color: "Black",
    coat: "Short Hair",
    image: "./assets/images/short.black.kitten.jpg"
  },
  {
    index: 5,
    age: "Adult",
    breed: "Siamese",
    coat: "Short Hair",
    image: "./assets/images/short.siamese.adult.jpg"
  },
  {
    index: 6,
    age: "Kitten",
    color: "Gray",
    coat: "Short Hair",
    image: "./assets/images/short.gray.kitten.jpg"
  },
  {
    index: 7,
    age: "Adult",
    color: "Gray",
    coat: "Long Hair",
    image: "./assets/images/long.gray.adult.jpg"
  },
  {
    index: 8,
    age: "Adult",
    color: "White",
    coat: "Long Hair",
    image: "./assets/images/long.white.adult.jpg"
  },
  {
    index: 9,
    age: "Adult",
    breed: "Persian",
    coat: "Short Hair",
    image: "./assets/images/short.persian.adult.jpg"
  },
  {
    index: 10,
    age: "Adult",
    color: "Tabby",
    coat: "Long Hair",
    image: "./assets/images/long.tabby.adult.jpg"
  },
  {
    index: 11,
    age: "Adult",
    color: "Tabby",
    coat: "Short Hair",
    image: "./assets/images/short.tabby.adult.jpg"
  },
  {
    index: 12,
    age: "Adult",
    breed: "Persian",
    coat: "Long Hair",
    image: "./assets/images/long.persian.adult.jpg"
  },
  {
    index: 13,
    age: "Adult",
    color: "Tabby",
    coat: "Long Hair",
    image: "./assets/images/long.tabby.adult2.jpg"
  },
  {
    index: 14,
    age: "Kitten",
    color: "Tabby",
    coat: "Long Hair",
    image: "./assets/images/long.tabby.kitten.jpg"
  },
  {
    index: 15,
    age: "Adult",
    color: "Calico",
    coat: "Long Hair",
    image: "./assets/images/long.calico.adult.jpg"
  },
  {
    index: 16,
    age: "Kitten",
    color: "White",
    coat: "Long Hair",
    image: "./assets/images/long.white.kitten.jpg"
  },
  {
    index: 17,
    age: "Kitten",
    color: "White",
    coat: "Short Hair",
    image: "./assets/images/short.white.kitten.jpg"
  },
  {
    index: 18,
    age: "Kitten",
    color: "Calico",
    coat: "Short Hair",
    image: "./assets/images/short.calico.kitten.jpg"
  },
  {
    index: 19,
    age: "Adult",
    color: "Calico",
    coat: "Short Hair",
    image: "./assets/images/short.calico.adult.jpg"
  },
  {
    index: 20,
    age: "Adult",
    breed: "Siamese",
    coat: "Long Hair",
    image: "./assets/images/long.siamese.adult.jpg"
  },
  {
    index: 21,
    age: "Adult",
    breed: "Siamese",
    coat: "Long Hair",
    image: "./assets/images/long.siamese.adult2.jpg"
  },
  {
    index: 22,
    age: "Kitten",
    color: "Tabby",
    coat: "Short Hair",
    image: "./assets/images/short.tabby.kitten.jpg"
  },
  {
    index: 23,
    age: "Kitten",
    breed: "Siamese",
    coat: "Short Hair",
    image: "./assets/images/short.siamese.kitten2.jpg"
  },
  {
    index: 24,
    age: "Adult",
    color: "Calico",
    coat: "Long Hair",
    image: "./assets/images/long.calico.adult2.jpg"
  },
  {
    index: 25,
    age: "Kitten",
    breed: "Siamese",
    coat: "Long Hair",
    image: "./assets/images/long.siamese.kitten.jpg"
  },
  {
    index: 26,
    age: "Adult",
    color: "Orange",
    coat: "Short Hair",
    image: "./assets/images/short.orange.adult.jpg"
  },
  {
    index: 27,
    age: "Kitten",
    color: "Orange",
    coat: "Long Hair",
    image: "./assets/images/long.orange.kitten.jpg"
  },
  {
    index: 28,
    age: "Kitten",
    color: "Black",
    coat: "Long Hair",
    image: "./assets/images/long.black.kitten.jpg"
  },
  {
    index: 29,
    age: "Adult",
    color: "Gray",
    coat: "Long Hair",
    image: "./assets/images/long.gray.adult2.jpg"
  },
  {
    index: 30,
    age: "Adult",
    color: "Black",
    coat: "Long Hair",
    image: "./assets/images/long.black.adult.jpg"
  },
  {
    index: 31,
    age: "Adult",
    color: "Gray",
    coat: "Short Hair",
    image: "./assets/images/short.gray.adult.jpg"
  },
  {
    index: 32,
    age: "Adult",
    color: "White",
    coat: "Short Hair",
    image: "./assets/images/short.white.adult.jpg"
  },
  {
    index: 33,
    age: "Kitten",
    color: "Calico",
    coat: "Short Hair",
    image: "./assets/images/short.calico.kitten2.jpg"
  },
  {
    index: 34,
    age: "Kitten",
    color: "Gray",
    coat: "Long Hair",
    image: "./assets/images/long.gray.kitten.jpg"
  },
  {
    index: 35,
    age: "Kitten",
    color: "Calico",
    coat: "Long Hair",
    image: "./assets/images/long.calico.kitten.jpg"
  },
  {
    index: 36,
    age: "Adult",
    breed: "Persian",
    coat: "Long Hair",
    image: "./assets/images/long.persian.adult2.jpg"
  },
  {
    index: 37,
    age: "Kitten",
    breed: "Persian",
    coat: "Long Hair",
    image: "./assets/images/long.persian.kitten.jpg"
  },
  {
    index: 38,
    age: "Kitten",
    breed: "Persian",
    coat: "Short Hair",
    image: "./assets/images/short.persian.kitten.jpg"
  },
  {
    index: 39,
    age: "Adult",
    color: "Orange",
    coat: "Long Hair",
    image: "./assets/images/long.orange.adult2.jpg"
  },
  {
    index: 40,
    age: "Adult",
    breed: "Siamese",
    coat: "Long Hair",
    image: "./assets/images/long.siamese.adult3.jpg"
  },
  {
    index: 41,
    age: "Adult",
    color: "Black",
    coat: "Short Hair",
    image: "./assets/images/short.black.adult3.jpg"
  },

  {
    index: 42,
    age: "Adult",
    color: "Black",
    coat: "Short Hair",
    image: "./assets/images/short.black.adult4.jpg"
  },
  {
    index: 43,
    age: "Kitten",
    color: "Black",
    coat: "Short Hair",
    image: "./assets/images/short.black.kitten2.jpg"
  },
  {
    index: 44,
    age: "Adult",
    color: "Calico",
    coat: "Short Hair",
    image: "./assets/images/short.calico.adult2.jpg"
  },
  {
    index: 45,
    age: "Adult",
    color: "Orange",
    coat: "Short Hair",
    image: "./assets/images/short.orange.adult2.jpg"
  },
  {
    index: 46,
    age: "Adult",
    color: "Tabby",
    coat: "Short Hair",
    image: "./assets/images/short.tabby.adult2.jpg"
  },
  {
    index: 47,
    age: "Kitten",
    color: "Tabby",
    coat: "Short Hair",
    image: "./assets/images/short.tabby.kitten2.jpg"
  },
  {
    index: 48,
    age: "Adult",
    color: "White",
    coat: "Short Hair",
    image: "./assets/images/short.white.adult2.jpg"
  },

  {
    index: 49,
    age: "Kitten",
    color: "White",
    coat: "Long Hair",
    image: "./assets/images/long.white.kitten2.jpg"
  },

  {
    index: 50,
    age: "Kitten",
    color: "White",
    coat: "Long Hair",
    image: "./assets/images/long.white.kitten3.jpg"
  },

  {
    index: 51,
    age: "Adult",
    color: "White",
    coat: "Long Hair",
    image: "./assets/images/long.white.adult2.jpg"
  },

  {
    index: 52,
    age: "Adult",
    breed: "Persian",
    coat: "Long Hair",
    image: "./assets/images/long.persian.adult3.jpg"
  },

  {
    index: 53,
    age: "Kitten",
    breed: "Persian",
    coat: "Long Hair",
    image: "./assets/images/long.persian.kitten2.jpg"
  }
];
