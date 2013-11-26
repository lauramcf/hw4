var menu = com.dawgpizza.menu;

$(function(){
    renderPizza(menu.pizzas);
    renderDrinks(menu.drinks);
    renderDesserts(menu.desserts);
});

function renderPizza(entries) {
    var instance;
    var menu = $('.content');

    $.each(entries, function(index, pizza){
        instance = $('.pizzaTemplate').clone(); 
        
        if(pizza.vegetarian) {
            container = $('.vegetarian');
        }
        else {
            container = $('.meat');
        }
        instance.find('.name').html(pizza.name);
        instance.find('.description').html(pizza.description);
        instance.find('.small-pizza').html("$" + pizza.prices[0]);
        instance.find('.medium-pizza').html("/ $" + pizza.prices[1]);
        instance.find('.large-pizza').html("/ $" + pizza.prices[2]);

        //instance.find('.description').html(this.description);
        //instance.find('.prices').html(this.prices);
        //instance.find('.price').html(this.price);
        instance.removeClass('pizzaTemplate');
        menu.append(instance);
    });   
}

function renderDrinks(entries) {
    var instance;
    var menu = $('.content');

    $.each(entries, function(index, value){
        instance = $('.drinkTemplate').clone(); 
        instance.find('.name').html(value.name);
        instance.find('.price').html("$" + value.price);

        //instance.find('.description').html(this.description);
        //instance.find('.prices').html(this.prices);
        //instance.find('.price').html(this.price);
        instance.removeClass('drinkTemplate');
        menu.append(instance);
    });   
}

function renderDesserts(entries) {
    var instance;
    var menu = $('.content');

    $.each(entries, function(index, value){
        instance = $('.dessertTemplate').clone(); 
        instance.find('.name').html(value.name);
        instance.find('.price').html("$" + value.price);

        //instance.find('.description').html(this.description);
        //instance.find('.prices').html(this.prices);
        //instance.find('.price').html(this.price);
        instance.removeClass('dessertTemplate');
        menu.append(instance);
    });   
}