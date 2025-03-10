# Meal-Planner

## Overview  
The **Meal Planner Website** helps users decide what to cook by providing random recipes based on a chosen main ingredient (e.g., chicken, fish, bread, etc). It uses the **MealDB API** to fetch meal details, including instructions, ingredients, an image, and a YouTube tutorial (if available). Users can also tick ingredients off the list and download the recipe as a **PDF**.

## Features  
- **Search by Main Ingredient** – Users input an ingredient, and a random meal recipe appears.  
- **Detailed Recipe Information**:
  - Cooking instructions  
  - Ingredients list  
  - Meal image  
  - YouTube tutorial link (if available)  
- **Ingredient Checklist** – Tick and untick ingredients for easy tracking.  
- **Download as PDF** – Save recipes for offline reference.  

## Technologies Used  
- **Frontend** – HTML, CSS, JavaScript, jQuery  
- **API** – MealDB API  
- **PDF Generation** – Built-in `window.print()` method    

## How It Works  
1. Enter a main ingredient.  
2. The website fetches a random meal using the MealDB API.  
3. Recipe details appear with instructions and an image.  
4. If available, a YouTube tutorial link is provided.  
5. Users can check off ingredients while cooking.  
6. Option to **download the recipe as a PDF** for better accessibility.  

## Installation & Setup  
```sh
git clone https://github.com/zaynahanjum/Meal-Planner.git
