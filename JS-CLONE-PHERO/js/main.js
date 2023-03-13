const milestoneData = JSON.parse(data).data;
// console.log(milestoneData);

// load course milestone data
function loadMilestones() {
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${milestoneData
    .map(function (milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${milestone._id
        })" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules
          .map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join("")}
        </div>
      </div>`;
    }).join("")}`;
}

function openMilestone(milestoneElement, id) {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  // first remove previous active class if any [other than the clicked one]
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  // toggle current clicked one
  milestoneElement.classList.toggle("active");

  // first hide previous panel if open [other than the clicked one]
  if (!currentPanel.classList.contains("show") && shownPanel) {
    shownPanel.classList.remove("show");
  }

  // toggle current element
  currentPanel.classList.toggle("show");

  showMilestone(id);
}

function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestoneData[id].image;
  name.innerText = milestoneData[id].name;
  details.innerText = milestoneData[id].description;
}

// listen for image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
  this.style.opacity = 1;
}

function markMileStone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item = document.getElementById(id);
  console.log(id);
  if (checkbox.checked) {
    // mark as done 
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  } else {
    doneList.removeChild(item);
    milestonesList.appendChild(item);
    reload();
  }
}

function reload() {
  console.log("reload");
}


loadMilestones();