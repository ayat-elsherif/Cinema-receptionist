export function RandImage() {
  let image_array = [
    "red-notice.jpg",
    "dune.jpg",
    "encanto.jpg",
    "hookeye.jpg",
    "finch.jpg",
    "invasion.jpg",
    "notimetodie.jpg",
    "spiderman.jpg",
    "zerosones.jpg",
    "avatar.jpg",
    "babyboss.jpg",
    "blackwidow.jpg",
    "christmasagain.jpg",
    "dontbreathe.jpg",
    "endgame.jpg",
    "ghostbuster.jpg",
    "homealone.jpg",
    "infinite.jpg",
    "junglecruise.jpg",
    "raya.jpg",
    "robinhood.jpg",
    "singlealltheway.jpg",
    "thecroods.jpg",
    "thegrinch.jpg",
    "trollsholiday.jpg",
    "venom.jpg",
    "zerosones.jpg",
    "thetrip.jpg",
    "sonic.jpg",
  ];
  let img_no = Math.floor(Math.random() * image_array.length);
  let randImage = image_array[img_no];
  return randImage;
}
