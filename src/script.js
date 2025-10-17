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
  const backdrop = document.querySelector(".modal-backdrop");
  
  //2. Choose the event type - in this case it is when the button is clicked
  // Add a click listener to each open button
  openButtons.forEach(button => {
    button.addEventListener("click", event => {
      const targetId = event.currentTarget.dataset.target; // get ID from data-target
      const dialog = document.getElementById(targetId);    // find the matching <dialog>
      if (dialog) {
        backdrop.classList.remove("hidden"); // show backdrop
        //Every HTML element has a property called .classList
        // .add and .remove are methods of the object classList
        dialog.showModal(); // open the modal
      } 
    });
  });

  // Add a click listener to each close button
  closeButtons.forEach(button => {
    button.addEventListener("click", event => {
      const targetId = event.currentTarget.dataset.target; // get ID from data-target
      const dialog = document.getElementById(targetId);    // find the matching <dialog>
      if (dialog) {
        backdrop.classList.add("hidden"); // hide backdrop
        dialog.close();                          // close the modal
      } 
    });
  });

  //event → is the parameter that holds info about what just happened (the click event).

  //event.currentTarget → the button that was actually clicked.

  //.dataset.target → grabs the value of data-target="something" from the HTML.
}




