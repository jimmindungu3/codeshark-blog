import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

const AsyncProgramming = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="p-2 md:p-6 mx-auto bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <a className="group text-xl md:text-3xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
          Asynchronous Programming in JavaScript
        </a>
      </div>

      <p className="mb-6 text-sm md:text-base text-gray-800 dark:text-gray-300">
        Asynchronous programming is a fundamental concept for modern JavaScript
        development. It allows you to handle tasks like fetching data from APIs
        or performing I/O operations without blocking the execution of other
        code. In this guide, we'll explore the different techniques used in
        asynchronous programming and how to effectively work with them in
        JavaScript.
      </p>

      {/* Callback Example */}
      <div className="flex items-center">
        <a className="group text-base md:text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
          The Callback Function: The First Step
        </a>
      </div>

      <p className="mb-6 text-sm md:text-base text-gray-800 dark:text-gray-300">
        One of the earliest approaches to handling asynchronous operations in
        JavaScript is through callback functions. A callback is a function
        passed as an argument to another function, which is then executed once a
        task is completed.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((message) => {
  console.log(message); // Output: Data fetched!
});`}</code>
      </pre>

      {/* Promise Example */}
      <div className=" text-base md:text-lg font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-300">
        Promises: A Better Solution
      </div>

      <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
        To improve upon callbacks, JavaScript introduced promises. A promise
        represents a value that might be available now, or in the future, or
        never. It allows you to handle asynchronous operations more gracefully,
        providing a more structured way to deal with asynchronous code.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log(message); // Output: Data fetched!
  })
  .catch((error) => {
    console.error(error);
  });`}</code>
      </pre>

      {/* Async/Await Example */}
      <div className="text-base md:text-lg font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-300">
        Async/Await: Simplifying Async Code
      </div>

      <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
        The async/await syntax, introduced in ECMAScript 2017, is the modern way
        of working with asynchronous code. It is built on top of promises, but
        it allows you to write asynchronous code in a synchronous style, which
        makes it more readable and easier to maintain.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`async function fetchData() {
  return "Data fetched!";
}

async function displayData() {
  const message = await fetchData();
  console.log(message); // Output: Data fetched!
}

displayData();`}</code>
      </pre>

      <h2 className="text-base md:text-lg font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300">
        Conclusion
      </h2>
      <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
        Asynchronous programming is a critical skill for modern JavaScript
        developers. Mastering callbacks, promises, and async/await will enable
        you to write more efficient and scalable code. By understanding how to
        handle async operations and errors effectively, you will be able to
        build faster, more responsive web applications.
      </p>
    </div>
  );
};

export default AsyncProgramming;
