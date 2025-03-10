$(".submit").on("click", function() {
    let ingredient = $("#Ingredient").val().trim();
    localStorage.setItem("selectedIngredient", ingredient);
    window.location.href = "../meal.html";
});