const searchInput = document.querySelector(".searchInput");
const searchForm = document.querySelector(".form-container");
const result = document.querySelector(".result");
const searchBtn = document.querySelector(".search-btn");
const clearSearch = document.querySelector(".clear-search");

const profileImage = document.querySelector(".profile-image");
const userName = document.querySelector(".user-name");
const userJoinDate = document.querySelector(".user-join-date");
const userGithubId = document.querySelector(".github-id");
const userBio = document.querySelector(".user-bio");
const repoCount = document.querySelector(".repos-count");
const followersCount = document.querySelector(".followers-count");
const followingsCount = document.querySelector(".followings-count");
const userAddress = document.querySelector(".user-address");
const userPortfolio = document.querySelector(".user-portfolio-link");
const userTwitter = document.querySelector(".user-twitter-link");
const userOrganization = document.querySelector(".user-organization");

//initial
let initialUserName = "mojombo";
settingDataToLocalStorage();

function settingDataToLocalStorage() {
  let isKeyAvailable = false;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "initialUserName") {
      isKeyAvailable = true;
      break;
    }
  }
  if (isKeyAvailable) {
    const startingUserName = localStorage.getItem("initialUserName");
    fetchInitialUserData(startingUserName);
  } else {
    localStorage.setItem("initialUserName", "mojombo");
    const startingUserName = localStorage.getItem("initialUserName");
    fetchInitialUserData(startingUserName);
  }
}

async function fetchInitialUserData(startingUserName) {
  try {
    const response = await fetch(`https://api.github.com/users/${startingUserName}`);
    const data = await response.json();
    renderData(data, startingUserName);
  } catch (err) {
    alert("unexpected error occur");
  }
}

searchInput.addEventListener("input", (e) => {
  clearSearch.classList.add("active");
});

clearSearch.addEventListener("click", (e) => {
  searchInput.value = null;
  clearSearch.classList.remove("active");
  result.classList.remove("active");
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userSearchInput = searchInput.value;
  if (userSearchInput === "") {
    return;
  } else {
    fetchUserData(userSearchInput);
  }
});

async function fetchUserData(userSearchInput) {
  //fetch data se pehle mein yeh check karunga ki user ka naam exist krta ha ki nahi
  //agar nahi krta toh mein searh not found ka message show krdunga
  //else fetch karenge data
  let isprofileData = false;
  const response = await fetch(`https://api.github.com/users`);
  const data = await response.json();
  data.forEach(function (element) {
    if (element.login === userSearchInput) {
      isprofileData = true;
    }
  });
  if (isprofileData) {
    try {
      const response = await fetch(`https://api.github.com/users/${userSearchInput}`);
      const data = await response.json();
      renderData(data, userSearchInput);
    } catch (err) {
      alert("data not found.");
    }
  } else {
    result.classList.add("active");
    // alert("data not found");
  }
}
function renderData(data, userSearchInput) {
  //fetch elements

  profileImage.src = data.avatar_url;
  userName.innerText = data?.name;
  let mydate = new Date();
  userJoinDate.innerText = `Joined ${mydate.getDate(data?.created_at)}/${mydate.getMonth(data?.created_at)}/${mydate.getFullYear(data?.created_at)}`;
  userGithubId.innerText = `@${data?.login}`;
  userGithubId.href = `https://github.com/${userSearchInput}`;
  //checking bio
  let bio = data?.bio;
  if (bio === null) {
    userBio.innerText = "This Profile has no bio";
  } else {
    userBio.innerText = data?.bio;
  }
  repoCount.innerText = data?.public_repos;
  followersCount.innerText = data?.followers;
  followingsCount.innerText = data?.following;
  //checking location
  let checkUserAddressAvailable = data?.location;
  if (checkUserAddressAvailable === null) {
    userAddress.innerText = "Not Available";
  } else {
    userAddress.innerText = data?.location;
  }
  //checking porfolio
  let checkUserPortfolioAvailable = data?.blog;
  if (checkUserPortfolioAvailable === null) {
    userPortfolio.innerText = "Not Available";
  } else {
    userPortfolio.innerText = data?.blog;
    userPortfolio.href = `${userPortfolio.innerText}`;
  }
  //checking twitter
  let isTwitterNameAvailable = data?.twitter_username;
  if (isTwitterNameAvailable === null) {
    userTwitter.innerText = "Not Available";
  } else {
    userTwitter.innerText = data?.twitter_username;
    userTwitter.href = userTwitter.innerText;
  }
  //checking company
  let checkUserOrg = data?.company;
  if (checkUserOrg === null) {
    userOrganization.innerText = "Not Available";
  } else {
    userOrganization.innerText = data?.company;
  }
}
//darkmode and light mode
const light = document.querySelector(".lightBtn");
const darkBtn = document.querySelector(".darkBtn");
const wrapper = document.querySelector(".wrapper");
const heading = document.querySelector(".h1heading");
const projectContainer = document.querySelector(".profile-container");
const userActivitySection = document.querySelector(".user-activity-section");
const locationIcon = document.querySelector(".fa-location-dot");
const porfoliolinkIcon = document.querySelector(".fa-link");
const twitterIcon = document.querySelector(".fa-twitter");
const orgIcon = document.querySelector(".fa-building");

darkBtn.addEventListener("click", () => {
  darkBtn.classList.add("inactive");
  darkBtn.classList.remove("active");
  light.classList.add("active");
  light.classList.remove("inactive");
  light.style.color = "#fff";

  wrapper.style.backgroundColor = "#141d2f";
  heading.style.color = "white";
  searchForm.style.backgroundColor = "#1e2a47";
  searchInput.style.backgroundColor = "#1e2a47";
  searchInput.style.color = "white";
  projectContainer.style.backgroundColor = "#1e2a47";
  userName.style.color = "#fff";
  userJoinDate.style.color = "#fff";
  userBio.style.color = "#d0cccc";
  followersCount.style.color = "#fff";
  repoCount.style.color = "#fff";
  followingsCount.style.color = "#fff";
  userActivitySection.style.backgroundColor = "#141d2f";
  userAddress.style.color = "#fff";
  userOrganization.style.color = "#fff";
  userTwitter.style.color = "#fff";
  userPortfolio.style.color = "#fff";
  locationIcon.style.color = "#fff";
  orgIcon.style.color = "#fff";
  porfoliolinkIcon.style.color = "#fff";
  twitterIcon.style.color = "#fff";
});
light.addEventListener("click", () => {
  light.classList.add("inactive");
  light.classList.remove("active");
  darkBtn.classList.add("active");
  darkBtn.classList.remove("inactive");

  wrapper.style.backgroundColor = "#f6f8ff";
  heading.style.color = "#4b6a9b";
  searchForm.style.backgroundColor = "#fff";
  searchInput.style.backgroundColor = "#fff";
  searchInput.style.color = "#4b6a9b";
  projectContainer.style.backgroundColor = "#fff";
  userName.style.color = "#000";

  followersCount.style.color = "#000";
  repoCount.style.color = "#000";
  followingsCount.style.color = "#000";
  userActivitySection.style.backgroundColor = " #fefefe";
  userAddress.style.color = "#4b6a9b";
  userOrganization.style.color = "#4b6a9b";
  userTwitter.style.color = "#4b6a9b";
  userPortfolio.style.color = "#4b6a9b";
  locationIcon.style.color = "#000";
  orgIcon.style.color = "#000";
  porfoliolinkIcon.style.color = "#000";
  twitterIcon.style.color = "#000";
});
