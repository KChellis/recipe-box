export class Recipe {
  selected: boolean = false;
  class: string = "";
  constructor (public title: string, public ingredients: string[], public directions: string[]) {

  }
}
