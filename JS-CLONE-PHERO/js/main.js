const milestoneData = JSON.parse(data).data;
// console.log(milestoneData);

// load course milestone data
function loadMilestones() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onClick="openMilestone(this)">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
        }).join("")}
        </div>
      </div>`;
    }).join("")}`;
}

function openMilestone(milestoneElement) {
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

}

loadMilestones();