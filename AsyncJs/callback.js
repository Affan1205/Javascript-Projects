// //An food order application dummy simulation
// function orderPlaced(callback) {
//   console.log("Payment is in Progress..");
//   setTimeout(() => {
//     console.log("Payement Done !! ORDER PLACED SUCCESSFULLY");
//     callback()
//   }, 3000);
// }
// function prepareFood(callback) {
//   console.log("Food Preperation is in progress...");
//   setTimeout(() => {
//     console.log("FOOD IS READY TO PICKUP");
//     callback();
//   }, 2000);
// }
// function deliveryPartner(callback) {
//   console.log("Way to pickup the order...");
//   setTimeout(() => {
//     console.log("PICK UP THE FOOD FROM RESTAURANT");
//     callback();
//   }, 3000);
// }
// function orderRecived() {
//   console.log("Delivery Partner reach the location...");
//   setTimeout(() => {
//     console.log("ORDER RECEIVED SUCCESSFULLY.");
//   }, 2000);
// }
// // js run the function form inside immediately
// orderPlaced(()=>{
//     prepareFood(()=>{
//         deliveryPartner(()=>{
//             orderRecived();
//         })
//     })
// })

//PROMISESSSSSSSSSSSSSSSSSSSSSSSSSS
// function orderFood() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Placing Order...");
//       //   resolve("Order Accepted Successfully");
//       reject("site is under maintenance");
//     }, 3000);
//   });
//   return promise;
// }
// function foodPrepared(orderStatus) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(orderStatus);
//       resolve("Food is Preparing");
//     }, 3000);
//   });
//   return promise;
// }
// function deliverFood(foodStatus) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(foodStatus);
//       resolve("Food prepared..");
//     }, 2000);
//   });
//   return promise;
// }
// function deliverFood(foodStatus) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(foodStatus);
//       resolve("Food prepared..");
//     }, 2000);
//   });
//   return promise;
// }
// function deliveryStatus(deliveryStatus) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(deliveryStatus);
//       resolve("Delivery On the way..");
//     }, 2000);
//   });
//   return promise;
// }
// orderFood()
//   .then(function (result) {
//     return foodPrepared(result);
//   })
//   .then(function (result) {
//     return deliverFood(result);
//   })
//   .then(function (result) {
//     return deliveryStatus(result);
//   })
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//Async - await
function orderFood() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Placing Order...");
      // resolve("Order Accepted Successfully");
      reject("site is under maintenance");
    }, 3000);
  });
  return promise;
}
function foodPrepared() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food is preparing");
      resolve("Food is Preparing");
    }, 3000);
  });
  return promise;
}
function deliverFood() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food prepared..");
      resolve("Food prepared..");
    }, 2000);
  });
  return promise;
}
function deliveryStatus() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delivery On the way..");
      resolve("Delivery On the way..");
    }, 2000);
  });
  return promise;
}

async function orderingFoodOnline() {
  //idhar hum har promise ka single handedly error sambhal rahe ha
  try {
    await orderFood();
    console.log("2");
  } catch (error) {
    console.log(error);
  }
  await foodPrepared();
  console.log("3");
  await deliverFood();
  console.log("4");
  await deliveryStatus();
  console.log("end");
  
  //Agar ek bhi promise reject hua toh usse aage nahi chalega
  // try {
  //   await orderFood();
  //   console.log("2");
  //   await foodPrepared();
  //   console.log("3");
  //   await deliverFood();
  //   console.log("4");
  //   await deliveryStatus();
  //   console.log("end");
  // } catch (error) {
  //   console.log(error);
  // }
}

console.log("start");
orderingFoodOnline();
