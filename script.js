$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.jump-button').click(clickedJumpButton);

  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Kaido Yonko", weight:"2000", happiness:"200"};

    // convert weight and happiness to integer values
    pet_info.weight = Number.parseInt(pet_info.weight);
    pet_info.happiness = Number.parseInt(pet_info.happiness);

    // Sound effects
    var treatSound = new Audio("sounds/treat.mp3");
    var playSound = new Audio("sounds/play.mp3");
    var exerciseSound = new Audio("sounds/exercise.mp3");
    var jumpSound = new Audio("sounds/jump.mp3");
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 50;
      // Increase pet weight
      pet_info.weight = pet_info.weight + 200;
      // Comment
      // hide(): its hiding the comment
      // text(): the comment
      // fadeIn(2000): the comment appears and it takes 2 seconds
      $('.comment').hide().text("Tasty").fadeIn(2000);
      // delay(4000): The comment stays for 4 seconds
      // fadeOut(2000): The comment disappears in 2 seconds
      $('.comment').delay(4000).fadeOut(2000);
      // animation for treat button
      animation("treat");
      // Sound for treat button
      treatSound.play();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness = pet_info.happiness + 50;
      // Decrease pet weight
      pet_info.weight = pet_info.weight - 200;
      // Comment
      // hide(): its hiding the comment
      // text(): the comment
      // fadeIn(2000): the comment appears and it takes 2 seconds
      $('.comment').hide().text("Huhu").fadeIn(2000);
      // delay(4000): The comment stays for 4 seconds
      // fadeOut(2000): The comment disappears in 2 seconds
      $('.comment').delay(4000).fadeOut(2000);
      // animation for play button
      animation("play");
      // Sound for play button
      playSound.play();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness = pet_info.happiness - 50;
      // Decrease pet weight
      pet_info.weight = pet_info.weight - 200;
      // Comment
      $('.comment').hide().text("Enough").fadeIn(2000);
      $('.comment').delay(4000).fadeOut(2000);

      animation("exercise");
      // Sound for exercise button
      exerciseSound.play();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedJumpButton() {
      // Decrease pet happiness
      pet_info.happiness = pet_info.happiness + 100;
      // Increase pet weight
      pet_info.weight = pet_info.weight - 400;
      // Comment
      $('.comment').hide().text("Exhausted").fadeIn(2000);
      $('.comment').delay(4000).fadeOut(2000);

      animation("jump");
      // Sound for jump button
      jumpSound.play();
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0
      }
      // Add conditional so if happiness is lower than zero.
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    //Pet animation
    function animation(activity) {
      // treat animation
      if (activity == "treat") {
        $('.pet-image').animate({bottom: "-40px"});
        $('.pet-image').animate({bottom: "+40px"});
        // play animation
      }else if(activity == "play") {
        $('.pet-image').animate({right: "-60px"});
        $('.pet-image').animate({right: "+60px"});
        // exercise animation
      }else if (activity == "exercise") {
        $('.pet-image').animate({bottom: "-40px"});
        $('.pet-image').animate({right: "-40px"});
        $('.pet-image').animate({right: "+40px"});
        $('.pet-image').animate({bottom: "-40px"});

        $('.pet-image').animate({bottom: "+40px"});
        $('.pet-image').animate({right: "-40px"});
        $('.pet-image').animate({right: "+40px"});
        $('.pet-image').animate({bottom: "+40px"});
        // jump animation
      }else if (activity == "jump") {
        $('.pet-image').animate({bottom: "-60px"});
        $('.pet-image').animate({bottom: "+60px"});
        $('.pet-image').animate({bottom: "-60px"});
        $('.pet-image').animate({bottom: "+60px"});
      }
    }

    
  