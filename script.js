const dishes = ["Hamburgare", "Pizza", "Taco", "Cesarsallad"];
const drinks = ["Water", "Beer", "Soda", "Wine"];

function showDishes() {
    dishes.forEach(element => {
        console.log(element);
        const demo = document.getElementById("demo");

        demo.textContent = dishes;
        
       
        
        
    });
    
}

showDishes();