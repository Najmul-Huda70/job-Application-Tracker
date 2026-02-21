function showOnly(id) {
  const all = document.getElementById("All");
  const interview = document.getElementById("Interview");
  const rejected = document.getElementById("Rejected");
  // hide all option
  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");
  // remove hidden id
  document.getElementById(id).classList.remove("hidden");
  console.log("showonly");
}

function job(parentID, childID) {
  const parent = document.getElementById(parentID);
  console.log(parent);
  const image = parent.querySelector("img");
  if (image) {
    parent.innerHTML = "";
  }
  const child = document.getElementById(childID).innerHTML;
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.classList.add("card-dash");
  newCard.classList.add("bg-base-100");
  newCard.classList.add("w-full");
  newCard.innerHTML = child;
  // console.log(newCard);
  parent.appendChild(newCard);
  console.log(parent);
}
