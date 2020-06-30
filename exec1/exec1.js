var recipeButton = document.getElementById("recipeButton");
recipeButton.addEventListener("click", replaceIt);

function replaceIt() {
    var recipeDiv = document.getElementById("recipe");
    var FirstIngredient = "<span class='replacement'>" + document.getElementById("FirstIngredient").value + "</span>";
    var SecondIngredient = "<span class='replacement'>" + document.getElementById("SecondIngredient").value + "</span>";
    var ThirdIngredient = "<span class='replacement'>" + document.getElementById("ThirdIngredient").value + "</span>";
    var FourthIngredient = "<span class='replacement'>" + document.getElementById("FourthIngredient").value + "</span>";
    var FifthIngredient = "<span class='replacement'>" + document.getElementById("FithIngredient").value + "</span>";
    var SixthIngredient = "<span class='replacement'>" + document.getElementById("SixthIngredient").value + "</span>";


    var therecipe = "<h1>Friedrich's Custard Biscuits</h1>";
    therecipe += "Combine dry ingredients in a large bowl, make a well.<br><br>";
    therecipe += "Add beaten " + FourthIngredient + " and " + SixthIngredient + ".<br><br>";
    therecipe += "Pour in slightly cooled melted " + FifthIngredient + " and mix well.<br><br>";
    therecipe += "Knead into a ball until all the " + FirstIngredient + " and " + ThirdIngredient + " is absorbed.<br><br>";
    therecipe += "Roll teaspoonsfuls of mixture into balls and and place on a biscuit tray.<br><br>";
    therecipe += "Bake at 160 degrees for 15 - 25 minutes or until golden.<br><br>";
    therecipe += "Cool on wire rack before storing in an airtight container.<br><br>";
    therecipe += "ENJOY!!!"

    recipeDiv.innerHTML = therecipe;

}