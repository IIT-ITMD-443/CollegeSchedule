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

  let activeSemester = null;
  openButtons.forEach(button => {
    button.addEventListener("click", event => {
      const targetId = event.currentTarget.dataset.target; // get ID from data-target
      const dialog = document.getElementById(targetId);    // find the matching <dialog>
      activeSemester = event.currentTarget.closest('.semester'); // remember which semester
      const form = dialog.querySelector('form');

      if (dialog) {
        if (form) form.reset(); // clear before showing
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
      
      
      if (dialog && activeSemester) {
        setUpClasses(activeSemester);

        dialog.close(); // close the modal
        activeSemester = null; // reset
      
        document.body.style.overflow = ""; // restore scroll
      } 
    });
  });

  //event → is the parameter that holds info about what just happened (the click event).

  //event.currentTarget → the button that was actually clicked.

  //.dataset.target → grabs the value of data-target="something" from the HTML.
}

function setUpClasses(semester) {
  const box = document.createElement('div');
  box.classList.add('box');

  const boxDesc= document.createElement('div');
  boxDesc.classList.add('boxDesc');

  const heading = document.createElement('h3');
  const cname = document.getElementById('courseName');
  heading.textContent = cname.value;
  box.appendChild(heading);

  // collect all checked labels
  const checkedLabels = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.nextElementSibling.textContent)
    .join(', '); // combine all into one string

  const tags = document.createElement('p');
  tags.textContent = `Tags: ${checkedLabels || 'None'}`;
  boxDesc.appendChild(tags);

  const credits = document.createElement('p');
  const creditform = document.getElementById('credits');
  credits.textContent = creditform.value;
  boxDesc.appendChild(credits);

  box.appendChild(boxDesc);

  // add to the right semester
  semester.querySelector('.classes').appendChild(box);

}




