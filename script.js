


// JavaScript for the Slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Change slide every 5 seconds
  setInterval(showNextSlide, 5000);
});


















// Page scroll effect


document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-effect");

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scroll-visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scroll-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // Trigger initial scroll check
  handleScrollAnimation();
});






// JavaScript code to handle the count animation

function countUpStats() {
    const statNumbers = document.querySelectorAll('.stat .number');
  
    statNumbers.forEach((numberElement) => {
      const target = parseInt(numberElement.getAttribute('data-count'));
      const duration = 5000; // Animation duration in milliseconds
      const increment = Math.ceil(target / (duration / 50)); // Increment value per interval (adjust as needed)
  
      let current = 0;
  
      const timer = setInterval(() => {
        current += increment;
        numberElement.textContent = current;
  
        if (current >= target) {
          numberElement.textContent = target;
          clearInterval(timer);
        }
      }, 50); // Interval duration in milliseconds
    });
  }
  
  // Call the countUpStats function when the page is fully loaded
  window.addEventListener('load', countUpStats);
  
  



  //hero fade effect
  function fadeInOnScroll() {
    const heroContent = document.querySelector('.hero-content');
    const windowHeight = window.innerHeight;
    const contentPosition = heroContent.getBoundingClientRect().top;
  
    if (contentPosition - windowHeight <= 0) {
      heroContent.classList.add('fade-in');
    }
  }
  
  // Call the fadeInOnScroll function when the page is fully loaded
  window.addEventListener('load', fadeInOnScroll);
  
  // Call the fadeInOnScroll function when the page is scrolled
  window.addEventListener('scroll', fadeInOnScroll);
  

  $(document).ready(function () {
    $('.navbar-toggler').click(function () {
      $('.sidebar').toggleClass('active');
    });
  });


// scroll fnc

  function scrollToTop(event) {
    event.preventDefault(); // Prevent default link behavior
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  const scrollToTopLink = document.getElementById('scrollToTopLink');
  scrollToTopLink.addEventListener('click', scrollToTop);
  












// About Us Page scroll function


// Function to add bounce-in class to visible elements
function addBounceInClass(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('bounce-in');
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
var observer = new IntersectionObserver(addBounceInClass, {
  root: null,
  threshold: 0.2, // Adjust this threshold as needed
});

// Observe each "about" div
var aboutDivs = document.querySelectorAll('.about-div');
aboutDivs.forEach(function (div) {
  observer.observe(div);
});





//Live stock prices

document.addEventListener("DOMContentLoaded", function () {
  const livePrices = document.getElementById("live-prices");
  const apiKey = "E0K5W2APOR7RYTO0"; // Replace with your API key
  const symbols = ["GOLD", "SILVER", "OIL", "BTCUSD", "ETHUSD"];

  async function fetchStockPrices() {
    try {
      const responses = await Promise.all(
        symbols.map((symbol) =>
          fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
          )
        )
      );
      const data = await Promise.all(responses.map((res) => res.json()));

      const prices = data.map((item, index) => {
        const price = item["Global Quote"]?.["05. price"];
        return `${symbols[index]}: $${price || "N/A"}`;
      });

      livePrices.textContent = prices.join(" | ");
    } catch (error) {
      console.error("Error fetching stock prices:", error);
      livePrices.textContent = "Failed to load stock prices.";
    }
  }

  fetchStockPrices();
  setInterval(fetchStockPrices, 30000); // Update every 30 seconds
});






// Private area logout

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "../login.html";
}


