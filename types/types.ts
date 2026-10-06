export type Category = {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type Categories = Category[];

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
  strArea: string;
  strCountry: string;
};

export type Meals = Meal[];
