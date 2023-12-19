function handleClick() {
  document.querySelector(".select-plan-section").style.display = "none";
}
const cancelPlan = document.querySelector("#cancel-plan");
cancelPlan.addEventListener("click", handleClick);

// Setup dropdown button
const close = document.querySelector("#close");
const checkBoxes = document.querySelector(".checkboxes");
const open = document.querySelector("#open");
const dropDownBtn = document.querySelector(".setup-dropdown-button");

const toggleDropDown = () => {
  if (checkBoxes.style.display === "none") {
    checkBoxes.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
  } else {
    checkBoxes.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
  }
};

dropDownBtn.addEventListener("click", toggleDropDown);

// profile dropdown button
const profileDropdownBtn = document.querySelector(".profile-dropdown");
const myStoreTab = document.querySelector(".my-store");
const onProfileDropdown = () => {
  myStoreTab.style.display =
    myStoreTab.style.display === "none" ? "flex" : "none";
};

profileDropdownBtn.addEventListener("click", onProfileDropdown);

// Notification dropdown
const notifBellBtn = document.querySelector(".notification-bell");
const notifMsg = document.querySelector(".show-notification");

const onNotifBellBtnPress = () => {
  notifMsg.style.display = notifMsg.style.display == "none" ? "flex" : "none";
};

notifBellBtn.addEventListener("click", onNotifBellBtnPress);
// Control the dropdowns
