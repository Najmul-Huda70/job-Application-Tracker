console.log("machine.js connected!");

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

  updateCalculation(id, "invalidID", "invalidID");
}

//TODO Append when job section is  empty
function appendEmpty(id) {
  const parentId = document.getElementById(id);
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
  parentId.appendChild(newCard);
  console.log(`Append successful in ${parentId}.`);
}

function updateCalculation(updateID, id_1, id_2) {
  console.log("function has 3 id is ", updateID, id_1, id_2);

  //! get element by id -> object
  const totalCount = document.getElementById("Total-count");
  const interviewCount = document.getElementById("Interview-count");
  const rejectedCount = document.getElementById("Rejected-count");
  const job = document.getElementById("jobs");

  //! object innerText -> convert to Number
  let total_count = Number(totalCount.innerText);
  let interview_count = Number(interviewCount.innerText);
  let rejected_count = Number(rejectedCount.innerText);

  //TODO transfer id_1 to id_2
  if (id_1 == "All" && id_2 === "Interview") {
    interview_count++;
    interviewCount.innerText = interview_count;
    if (total_count <= interview_count + rejected_count) {
      appendEmpty(id_1);
    }
  }
  if (id_1 == "Rejected" && id_2 === "Interview") {
    interview_count++;
    rejected_count--;

    if (rejected_count <= 0) {
      rejected_count = 0;
      appendEmpty(id_1);
    }

    interviewCount.innerText = interview_count;
    rejectedCount.innerText = rejected_count;
  }

  if (id_1 == "All" && id_2 === "Rejected") {
    rejected_count += 1;
    rejectedCount.innerText = rejected_count;
    if (total_count <= interview_count + rejected_count) {
      appendEmpty(id_1);
    }
  }
  if (id_1 == "Interview" && id_2 === "Rejected") {
    rejected_count++;
    interview_count--;

    if (interview_count <= 0) {
      interview_count = 0;
      appendEmpty(id_1);
    }

    rejectedCount.innerText = rejected_count;
    interviewCount.innerText = interview_count;
  }

  // TODO Job remove function
  if (updateID == "All" && id_1 === "removeJobs") {
    total_count--;
    totalCount.innerText = total_count;
    if (total_count <= 0) {
      totalCount.innerText = 0;
      appendEmpty(updateID);
    }
    job.innerText = total_count;
  }

  if (updateID == "Rejected" && id_1 === "removeJobs") {
    rejected_count--;
    total_count--;
    rejectedCount.innerText = rejected_count;
    totalCount.innerText = total_count;
    if (rejected_count <= 0) {
      rejectedCount.innerText = 0;
      rejected_count = 0;
      appendEmpty(updateID);
    }
    if (total_count <= 0) {
      totalCount.innerText = 0;
      appendEmpty("All");
    }
  }

  if (updateID == "Interview" && id_1 === "removeJobs") {
    interview_count--;
    total_count--;
    interviewCount.innerText = interview_count;
    totalCount.innerText = total_count;
    if (interview_count <= 0) {
      interviewCount.innerText = 0;
      appendEmpty(updateID);
    }
    if (total_count <= 0) {
      totalCount.innerText = 0;
      appendEmpty("All");
    }
  }

  //TODO finall update
  if (updateID === "Interview") {
    job.innerText = interview_count + " of " + total_count;
  } else if (updateID === "Rejected") {
    job.innerText = rejected_count + " of " + total_count;
  } else {
    job.innerText = total_count;
  }
}
