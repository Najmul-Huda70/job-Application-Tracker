console.log("jobTracker.js connected!");

function job(parentID, childID) {
  const parent = document.getElementById(parentID);
  const child = document.getElementById(childID);
  const boss = child.parentElement;
  const bossID = boss.id;

  const image = parent.querySelector("img");
  if (image) {
    parent.innerHTML = "";
  }
  parent.appendChild(child);

  //TODO Transfer the job -> bossID to parentID
  updateCalculation(bossID, bossID, parentID);
}
function jobRemove(id) {
  const child = document.getElementById(id);
  const boss = child.parentElement;
  const bossID = boss.id;
  child.remove();

  const image = document.getElementById(bossID).querySelector("img");
  if (image) {
    boss.innerHTML = "";
  }
  updateCalculation(bossID, "removeJobs", "invalidID");
}
