import category from "../models/category";
import meal from "../models/meal";

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
    ["c0"],
    "Classic Pasta Amatriciana",
    "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    20,
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
      "first step",
      "second step",
      "third step",
      "four step",
      "fifth step",
      "sixth step",
    ],
    true,
    true,
    false,
    true
  ),
  new meal(
    "m2",
    ["c0"],
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
    ],
    true,
    true,
    false,
    true
  ),
];
