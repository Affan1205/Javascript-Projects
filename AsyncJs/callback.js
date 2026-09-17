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
function orderFood() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Placing Order...");
      //   resolve("Order Accepted Successfully");
      reject("site is under maintenance");
    }, 3000);
  });
  return promise;
}
function foodPrepared(orderStatus) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(orderStatus);
      resolve("Food is Preparing");
    }, 3000);
  });
  return promise;
}
function deliverFood(foodStatus) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(foodStatus);
      resolve("Food prepared..");
    }, 2000);
  });
  return promise;
}
function deliverFood(foodStatus) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(foodStatus);
      resolve("Food prepared..");
    }, 2000);
  });
  return promise;
}
function deliveryStatus(deliveryStatus) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(deliveryStatus);
      resolve("Delivery On the way..");
    }, 2000);
  });
  return promise;
}
orderFood()
  .then(function (result) {
    return foodPrepared(result);
  })
  .then(function (result) {
    return deliverFood(result);
  })
  .then(function (result) {
    return deliveryStatus(result);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
