//DinnerModel Object constructor
var DinnerModel = function () {

    //Observable observer implementation
    this.observers = [];

    //  that will add new observer to the array
    this.addObserver = function (observer) {
        //console.log("this.addObserver = "+observer);
        this.observers.push(observer);
    }
    // that will call the update method on all the observers in the array
    this.notifyObservers = function (arg) {
        //console.log("notifyObservers arg = "+arg);
        console.log("Observers are being notified...")
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this, arg);
        }
    }


    // Variables
    var guests = 0;
    var menu = [{ 'type': 'starter', 'id': 0 }, { 'type': 'main dish', 'id': 0 }, { 'type': 'dessert', 'id': 0 }]; // Menu array with dish objects
    var detailsDishID = 0; // ID of dish in detailsView


    // Sets the number of guests
    this.setNumberOfGuests = function (num) {
        guests += num;
        if (guests < 0){
            guests = 0;
        }
        this.notifyObservers("setNumberOfGuests");
    }

    // Returns number of guests
    this.getNumberOfGuests = function () {
        return guests;
    }

    // ID of dish that should be displayed in detailsView
    this.updateDetails = function (id) {
        console.log("Model updateDetails: "+id)
        detailsDishID = id;

        this.notifyObservers("detailsDish");
    }

    //Returns the dish ID for dish on the menu for selected type 
    this.getSelectedDish = function (type) {

        for (dish in menu) {
            if (menu[dish].type == type) {
                return menu[dish].id;
            }
        }
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return $(menu);
    }

    // Returns ingredient for type on the menu
    this.getIngredientOnMenu = function (type) {

        var id = this.getSelectedDish(type);

        return this.getDish(id).ingredients;
    }

    // Returns ingredient for specific ID
    this.getIngredient = function () {
        return this.getDish(detailsDishID).ingredients;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
        
        var starterI;
        var mainDishI;
        var dessertI;

        var menuIngredients = [{ 'starter': starterI }, { 'main dish': mainDishI }, { 'dessert': dessertI}];

        if (menu[0].id != 0) {
            starterI = this.getDish(menu[0].id).ingredient;
        }

        if (menu[1].id != 0) {
            mainDishI = this.getDish(menu[1].id).ingredients;
        }
        if (menu[2].id != 0) {
            dessertI = this.getDish(menu[2].id).ingredients;
        }

        return this.getDish(menu[1].id).ingrediants;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {

        var totalCost = 0;

        for (dish in menu) {
            totalCost += this.getDishCost(menu[dish].id);

        }
        return totalCost;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {

        var thisType = (this.getDish(id)).type;
        var newKey;
        for (key in menu) {
            if (menu[key].type == thisType) {
                newKey = key;
                break;
            }
        }
        menu[newKey].id = id;
        this.notifyObservers("confirmDish");
    }

        //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (dish in menu) {
            if (dish.type == this.getDish(id).type) {
                menu[dish].id = 0;
                this.notifyObservers("dishRemoved");
                }
            }
    }


        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // LAB 4 this function gets all the data 1. Use the bigOvenData API instead
        // As we want our application to be modern, web 2.0 application, 
        // we do not want our code to block the application while it gets the data from the web service. 
        // Therefore, we will use AJAX to issue asynchronous calls. 
        // Check out the lecture notes to reminder yourself about asynchronous calls. 

        // You should update the getAllDishes and getDish function to use BigOven Recipe search API

        //  To be consistent with the rest of the application the best way to solve this 
        // problem is using the Observer pattern once again. Therefore, in the "success" 
        // callback of the AJAX call we want to call "notifyObservers" so that the views can update themselves with the correct data. Even if you didn't pass any arguments to notifyObservers in the previous labs, 
        // now it is time to do so. We want to pass the data we received from the service. 
        
        // function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
        // you can use the filter argument to filter out the dish by name or ingredient (use for search)
        // if you don't pass any filter all the dishes will be returned
        this.getAllDishes = function (type, filter) {
            return $(dishes).filter(function (index, dish) {
                var found = true;
                if (filter) {
                    found = false;
                    $.each(dish.ingredients, function (index, ingredient) {
                        if (ingredient.name.indexOf(filter) != -1) {
                            found = true;
                        }
                    });
                    if (dish.name.indexOf(filter) != -1) {
                        found = true;
                    }
                }
                return dish.type == type && found;
            });
        }

        // Returns image of dish
        this.getImage = function (dish) {
            return dish.image;
        }

        // Returns name of dish
        this.getName = function (id) {
            return this.getDish(id).name;
        }

        // Returns description of dish
        this.getDescription = function (id) {
            return this.getDish(id).description;
        }
        
        //function that returns a dish of specific ID
        this.getDish = function (id) {
            for (key in dishes) {
                if (dishes[key].id == id) {
                    return dishes[key];
                }
            }
        }
        // function that returns the price of a dish depending on the number of guests
        this.getDishCost = function (id) {

            var cost = 0;

            for (dish in dishes) {
                if (dishes[dish].id == id) {
                    for (ingrediant in dishes[dish].ingredients) {
                        cost += dishes[dish].ingredients[ingrediant].price;
                    }
                    cost *= guests;
                    return cost;
                }
              
            }
            return cost;
        }

        this.getDetailsDishID = function () {
            return detailsDishID;
        }
        
        // the dishes variable contains an array of all the 
        // dishes in the database. each dish has id, name, type,
        // image (name of the image file), description and
        // array of ingredients. Each ingredient has name, 
        // quantity (a number), price (a number) and unit (string 
        // defining the unit i.e. "g", "slices", "ml". Unit
        // can sometimes be empty like in the example of eggs where
        // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
        var dishes = [{
            'id': 0,
            'name': "",
            'image': "toast.jpg",
            'despription': "",
            'ingredients':[]
        }
    ,{
            'id': 1,
            'name': 'French toast',
            'type': 'starter',
            'image': 'toast.jpg',
            'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
            'ingredients': [{
                'name': 'eggs',
                'quantity': 0.5,
                'unit': '',
                'price': 10
            }, {
                'name': 'milk',
                'quantity': 30,
                'unit': 'ml',
                'price': 6
            }, {
                'name': 'brown sugar',
                'quantity': 7,
                'unit': 'g',
                'price': 1
            }, {
                'name': 'ground nutmeg',
                'quantity': 0.5,
                'unit': 'g',
                'price': 12
            }, {
                'name': 'white bread',
                'quantity': 2,
                'unit': 'slices',
                'price': 2
            }]
        }, {
            'id': 2,
            'name': 'Sourdough Starter',
            'type': 'starter',
            'image': 'sourdough.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'active dry yeast',
                'quantity': 0.5,
                'unit': 'g',
                'price': 4
            }, {
                'name': 'warm water',
                'quantity': 30,
                'unit': 'ml',
                'price': 0
            }, {
                'name': 'all-purpose flour',
                'quantity': 15,
                'unit': 'g',
                'price': 2
            }]
        }, {
            'id': 3,
            'name': 'Baked Brie with Peaches',
            'type': 'starter',
            'image': 'bakedbrie.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'round Brie cheese',
                'quantity': 10,
                'unit': 'g',
                'price': 8
            }, {
                'name': 'raspberry preserves',
                'quantity': 15,
                'unit': 'g',
                'price': 10
            }, {
                'name': 'peaches',
                'quantity': 1,
                'unit': '',
                'price': 4
            }]
        }, {
            'id': 100,
            'name': 'Meat balls',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
            'ingredients': [{
                'name': 'extra lean ground beef',
                'quantity': 115,
                'unit': 'g',
                'price': 20
            }, {
                'name': 'sea salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'small onion, diced',
                'quantity': 0.25,
                'unit': '',
                'price': 2
            }, {
                'name': 'garlic salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 2
            }, {
                'name': 'Italian seasoning',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'dried oregano',
                'quantity': 0.3,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'crushed red pepper flakes',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
            }, {
                'name': 'Worcestershire sauce',
                'quantity': 6,
                'unit': 'ml',
                'price': 7
            }, {
                'name': 'milk',
                'quantity': 20,
                'unit': 'ml',
                'price': 4
            }, {
                'name': 'grated Parmesan cheese',
                'quantity': 5,
                'unit': 'g',
                'price': 8
            }, {
                'name': 'seasoned bread crumbs',
                'quantity': 15,
                'unit': 'g',
                'price': 4
            }]
        }, {
            'id': 101,
            'name': 'MD 2',
            'type': 'main dish',
            'image': 'bakedbrie.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 1,
                'unit': 'pieces',
                'price': 8
            }, {
                'name': 'ingredient 2',
                'quantity': 15,
                'unit': 'g',
                'price': 7
            }, {
                'name': 'ingredient 3',
                'quantity': 10,
                'unit': 'ml',
                'price': 4
            }]
        }, {
            'id': 102,
            'name': 'MD 3',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 2,
                'unit': 'pieces',
                'price': 8
            }, {
                'name': 'ingredient 2',
                'quantity': 10,
                'unit': 'g',
                'price': 7
            }, {
                'name': 'ingredient 3',
                'quantity': 5,
                'unit': 'ml',
                'price': 4
            }]
        }, {
            'id': 103,
            'name': 'MD 4',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 1,
                'unit': 'pieces',
                'price': 4
            }, {
                'name': 'ingredient 2',
                'quantity': 12,
                'unit': 'g',
                'price': 7
            }, {
                'name': 'ingredient 3',
                'quantity': 6,
                'unit': 'ml',
                'price': 4
            }]
        }, {
            'id': 200,
            'name': 'Chocolat Ice cream',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }, {
            'id': 201,
            'name': 'Vanilla Ice cream',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }, {
            'id': 202,
            'name': 'Strawberry',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
            }]
        }
        ];

    }