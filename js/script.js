document.addEventListener("DOMContentLoaded", () => {
  // Form
  const form = document.getElementById("resume-form");
  const nameContainer = document.getElementById("name-field");
  const emailContainer = document.getElementById("email-field");
  const resumeContainer = document.getElementById("resume-field");
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const resumeInput = document.getElementById("file-input");
  const fileNameDisplay = document.getElementById("file-name");
  const browseFileButton = document.getElementById("browse-file");
  const submitButton = document.getElementById("submit-resume");

  // Error texts
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const resumeError = document.getElementById("resume-error");

  // Job grid
  const jobGrid = document.querySelector(".job-grid");
  const expandButton = document.getElementById("see-all-jobs");

  // Teams scroll
  const scrollWrapper = document.querySelector(".teams-scroll");
  const scrollLeftButton = document.getElementById("scroll-left");
  const scrollRightButton = document.getElementById("scroll-right");

  const scrollAmount = 300;

  // Event listeners
  submitButton.addEventListener("click", () => {
    validateForm();
  });

  browseFileButton.addEventListener("click", () => {
    resumeInput.click();
  });

  expandButton.addEventListener("click", () => {
    toggleExpandJobs();
  });

  scrollLeftButton.addEventListener("click", () => {
    scrollWrapper.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  scrollRightButton.addEventListener("click", () => {
    scrollWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Display file name
  resumeInput.addEventListener("change", () => {
    if (resumeInput.files.length > 0) {
      fileNameDisplay.textContent = resumeInput.files[0].name;
    } else {
      fileNameDisplay.textContent = "No file chosen";
    }
  });

  // Validate form
  const validateForm = () => {
    let isValid = true;

    // Reset states
    nameContainer.classList.remove("invalid");
    emailContainer.classList.remove("invalid");
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    resumeError.innerHTML = "";

    // Validate name input
    if (nameInput.value.trim() === "") {
      isValid = false;
      nameContainer.classList.add("invalid");
      nameContainer.classList.add("shake");
      nameError.innerHTML = "Please enter your name.";

      setTimeout(() => {
        nameContainer.classList.remove("shake");
      }, 200);
    }

    // Validate email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      isValid = false;
      emailContainer.classList.add("invalid");
      emailContainer.classList.add("shake");
      emailError.innerHTML = "Please enter your email.";

      setTimeout(() => {
        emailContainer.classList.remove("shake");
      }, 200);
    } else if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      emailContainer.classList.add("invalid");
      emailContainer.classList.add("shake");
      emailError.innerHTML = "Please enter a valid email.";

      setTimeout(() => {
        emailContainer.classList.remove("shake");
      }, 200);
    }

    // Validate resume input
    if (resumeInput.files.length === 0) {
      isValid = false;
      resumeError.innerHTML = "Please attach your resume.";
      resumeContainer.classList.add("shake");

      setTimeout(() => {
        resumeContainer.classList.remove("shake");
      }, 200);
    }

    if (isValid) {
      alert("Form submitted.");
      form.submit();
    }
  };

  // See all jobs
  const toggleExpandJobs = () => {
    if (jobGrid.classList.contains("expanded")) {
      jobGrid.classList.remove("expanded");
      jobGrid.style.maxHeight = "435px";
      expandButton.textContent = "See All";
    } else {
      jobGrid.classList.add("expanded");
      jobGrid.style.maxHeight = jobGrid.scrollHeight + "px";
      expandButton.textContent = "See Less";
    }
  };
});
