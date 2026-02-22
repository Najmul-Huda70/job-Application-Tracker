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

  const ir = document.getElementById("IR");
  if (id === "Interview") {
    const interviewCount = document.getElementById("Interview-count").innerText;
    ir.innerText = Number(interviewCount) + " of ";
  } else if (id === "Rejected") {
    const rejectedCount = document.getElementById("Rejected-count").innerText;
    ir.innerText = Number(rejectedCount) + " of ";
  } else {
    ir.innerText = "";
  }
}

function job(parentID, childID) {
  const parent = document.getElementById(parentID);
  // console.log(parent);
  const image = parent.querySelector("img");
  if (image) {
    parent.innerHTML = "";
  }
  const child = document.getElementById(childID);
  const boss = child.parentElement;
  const bossID = boss.id;
  console.log("bossID: ", bossID);
  parent.appendChild(child);
  console.log(parent);

  const totalCount = document.getElementById("Total-count");
  const interviewCount = document.getElementById("Interview-count");
  const rejectedCount = document.getElementById("Rejected-count");

  let total_count = Number(totalCount.innerText);
  let interview_count = Number(interviewCount.innerText);
  let rejected_count = Number(rejectedCount.innerText);
  if (bossID == "All" && parentID === "Interview") {
    interviewCount.innerText = interview_count + 1;
    totalCount.innerText = total_count - 1;
    if (total_count - 1 <= 0) {
      totalCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
  if (bossID == "Rejected" && parentID === "Interview") {
    interviewCount.innerText = interview_count + 1;
    rejectedCount.innerText = rejected_count - 1;
    if (rejected_count - 1 <= 0) {
      rejectedCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
  if (bossID == "All" && parentID === "Rejected") {
    rejectedCount.innerText = rejected_count + 1;
    totalCount.innerText = total_count - 1;
    if (total_count - 1 <= 0) {
      totalCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
  if (bossID == "Interview" && parentID === "Rejected") {
    rejectedCount.innerText = rejected_count + 1;
    interviewCount.innerText = interview_count - 1;
    if (interview_count - 1 <= 0) {
      interviewCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
}
function jobRemove(id) {
  const child = document.getElementById(id);
  const boss = child.parentElement;
  const bossID = boss.id;
  child.remove();
  console.log("remove successfully!");
  // console.log("bossID: ", bossID);
  const image = document.getElementById(bossID).querySelector("img");
  if (image) {
    boss.innerHTML = "";
  }

  const totalCount = document.getElementById("Total-count");
  const interviewCount = document.getElementById("Interview-count");
  const rejectedCount = document.getElementById("Rejected-count");

  let total_count = Number(totalCount.innerText);
  let interview_count = Number(interviewCount.innerText);
  let rejected_count = Number(rejectedCount.innerText);

  if (bossID == "All") {
    totalCount.innerText = total_count - 1;
    if (total_count - 1 <= 0) {
      totalCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
  if (bossID == "Rejected") {
    rejectedCount.innerText = rejected_count - 1;
    if (rejected_count - 1 <= 0) {
      rejectedCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
    const ir = document.getElementById("IR");
    ir.innerText = rejectedCount.innerText + " of ";
  }

  if (bossID == "Interview") {
    interviewCount.innerText = interview_count - 1;
    if (interview_count - 1 <= 0) {
      interviewCount.innerText = 0;
      const newCard = document.createElement("div");
      newCard.innerHTML = `<div
          class="card card-dash bg-base-100 w-full h-100 flex justify-center items-center space-y-3"
        >
          <div><img src="./jobs.png" alt="" /></div>
          <h2 class="text-[#002C5C] text-2xl font-semibold">
            No jobs available
          </h2>
          <p class="text-[#64748B]">
            Check back soon for new job opportunities
          </p>
        </div>`;
      boss.append(newCard);
    }
  }
  const ir = document.getElementById("IR");
  ir.innerText = interviewCount.innerText + " of ";
}
