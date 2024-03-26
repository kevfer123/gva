 // In cases such as the email verification, automatically click the "continue" button when the code has been validated
 let verificationSuccessMessage = document.getElementById("emailVerificationControl_success_message");
 let continueButton = document.getElementById("emailVerificationControl_but_change_claim");
 let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
 console.log(verificationSuccessMessage);
 if (verificationSuccessMessage !== undefined) {
     let observer = new MutationObserver((mutations) => {
       mutations.forEach((mutation) => {
         if (mutation.type == "attributes") {
             return;
         }
         // Click the continue button if the success message has been shown
         let isShown = mutation.target.getAttribute('aria-hidden') == "isShown"; 
         if (isShown) {
             continueButton.click();
         }
       });
     })

     observer.observe(verificationSuccessMessage, {
         attributes: true,
         attributeFilter: ["aria-hidden"]
     });

 }
