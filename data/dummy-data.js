import category from "../models/category";
import meal from "../models/meal";

export const favourites = {
  ids: [],
};

export const Category = [
  new category(
    "c0",
    "Italian",
    "#f03e3e",
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c1",
    "Indian",
    "#f03e3e",
    "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c2",
    "Chinese",
    "#ae3ec9",
    "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c3",
    "Continental",
    "#7048e8",
    "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c4",
    "Quick & Easy",
    "#4263eb",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c5",
    "german",
    "#d6336c",
    "https://images.pexels.com/photos/53626/pexels-photo-53626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c6",
    "light and lovely",
    "#1c7ed6",
    "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c7",
    "SandWiches",
    "#1098ad",
    "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c8",
    "Asian",
    "#0ca678",
    "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c9",
    "Hamburgers",
    "#74b816",
    "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c10",
    "Breakfast",
    "#f76707",
    "https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new category(
    "c11",
    "Exotic",
    "#a167b1",
    "https://images.pexels.com/photos/5490897/pexels-photo-5490897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
];

export const Meals = [
  new meal(
    "m1",
    ["c0", "c10", "c4"],
    "Classic Pasta Amatriciana",
    "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    20,
    "This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook. This one boats of being among the original Italian recipes of pasta. easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kid's tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine.",
    [
      "2 Tbsp extra virgin olive oil",
      "30 gms butter, unsalted",
      "150 gms pancetta or bacon (diced)",
      "1 Onion (diced)",
      "6-8 Garlic cloves (minced)",
      "2 tbsp tomato paste",
      "8-10 Tomatoes (riped), chopped",
    ],
    [
      "Cook diced bacon in a large saucepan over medium high heat until crisp, about 5 minutes. Drain all but 2 tablespoons of drippings from the pan.",
      "Add onions, and cook over medium heat about 3 minutes. Stir in garlic and red pepper flakes; cook 30 seconds. Add canned tomatoes, undrained; simmer 10 minutes, breaking up tomatoes.",
      "Meanwhile, cook the pasta in a large pot of 4 quarts boiling salted water until al dente. Drain.",
      "Stir basil into the sauce, and then toss with cooked pasta. Serve with grated Parmesan cheese.",
    ]
  ),
  new meal(
    "m2",
    ["c3", "c11"],
    "Pasta Con Pomodoro E Basilico",
    "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
    20,
    "This is the most basic and simplest cooked pasta sauce, hence it is the benchmark of a good Italian home cook. This one boats of being among the original Italian recipes of pasta. easy and quick, this pasta recipe can be made under half an hour. Serve as a breakfast, pack for kid's tiffin or savour as an evening snack. You can even cook this for a casual and lazy dinner and pair this up with red wine.",
    [
      "1 Kg red ripe tomatoes, large",
      "40 ml extra virgin olive oil",
      "3 garlic cloves (minced), peeled",
      "Handful fresh basil",
      "A pinch of red chilly flakes",
      "1 packet penne (though you could use any pasta here, long, thin, short or tube, as this is a sauce which works well with all the pastas)",
      "parmesan cheese",
      "to taste Salt",
    ],
    [
      "Cut the tomatoes in half crosswise and remove most of the seeds, using your fingers. Then quarter the tomatoes.",
      "Heat the oil in a large skillet, and add garlic and chilly flakes.",
      "As soon as the garlic gives off its aroma and becomes opaque, add the tomatoes. Cook over high heat until the tomato begins to thicken. Use a wooden spoon to stir and help break the tomato pulp.",
      "Add the basil, either whole or roughly chopped, and salt. When the sauce is cooked, remove it from the heat and run it through a food processor for a minute.",
      "Cook the pasta in abundant boiling water, till al dente, and drain.",
      "Place in a serving bowl with the sauce. Drizzle a little olive oil over the pasta and mix well with the sauce.",
      "Serve with grated Parmesan cheese.",
    ]
  ),
  new meal(
    "m3",
    ["c1", "c8", "c11"],
    "Red Split Lentils (Masoor Dal)",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F951d56f317d807ce7952b4eebbc3c043%2F6099107.jpg&w=595&h=595&c=sc&poi=face&q=60",
    140,
    "This is the most basic and simplest cooked Red Split Lentils (Masoor Dal), hence it is the benchmark of a good Indian home cook. This one boats of being among the original Indian recipes of dal. easy and quick, this dal recipe can be made under two and half hour. Serve as a lunch, You can even cook this for a casual and lazy dinner and pair this up with tortillas.",
    [
      "1 cup basmati rice",
      "4 ½ cups water, divided",

      "1 cup red lentils (masoor dal), rinsed",

      "½ cup finely chopped red onion (Optional)",

      "1 teaspoon ground cumin",

      "1 teaspoon ground coriander",

      "1 teaspoon salt, or to taste",

      "½ teaspoon ground black pepper (Optional)",

      "½ teaspoon cayenne powder (Optional)",

      "½ teaspoon ground turmeric",

      "1 cup broccoli florets (Optional)",

      "1 cup diced tomatoes (Optional)",

      "1 cup frozen peas (Optional)",

      "1 tablespoon olive oil, or as needed",

      "1 cup sliced mushrooms (Optional)",

      "1 tablespoon peeled, finely grated fresh ginger",

      "2 cloves garlic, finely grated",
    ],
    [
      "Rinse rice in several changes of water and transfer to a container. Cover with water and let soak at room temperature, 15 minutes to 1 hour. Drain.",
      "Combine 3 cups water with red lentils in a large pot over medium heat. Bring to a simmer, skimming any scum that collects on the surface. Stir in onion, cumin, coriander, salt, black pepper, cayenne, and turmeric. Reduce heat to low and simmer, partially covered, until lentils are tender, about 30 minutes.",
      "Stir broccoli, tomatoes, peas, and salt into the pot. Continue cooking, stirring frequently, until lentils are soft, about 30 minutes more.",
      "Combine drained rice with remaining 1 1/2 cup water in another pot; bring to a boil. Reduce heat to very low and simmer, covered with a tight-fitting lid, until rice is tender and liquid is absorbed, about 20 minutes.",
      "Heat oil in a small skillet over medium heat. Add mushrooms, ginger, and garlic; cook and stir until fragrant, 3 to 5 minutes. Pour over lentils; stir to distribute. Cook lentils until flavors combine, about 5 minutes. Serve lentils with rice.",
    ]
  ),
  new meal(
    "m4",
    ["c5", "c11"],
    "German Spaghettini",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F4aa5b9f05d85487b44c1d85a32f5a39a%2F4464943.jpg&w=595&h=595&c=sc&poi=face&q=60",
    95,
    "This is the most basic and simplest German Spaghattini, hence it is the benchmark of a good German home cook. This one boats of being among the original German recipes of spaghattini. easy and quick, this spaghattini recipe can be made under two hour. Serve as a lunch, You can even cook this for a casual and lazy dinner and pair this up with german spaghattini.",
    [
      "1 pound lean ground beef",

      "¼ pound Italian sausage",

      "6 slices bacon",

      "1 (15 ounce) can tomato sauce",

      "1 (28 ounce) can canned tomatoes",

      "⅓ cup white sugar",

      "12 ounces spaghettini",
    ],
    [
      "In a skillet over medium heat, brown the ground beef until no pink shows; drain and remove from skillet. Brown Sausage in skillet until cooked through; drain.",
      "Combine in skillet with sausage: browned beef, bacon, tomato sauce, tomatoes and sugar. Simmer 45 minutes.",
      "Bring a large pot of lightly salted water to a boil. Add spaghettini pasta and cook for 8 to 10 minutes or until al dente; drain.",
      "Preheat oven to 300 degrees F (150 degrees C).",
      "Mix cooked spaghettini with tomato-meat mixture. Pour in casserole dish and bake for 30 minutes.",
    ]
  ),
];
