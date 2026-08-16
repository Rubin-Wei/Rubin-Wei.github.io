(function () {
  "use strict";

  var contact = document.querySelector("[data-email-contact]");
  if (!contact) {
    return;
  }

  var trigger = contact.querySelector(".rubin-email__trigger");
  var popover = contact.querySelector(".rubin-email__popover");
  var copyButton = contact.querySelector(".rubin-email__copy");
  var sendButton = contact.querySelector(".rubin-email__send");
  var status = contact.querySelector(".rubin-email__status");
  var resetTimer;

  function setOpen(isOpen, returnFocus) {
    popover.hidden = !isOpen;
    trigger.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen && returnFocus) {
      trigger.focus();
    }
  }

  function fallbackCopy(value) {
    var field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, field.value.length);

    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }

    field.remove();
    return copied;
  }

  function showCopyResult(copied) {
    window.clearTimeout(resetTimer);
    copyButton.textContent = copied ? "Copied" : "Copy failed";
    status.textContent = copied ? "Email address copied to clipboard." : "Unable to copy the email address.";
    resetTimer = window.setTimeout(function () {
      copyButton.textContent = "Copy";
      status.textContent = "";
    }, 1800);
  }

  trigger.addEventListener("click", function () {
    setOpen(popover.hidden, false);
  });

  copyButton.addEventListener("click", function () {
    var email = copyButton.getAttribute("data-email");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(function () {
          showCopyResult(true);
        })
        .catch(function () {
          showCopyResult(fallbackCopy(email));
        });
      return;
    }

    showCopyResult(fallbackCopy(email));
  });

  sendButton.addEventListener("click", function () {
    var email = sendButton.getAttribute("data-email");
    setOpen(false, false);
    window.location.href = "mailto:" + email;
  });

  document.addEventListener("click", function (event) {
    if (!popover.hidden && !contact.contains(event.target)) {
      setOpen(false, false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !popover.hidden) {
      setOpen(false, true);
    }
  });
}());
