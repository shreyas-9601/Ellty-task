const selectAllCheckbox = document.getElementById("selectAll");
const page1Checkbox = document.getElementById("page1btn");
const page2Checkbox = document.getElementById("page2btn");
const page3Checkbox = document.getElementById("page3btn");
const page4Checkbox = document.getElementById("page4btn");

const submitButton = document.getElementById("mySubmit");

selectAllCheckbox.addEventListener("change", function() {
  const isChecked = selectAllCheckbox.checked;
  page1Checkbox.checked = isChecked;
  page2Checkbox.checked = isChecked;
  page3Checkbox.checked = isChecked;
  page4Checkbox.checked = isChecked;
});

submitButton.addEventListener("click", function() {
  let message = "";
  let anyPageSelected = false;
  
  if (selectAllCheckbox.checked) {
    message += "You are selecting all pages\n";
    anyPageSelected = true;
  } else {
    if (page1Checkbox.checked) {
      message += "You are choosing Page 1\n";
      anyPageSelected = true;
    }
    if (page2Checkbox.checked) {
      message += "You are choosing Page 2\n";
      anyPageSelected = true;
    }
    if (page3Checkbox.checked) {
      message += "You are choosing Page 3\n";
      anyPageSelected = true;
    }
    if (page4Checkbox.checked) {
      message += "You are choosing Page 4\n";
      anyPageSelected = true;
    }
  }
  
  if (!anyPageSelected) {
    alert("You must select at least one page");
    return;
  }
  
  alert(message.trim());
});
