const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      siteNav.classList.remove("is-open");
    });
  });
}

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
  const fields = [
    {
      id: "name",
      validate: (value) => value.trim().length >= 2,
      message: "Please enter your full name."
    },
    {
      id: "phone",
      validate: (value) => value.replace(/[^\d+]/g, "").length >= 8,
      message: "Please enter a valid phone number."
    },
    {
      id: "email",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Please enter a valid email address."
    },
    {
      id: "message",
      validate: (value) => value.trim().length >= 12,
      message: "Please include a few details about your vehicle or the work needed."
    }
  ];

  const formStatus = document.querySelector("#form-status");

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const setFieldState = (fieldId, isValid, message = "") => {
    const input = document.querySelector(`#${fieldId}`);
    const error = document.querySelector(`#${fieldId}-error`);

    if (!input || !error) {
      return;
    }

    input.classList.toggle("is-invalid", !isValid);
    input.setAttribute("aria-invalid", String(!isValid));
    error.textContent = message;
  };

  fields.forEach(({ id, validate, message }) => {
    const input = document.querySelector(`#${id}`);

    if (!input) {
      return;
    }

    input.addEventListener("blur", () => {
      const isValid = validate(input.value);
      setFieldState(id, isValid, isValid ? "" : message);
    });
  });

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalidField = null;
    let formIsValid = true;

    fields.forEach(({ id, validate, message }) => {
      const input = document.querySelector(`#${id}`);

      if (!input) {
        return;
      }

      const isValid = validate(input.value);
      setFieldState(id, isValid, isValid ? "" : message);

      if (!isValid && !firstInvalidField) {
        firstInvalidField = input;
      }

      if (!isValid) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      formStatus.textContent = "Please check the highlighted fields and try again.";
      formStatus.classList.remove("is-success");

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    formStatus.textContent = "Sending your enquiry...";
    formStatus.classList.remove("is-success");

    const formData = new FormData(enquiryForm);
    const payload = {};

    formData.forEach((value, key) => {
      payload[key] = value;
    });

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode(payload)
    })
      .then(() => {
        formStatus.textContent = "Thanks, your enquiry has been sent. The workshop will be in touch soon.";
        formStatus.classList.add("is-success");
        enquiryForm.reset();
        fields.forEach(({ id }) => setFieldState(id, true, ""));
      })
      .catch(() => {
        formStatus.textContent = "There was a problem sending your enquiry. Please call 0405 399 973.";
        formStatus.classList.remove("is-success");
      });
  });
}
