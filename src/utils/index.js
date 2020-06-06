const getRandomArrayElement = array =>
  array[Math.floor(Math.random() * array.length)];

const stuffToBuy = [
  'Nintendo Switch',
  'standing desk',
  'coloring book',
  'fuckton of toilet paper',
  'fuckton of hand sanitizer',
  'fuckton of soda',
  'yoga mat',
];

const thingsToMake = [
  'sourdough starter',
  'skateboard ramp',
  'Rocky Horror Picture Show sock puppet shadow cast',
  '"what the fuck should I do" website',
];

const relatives = [
  'parents',
  'mom',
  'dad',
  'brother',
  'sister',
  'aunt',
  'uncle',
  'grandparents',
  'grandma',
  'grandpa',
  'neice',
  'nephew',
  'cousin',
  'mother in law',
  'father in law',
  'second cousin once removed',
];

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'brown',
  'black',
  'silver',
  'magenta',
  'neon green',
  'ombre',
  'rainbow',
  'like Cruella DeVille',
];

const skills = [
  'skateboard',
  'play the fucking guitar',
  'knit',
  'crochet',
  'bake some fucking bread',
  'cook for my fucking self',
  'code',
  'juggle',
  'do a fucking handstand',
  'do a fucking pushup',
  'cut my own fucking hair',
];

const pets = [
  'dog',
  'cat',
  'chinchilla',
  'rat',
  'mouse',
  'highway',
  'naked mole rat',
  'child',
  'fish',
  'bird',
  'armadillo',
  'axolotl',
  'chicken',
  'duck',
  'chicken and a fucking duck',
];

const books = [
  'all the fucking books I should have read in fucking high school',
  'Harry Potter',
  'Sherlock Holmes',
  'Game of Thrones',
  'War and Peace',
  'Pride & Prejudice',
  'Moby Dick',
  'Jane Eyre',
  'the complete works of Shakespeare',
  'Hamlet',
  'The Bell Jar',
  'Tale of Two Cities',
  'Wuthering Heights',
  '50 Shades of Grey',
  'Fahrenheit 451',
  'The Great Gatsby',
  'Ethan Frome',
  'DiscWorld',
  'Frankenstein',
  'On the Road',
];

const oneOffActivities = [
  'do a fucking jigsaw puzzle',
  'play a fucking board game',
  'get the fuck in shape',
  'grow some fucking plants',
  'start a fucking D&D campaign',
  'write a fucking novel',
  'grow a fucking beard',
  'play fucking Animal Crossing',
  "clean out that fucking closet I haven't looked at in three fucking years",
];

const headers = [
  'Probably going to fucking',
  "I'm finally fucking going to",
  "It's definitely fucking time for me to",
];

const actions = [
  () => getRandomArrayElement(oneOffActivities),
  () => `buy a fucking ${getRandomArrayElement(stuffToBuy)}`,
  () => `finally fucking read ${getRandomArrayElement(books)}`,
  () => `adopt a fucking ${getRandomArrayElement(pets)}`,
  () => `make a fucking ${getRandomArrayElement(thingsToMake)}`,
  () => `dye my fucking hair ${getRandomArrayElement(colors)}`,
  () => `learn to fucking ${getRandomArrayElement(skills)}`,
  () =>
    `have a fucking skype call with my fucking ${getRandomArrayElement(
      relatives
    )}`,
];

const buttonTextOptions = [
  "I don't fucking want to do that",
  'That sounds fucking boring',
  'Fuck that',
  "Fuck off, I'm not doing that",
];

const generateHeaderText = () => getRandomArrayElement(headers);

const generateBodyText = () => getRandomArrayElement(actions)();

const generateButtonText = () => getRandomArrayElement(buttonTextOptions);

export default {
  generateHeaderText,
  generateBodyText,
  generateButtonText,
};
