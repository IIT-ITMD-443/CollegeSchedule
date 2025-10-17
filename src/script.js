//Wait Until the DOM is Ready
//Function only runs after the DOM is fullt loaded 
document.addEventListener("DOMContentLoaded", () => {
  setupModals();
});


function setupModals() {
  //Event Handling Steps

  //1. Identify the element you want to listen to
  // Select all open and close buttons (select all open and close button elements)
  const openButtons = document.querySelectorAll(".openBtn");    //document.querySelectorAll() returns a NodeList which is a collection of nodes
  const closeButtons = document.querySelectorAll(".closeBtn");  //Not the same as an array but can be iterated with forEach()
  
  //2. Choose the event type - in this case it is when the button is clicked
  // Add a click listener to each open button
  openButtons.forEach(button => {
    button.addEventListener("click", event => {
      const targetId = event.currentTarget.dataset.target; // get ID from data-target
      const dialog = document.getElementById(targetId);    // find the matching <dialog>
      if (dialog) {
        dialog.showModal(); // open the modal
        document.body.style.overflow = "hidden"; // stop scroll manually

        //Normally, the <body> element controls the page’s scrollbar.
        //you’re telling the browser:
        //“Don’t show any scrollbars or allow scrolling on this page.”
      } 
    });
  });

  // Add a click listener to each close button
  closeButtons.forEach(button => {
    button.addEventListener("click", event => {
      const targetId = event.currentTarget.dataset.target; // get ID from data-target
      const dialog = document.getElementById(targetId);    // find the matching <dialog>
      if (dialog) {
        dialog.close(); // close the modal
        document.body.style.overflow = ""; // restore scroll
      } 
    });
  });

  //event → is the parameter that holds info about what just happened (the click event).

  //event.currentTarget → the button that was actually clicked.

  //.dataset.target → grabs the value of data-target="something" from the HTML.
}




