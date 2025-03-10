$(document).ready(function() {
    let ingredient = localStorage.getItem("selectedIngredient");
    console.log(ingredient);
    fetchMeal(ingredient);

    $('#download-btn').on('click', function() {
        $("input").prop("checked", false);
        window.print();
    });
});

// Generate random no
function randomNo(totalMealsAvailable) {
    let randomNumber = Math.floor(Math.random() * totalMealsAvailable);
    return randomNumber;
}

async function fetchMeal(ingredientName) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientName}`);
        let data = await response.json();

        // Choose random meal
        let totalMealsAvailable = data.meals.length;
        let fetchedRandomNo = randomNo(totalMealsAvailable);
        let mealChosen = data.meals[fetchedRandomNo];
        
        // Deatils
        let mealDetails = { 
            mealHeading: mealChosen.strMeal,
            mealCategory: mealChosen.strCategory,
            instructions:mealChosen.strInstructions,
            ingredientList: [],
            quantity: [],
            imgUrl: mealChosen.strMealThumb,
            youtube: mealChosen.strYoutube || ""  
        }

        let i = 1;
        while (mealChosen[`strIngredient${i}`] && mealChosen[`strIngredient${i}`].trim() !== "") {
            mealDetails.ingredientList.push(mealChosen[`strIngredient${i}`]);
            mealDetails.quantity.push(mealChosen[`strMeasure${i}`]);
            i++;
        }

        displayMeal(mealDetails);

    } catch (error) {
        alert("meal does not exixt");
        window.location.href = "../index.html";
        console.log("Error", error);
    }
}



function displayMeal(mealDetails) {
    $("h1").text(mealDetails.mealHeading);
    $(".category").text("" + mealDetails.mealCategory);
    $(".instructions").html("" + mealDetails.instructions);
    mealDetails.ingredientList.forEach((ingredientName, index) => {
        $("ul").append(`
            <div class = "ingredients-list">
            <input type="checkbox" id= ${ingredientName} name=${ingredientName}>
            <label for= ${ingredientName}>${mealDetails.quantity[index]} <b>${ingredientName}</b></label><br>
            </div>`);     
    });
    $("img").attr("src", mealDetails.imgUrl + "/large");
    if (mealDetails.youtube !== "") {
        $("a").attr("href",mealDetails.youtube);
        $("a").text(mealDetails.youtube);
    } else {
        $("a").remove();
        $(".youtube-head").remove();
    }
            
    $(".loader").fadeOut(500, function () {
        $(".content").fadeIn(500);
    }); 
}


