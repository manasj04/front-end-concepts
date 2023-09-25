//async vs normal fn
// async fn always returns a promise

// 1. We can return a promise directly (see eg below)
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved promise p");
  }, 10000);
});

const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved promise q");
  }, 5000);
});

// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// dataPromise.then((data) => console.log(data));

// or 2. if we dont return a promise (eg we do return "Hello"), this will automatically wrap inside a promise(see eg below)
// async function getData_1() {
//   return "Hello";
// }

// const dataPromise_1 = getData_1();
// dataPromise_1.then((data) => console.log(data));

//before async/await
// function beforeAwait(){
//     p.then( data => console.log(data));
//     //JS engine wont wait for promise to resolve
//     console.log("Before await");
// }
// beforeAwait();

//after aync/await
// async function afterAwait() {
//   const data = await p;
//   //JS engine will wait for promise to resolve
//   console.log("After await");
//   console.log(data);
// }
// afterAwait();

//await can only be used inside an async fn

//Interesting interview problems
// async function afterAwait() {
//   console.log("Hello");
//   const data = await p;
//   console.log("After await");
//   console.log(data);

//   const data2 = await p;
//   console.log("After await 2");
//   console.log(data2);
// }
// afterAwait();
//what will happen? will JS wait 10s + 10s?

// async function afterAwait() {
//   console.log("Hello");
//   const data = await p;
//   console.log("After await");
//   console.log(data);

//   const data2 = await q;
//   console.log("After await 2");
//   console.log(data2);
// }
// afterAwait();
//what will happen? will JS wait 10s + 5s? Will the order change?

async function afterAwait() {
  console.log("Hello");
  const data = await q;
  console.log("After await");
  console.log(data);

  const data2 = await p;
  console.log("After await 2");
  console.log(data2);
}
afterAwait();
//what will happen after reversing order of p and q?

//error handling
//before aync/await we have .catch method
//after we wrap our code in try catch
// async function afterAwait() {
//   try {
//     const data = await p;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
