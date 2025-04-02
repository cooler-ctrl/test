function toggleAnswer(element) {
      let answer = element.nextElementSibling;
      let arrow = element.querySelector(".arrow");
      if (answer.style.display === "block") {
          answer.style.display = "none";
          arrow.classList.remove("open");
      } else {
          answer.style.display = "block";
          arrow.classList.add("open");
      }
  }