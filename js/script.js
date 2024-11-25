document.addEventListener("DOMContentLoaded", () => {
  // Form
  const form = document.getElementById("resume-form");
  const nameContainer = document.getElementById("name-field");
  const emailContainer = document.getElementById("email-field");
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
  let isExpanded = false;

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
      nameError.innerHTML = "Please enter your name.";
    }

    // Validate email input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      isValid = false;
      emailContainer.classList.add("invalid");
      emailError.innerHTML = "Please enter your email.";
    } else if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      emailContainer.classList.add("invalid");
      emailError.innerHTML = "Please enter a valid email.";
    }

    // Validate resume input
    if (resumeInput.files.length === 0) {
      isValid = false;
      resumeError.innerHTML = "Please attach your resume.";
    }

    if (isValid) {
      alert("Form submitted.");
      form.submit();
    } else {
      alert("Please correct the highlighted fields.");
    }
  };

  // See all jobs
  const toggleExpandJobs = () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      jobGrid.classList.add("expanded");
      expandButton.textContent = "See Less";
    } else {
      jobGrid.classList.remove("expanded");
      expandButton.textContent = "See All";
    }
  };
});
