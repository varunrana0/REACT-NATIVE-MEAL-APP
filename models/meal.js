class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    duration,
    description,
    ingredients,
    steps
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.description = description;
    this.steps = steps;
    this.duration = duration;
  }
}

export default Meal;
