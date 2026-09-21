// // const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// // async function showWeather() {
// //   try {
// //     let city = "goa";
// //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// //     const data = await response.json();

// //     console.log("Weather data:-> ", data);

// //     let newPara = document.createElement("p");

// //     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

// //     document.body.appendChild(newPara);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // }
// // showWeather();

// const userTab = document.querySelector("[data-userWeather]");
// const searchTab = document.querySelector("[data-searchWeather]");
// const userConatiner = document.querySelector(".weather-container");
// const grantAccessContainer = document.querySelector("[grant-location-container]");
// const searchForm = document.querySelector("[data-seachForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");

// // Intially
// let currentTab = userTab; //starting mein hamara by default tab your weather/user tab hoga -> matlab your weather wala ui by default show hoga
// let API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
// currentTab.classList.add("current-tab"); //jis current tab mein ha hum, uski kuch css property ha, matlab jis tab mein hum khade hain usko highlight krdiya
// // getfromSessionStorage();

// function switchTab(clickedTab) {
//   //jab mein khada hoon same tab as current tab toh kuch krna hi nahi has means mein same tab mein hoon
//   //switch tab krna ha jab mein koi tab mein hoon and jana durse tab mein ha
//   if (clickedTab !== currentTab) {
//     currentTab.classList.remove("current-tab");
//     currentTab = clickedTab;
//     currentTab.classList.add("current-tab");

//     //ab mein jaana chaha ta hoon mein kis tab mein khada hoon
//     // kya search form wala container is invisible,if yes then make it visible
//     if (!searchForm.classList.contains("active")) {
//       //mein pehle your weather wale tab pr tha ,ab seach weather tab visible krna ha
//       userInfoContainer.classList.remove("active");
//       grantAccessContainer.classList.remove("active");
//       searchForm.classList.add("active");
//     } else {
//       //mein pehle search weather wale tab pr tha ,ab your weather tab visible krna ha
//       searchForm.classList.remove("active");
//       userInfoContainer.classList.remove("active");
//       //ab main your weather tab me aagya hu, toh weather bhi display krna padega ,so lets's check
//       // localStorage first for cooridnates , if we have saved them before
//       getfromSessionStorage();
//     }
//   }
// }
// userTab.addEventListener("click", () => {
//   //passed clicked tab as input parameter
//   switchTab(userTab);
// });

// searchTab.addEventListener("click", () => {
//   //passed clicked tab as input parameter
//   switchTab(searchTab);
// });

// //yeh check krta ha ki if coordinates are already present in session storage
// function getfromSessionStorage() {
//   const localCoordinates = sessionStorage.getItem("user-coordinates");
//   if (!localCoordinates) {
//     //agar local coordinate nahi mile -> yani coordinate saved nahi ha toh grant Access container show karo
//     grantAccessContainer.classList.add("active");
//   } else {
//     const coordinates = JSON.parse(localCoordinates);
//     fetchUserWeatherInfo(coordinates);
//   }
// }

// async function fetchUserWeatherInfo(coordinates) {
//   const { lat, lon } = coordinates;
//   //make grant container invisible
//   grantAccessContainer.classList.remove("active");
//   //make loader visible
//   loadingScreen.classList.add("active");

//   //API Call
//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//     const data = await response.json();
//     // api call kr chuke ha and data ab aachuka ha loader ko hata denge
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     console.log("error");
//   }
// }

// function renderWeatherInfo(weatherInfo) {
//   //firstly,we have to fetch the elements

//   const cityName = document.querySelector("[data-cityName]");
//   const countryIcon = document.querySelector("[data-countryIcon]");
//   const desc = document.querySelector("[data-weatherDesc]");
//   const weatherIcon = document.querySelector("[data-weatherIcon]");
//   const temp = document.querySelector("[data-temp]");
//   const windspeed = document.querySelector("[data-windspeed]");
//   const humidity = document.querySelector("[data-humidity]");
//   const cloudiness = document.querySelector("[data-cloudiness]");

//   //fetch values from weatherInfo object and put them into UI

//   cityName.innerText = weatherInfo?.name;
//   countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
//   desc.innerText = weatherInfo?.weather?.[0]?.description;
//   weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
//   temp.innerText = `${weatherInfo?.main?.temp} °C`;
//   windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
//   humidity.innerText = `${weatherInfo?.main?.humidity}%`;
//   cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
// }

// function getlocation() {
//   if (navigator.geolocation) {
//     navigation.geolocation.getCurrentPosition(showPosition);
//   } else {
//     // show an alert for no geolaction support available
//   }
// }
// function showPosition(position) {
//   const userCoordinates = {
//     lat: position.coords.latitude,
//     lon: position.coords.longitude,
//   };
//   sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
//   fetchUserWeatherInfo(userCoordinates);
// }
// const grantAccessButton = document.querySelector("[data-grantAccess]");
// grantAccessButton.addEventListener("click", getlocation);

// const searchInput = document.querySelector("[data-seachForm]");
// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let cityName = searchInput.value;
//   if (cityName === "") return;
//   else {
//     fetchSearchWeatherInfo(cityName);
//   }
// });
// async function fetchSearchWeatherInfo(city) {
//   loadingScreen.classList.add("active");
//   userInfoContainer.classList.remove("active");
//   grantAccessContainer.classList.remove("active");

//   try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//     const data = await response.json();
//     loadingScreen.classList.remove("active");
//     userInfoContainer.classList.add("active");
//     renderWeatherInfo(data);
//   } catch (err) {
//     console.log(error)
//   }
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially 

let currentTab = userTab;//starting mein your search wala UI default ha 
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");//jo tab starting mein selected ha usko mene ek css property se highlight kr diya
getfromSessionStorage();

function switchTab(clickedTab) {
    if(clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //main pehle search wale tab pr tha, ab your weather tab visible karna h 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab main your weather tab me aagya hu, toh weather bhi display karna padega, so let's check local storage first
            //for coordinates, if we haved saved them there.
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});

//check if cordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        //agar local coordinates nahi mile
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }

}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        //HW

    }

}

function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();// yeh esliye lagaya agar submit krta toh by default browser pure app rerender krdeta esliye prevent kiya browser ko uske default behaviour se
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } 
    catch(err) {
        //hW
    }
}