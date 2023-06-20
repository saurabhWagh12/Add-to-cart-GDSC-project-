
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".add_btn");



// btnsOpenModal.addEventListener("click",openMODAL);


// btnCloseModal.addEventListener("click",closeMODAL);
// overlay.addEventListener("click",closeMODAL);

// function openMODAL(){
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//     }

// function closeMODAL(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// }

// document.addEventListener("keydown",function(event){
//     if(event.key==='Escape'){
//         // if(!modal.classList.contains("hidden"))
//         closeMODAL();
//     }

// });




function f(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  
  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    // Send the latitude and longitude to the server via a POST request
    // sendLocationData(latitude, longitude);
    console.log(latitude,longitude);
  }
}
