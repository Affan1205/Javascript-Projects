// async function apicall() {
//     const response = await fetch(`https://api.github.com/users`)
//     const data = await response.json()
//     renderData(data)
// }
// function renderData(data){
//     console.log(data)
// }

// apicall()

const searchInput = document.querySelector(".searchInput");
const searchForm = document.querySelector(".form-container");
const searchBtn = document.querySelector(".search-btn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userSearchInput = searchInput.value;
  if (userSearchInput === "") {
    console.log("not written anything.");
  } else {
    fetchUserData(userSearchInput);
  }
});

async function fetchUserData(userSearchInput) {
  //loading screen dikhani ha

  try {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    //data ui mein show karana ha
    //yahan 2 case ha ya toh jo data aaya aur so user ne search kiya match nahi ha toh alert krdo not found
    //else data mil gaya to krdo ui mein show
    data.forEach((element) => {
      if (element.login === userSearchInput) {
        console.log(element)
        renderData(element);
      }
    });
  } catch (err) {
    alert("data not found.");
  }
}
function renderData(element) {
  //fetch elements
  const profileImage = document.querySelector(".profile-image");
  const userName = document.querySelector(".user-name");
  const userJoinDate = document.querySelector(".user-join-date");
  const userGithubId = document.querySelector(".github-id");
  const userHobbies = document.querySelector(".user-hobbies");
  const repoCount = document.querySelector(".repos-count");
  const followersCount = document.querySelector(".followers-count");
  const followingsCount = document.querySelector(".followings-count");
  const userAddress = document.querySelector(".user-address");
  const userPortfolio = document.querySelector(".user-portfolio-link");
  const userTwitter = document.querySelector(".user-twitter-link");
  const userOrganization = document.querySelector(".user-organization");

  profileImage.src = element.avatar_url;
  console.log("good")
//   userName.innertext = element.name;
//   console.log("good1")
//   userJoinDate.innertext = element.created_at;
  console.log("good2")
  followersCount.innerText = `https://api.github.com/users/mojombo/followers`;
  console.log("good3")
}
