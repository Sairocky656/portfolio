$(document).ready(function () {
  // Initially show the Programming Languages container
  showContainer('programming-languages');

  // Handle button clicks
  $('#btn-programming-languages').on('click', function () {
    showContainer('programming-languages');
  });

  $('#btn-software').on('click', function () {
    showContainer('software');
  });

  $('#btn-web-development').on('click', function () {
    showContainer('web-development');
  });

  $('#btn-android-development').on('click', function () {
    showContainer('android-development');
  });

  function showContainer(containerId) {
    // Hide all containers
    $('.container').removeClass('active-container');

    // Show the selected container
    $('#' + containerId).addClass('active-container');
  }
});
$(document).ready(function () {
  // Hide all framework containers
  $(".Flask, .Django, .react, .express").hide();

  // Remove the active class from all frameworks
  $(".framework").removeClass("active-framework");

  // Show the default framework container (React in this case)
  $(".react").show();

  // Add the active class to the default framework
  $(".react .framework").addClass("active-framework");

  $(".mySlides").on("click", function () {
    // Hide all framework containers
    $(".Flask, .Django, .react, .express").hide();

    // Remove the active class from all frameworks
    $(".framework").removeClass("active-framework");

    // Determine the clicked framework based on the image source
    var imgSrc = $(this).find("img").attr("src");
    var frameworkClass;

    if (imgSrc.includes("flask")) {
      frameworkClass = "Flask";
    } else if (imgSrc.includes("django")) {
      frameworkClass = "Django";
    } else if (imgSrc.includes("react")) {
      frameworkClass = "react";
    } else if (imgSrc.includes("express")) {
      frameworkClass = "express";
    }

    // Show the corresponding framework container
    $("." + frameworkClass).show();

    // Add the active class to the clicked framework
    $("." + frameworkClass + " .framework").addClass("active-framework");
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var project = document.querySelector('.project');

  function triggerAnimation() {
    project.classList.add('animation-triggered');
    setTimeout(function () {
      project.classList.remove('animation-triggered');
    }, 30000); // 30 seconds
  }

  // Initial trigger
  triggerAnimation();

  // Set interval to repeat the animation
  setInterval(function () {
    triggerAnimation();
  }, 30800); // 30 seconds + 800 milliseconds (to allow for some overlap)
});
document.addEventListener("DOMContentLoaded", function () {
  const numStars = 100; // Number of stars
  const numShootingStars = 3; // Number of shooting stars

  for (let i = 0; i < numStars; i++) {
    createStar();
  }

  for (let i = 0; i < numShootingStars; i++) {
    createShootingStar();
  }

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    document.body.appendChild(star);

    const animationDuration = Math.random() * 2 + 1; // Random duration for twinkling
    star.style.animationDuration = `${animationDuration}s`;

    setTimeout(() => {
      document.body.removeChild(star);
      createStar(); // Replace the star after its animation ends
    }, animationDuration * 1000);
  }

  function createShootingStar() {
    const shootingStar = document.createElement("div");
    shootingStar.className = "star shooting-star";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    shootingStar.style.left = `${x}px`;
    shootingStar.style.top = `${y}px`;

    document.body.appendChild(shootingStar);

    const animationDuration = Math.random() * 2 + 1; // Random duration for twinkling
    shootingStar.style.animationDuration = `${animationDuration}s`;

    setTimeout(() => {
      document.body.removeChild(shootingStar);
      createShootingStar(); // Replace the shooting star after its animation ends
    }, animationDuration * 1000);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const buttons = sidebar.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      toggleButtonWidth(button);
    });
  }

  function toggleButtonWidth(selectedButton) {
    for (let button of buttons) {
      if (button === selectedButton) {
        // If it's the selected button, increase width
        button.style.width = "200px"; // Adjust width as needed
      } else {
        // If it's not the selected button, set back to normal width
        button.style.width = "60px"; // Adjust default width
      }
    }
  }
});

