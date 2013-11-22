var menu = com.dawgpizza.menu;

$(function(){
    render(menu.pizzas);
    render(menu.drinks);
    render(menu.desserts);
});

function render(entries) {
    var instance;
    var menu = $('.content');
    $.each(entries, function(index, value){
            alert(value);
        instance = $('.pizzaTemplate').clone();
        instance.find('.name').html(value.name);
        //instance.find('.description').html(this.description);
        //instance.find('.prices').html(this.prices);
        //instance.find('.price').html(this.price);
        instance.removeClass('pizzaTemplate');
        menu.append(instance);
    });
}
