console.log("jobTracker.js is connected.");

//todo list create
let interviewList = [];
let rejectedList = [];

//todo getElementById()
//* 1. heder section card
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
//* 2.main section -> child section
const allSection = document.getElementById("allSection");
const filterSection = document.getElementById("filterSection");
//* 3. filter btn
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

//todo querySelector()
const mainContainer = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = allSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  console.log("calculateCount function called successfully.");
}
calculateCount();

//todo step-01
function toggleStyle(id) {
  //? 1. active btn color set bg-blue-600 text-white & others time default color daisyUI btn
  //* first remove all button classList: bg-blue-600, text-white
  allFilterBtn.classList.remove("bg-blue-600", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");
  //* first add id button classList: bg-blue-600, text-white
  const selectBtn = document.getElementById(id);
  selectBtn.classList.add("bg-blue-600", "text-white");

  console.log(`${id} toggleStyle set Successfully.`);

  if (id === "all-filter-btn") {
    allSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id === "interview-filter-btn") {
    filterSection.classList.remove("hidden");
    allSection.classList.add("hidden");
    renderInterview();
  } else if (id === "rejected-filter-btn") {
    filterSection.classList.remove("hidden");
    allSection.classList.add("hidden");
    renderRejected();
  }
}

//todo step-02: delegation
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("Interview")) {
    const parentNode = event.target.parentNode.parentNode;
    console.log("parentNode:", parentNode);
    //* querySelector()
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;

    const jobObject = {
      companyName,
      position,
      location,
      type,
      salary,
      status: "Interview",
      description,
    };
    const duplicateFound = interviewList.find(
      (item) => item.companyName === jobObject.companyName,
    );
    if (!duplicateFound) {
      interviewList.push(jobObject);
      console.log("interviewList push:", jobObject);
    }
    //filter
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== jobObject.companyName,
    );
    calculateCount();
    console.log("Interview button clicked!");
  } else if (event.target.classList.contains("Rejected")) {
    const parentNode = event.target.parentNode.parentNode;
    console.log("parentNode:", parentNode);
    //* querySelector()
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;

    const jobObject = {
      companyName,
      position,
      location,
      type,
      salary,
      status: "Rejected",
      description,
    };
    const duplicateFound = rejectedList.find(
      (item) => item.companyName === jobObject.companyName,
    );
    if (!duplicateFound) {
      rejectedList.push(jobObject);
      console.log("rejectedList push:", jobObject);
    }
    //filter
    interviewList = interviewList.filter(
      (item) => item.companyName !== jobObject.companyName,
    );
    calculateCount();
    console.log("Rejected button clicked!");
  }
});

//todo step-03
function renderInterview() {
  //? each intreviewList object to create a div card and then append this card filterSection
  if (interviewList.length !== 0) {
    filterSection.innerHTML = "";
  }
  for (let job of interviewList) {
    const div = document.createElement("div");
    div.className = "card card-dash bg-base-100 w-full";
    div.innerHTML = ` <div class="card-body space-y-5">
            <!-- title and position -->
            <div class="space-y-2 flex justify-between items-center">
              <div>
                <h2 class="companyName text-[#002C5C] text-2xl font-semibold">
                  ${job.companyName}
                </h2>
                <p class="position text-[#64748B] text-xl">
                  ${job.position}
                </p>
              </div>
              <div
                class="w-8 h-8 border rounded-full border-[#64748B]/20 flex justify-center items-center"
              >
                <i class="text-[#64748B] fa-regular fa-trash-can"></i>
              </div>
            </div>
            <!-- details -->
            <ul
              class="flex flex-col md:flex-row gap-3 list-disc list-inside text-[#64748B] text-xl"
            >
              <li class="location">${job.location}</li>
              <li class="type">${job.type}</li>
              <li class="salary">${job.salary}</li>
            </ul>

            <p class="description text-xl text-[#323B49]">
              ${job.description}
            </p>

            <div class="flex gap-3">
              <button
                class="Interview btn btn-outline btn-success text-2xl uppercase"
              >
                interview
              </button>
              <button
                class="Rejected btn btn-outline btn-error text-2xl uppercase"
              >
                Rejected
              </button>
            </div>
          </div>`;
    // append
    filterSection.appendChild(div);
  }
  console.log(...interviewList);
  console.log("renderInterview() called successfully.");
}
function renderRejected() {
  //? each rejectedList object to create a div card and then append this card filterSection
  if (rejectedList.length !== 0) {
    filterSection.innerHTML = "";
  }
  for (let job of rejectedList) {
    const div = document.createElement("div");
    div.className = "card card-dash bg-base-100 w-full";
    div.innerHTML = ` <div class="card-body space-y-5">
            <!-- title and position -->
            <div class="space-y-2 flex justify-between items-center">
              <div>
                <h2 class="companyName text-[#002C5C] text-2xl font-semibold">
                  ${job.companyName}
                </h2>
                <p class="position text-[#64748B] text-xl">
                  ${job.position}
                </p>
              </div>
              <div
                class="w-8 h-8 border rounded-full border-[#64748B]/20 flex justify-center items-center"
              >
                <i class="text-[#64748B] fa-regular fa-trash-can"></i>
              </div>
            </div>
            <!-- details -->
            <ul
              class="flex flex-col md:flex-row gap-3 list-disc list-inside text-[#64748B] text-xl"
            >
              <li class="location">${job.location}</li>
              <li class="type">${job.type}</li>
              <li class="salary">${job.salary}</li>
            </ul>

            <p class="description text-xl text-[#323B49]">
              ${job.description}
            </p>

            <div class="flex gap-3">
              <button
                class="Interview btn btn-outline btn-success text-2xl uppercase"
              >
                interview
              </button>
              <button
                class="Rejected btn btn-outline btn-error text-2xl uppercase"
              >
                Rejected
              </button>
            </div>
          </div>`;
    // append
    filterSection.appendChild(div);
  }
  console.log(...rejectedList);
  console.log("renderReject() called successfully.");
}
