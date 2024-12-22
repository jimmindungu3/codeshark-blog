import React, { useState, useEffect } from "react";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

const AsyncProgramming = () => {
  const [copiedStates, setCopiedStates] = useState({
    callback: false,
    promise: false,
    async: false,
  });

  const callbackexample = `function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((message) => {
  console.log(message); // Output: Data fetched!
});`;

  const promiseExample = `function fetchData() {
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
  });`;

  const asyncExample = `async function fetchData() {
  return "Data fetched!";
}

async function displayData() {
  const message = await fetchData();
  console.log(message); // Output: Data fetched!
}

displayData();`;

  const copyToClipboard = (code, key) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedStates((prevState) => ({
        ...prevState,
        [key]: true,
      }));
      setTimeout(() => {
        setCopiedStates((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }, 2000);
    });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="p-2 md:p-6 mx-auto bg-white dark:bg-gray-800">
      <h1 className="text-xl md:text-3xl font-bold mb-2 text-blue-500 dark:text-yellow-500">
        Asynchronous Programming in JavaScript
      </h1>
      <p className="mb-6 text-sm md:text-base text-gray-800 dark:text-gray-300">
        Asynchronous programming is a fundamental concept for modern JavaScript
        development. It allows you to handle tasks like fetching data from APIs
        or performing I/O operations without blocking the execution of other
        code. In this guide, we'll explore the different techniques used in
        asynchronous programming and how to effectively work with them in
        JavaScript.
      </p>

      {/* Callback Example */}
      <h2 className="text-base md:text-lg font-semibold mb-2 text-blue-500 dark:text-yellow-500">
        The Callback Function: The First Step
      </h2>
      <p className="mb-6 text-sm md:text-base text-gray-800 dark:text-gray-300">
        One of the earliest approaches to handling asynchronous operations in
        JavaScript is through callback functions. A callback is a function
        passed as an argument to another function, which is then executed once a
        task is completed.
      </p>
      <div className="mb-4 bg-gray-900">
        <div className="flex justify-between text-sm px-4 py-1 text-white dark:text-white">
          <div className="">JavaScript</div>
          <button onClick={() => copyToClipboard(callbackexample, "callback")}>
            {copiedStates.callback ? (
              <div className="flex gap-2 items-center">
                <FaCheckCircle />
                Copied
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <BsFillClipboard2Fill />
                Copy code
              </div>
            )}
          </button>
        </div>
        <pre className="text-sm">
          <code className="language-javascript">{callbackexample}</code>
        </pre>
      </div>

      {/* Promise Example */}
      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Promises: A Better Solution
      </h2>
      <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
        To improve upon callbacks, JavaScript introduced promises. A promise
        represents a value that might be available now, or in the future, or
        never. It allows you to handle asynchronous operations more gracefully,
        providing a more structured way to deal with asynchronous code.
      </p>
      <div className="mb-4 bg-gray-900">
        <div className="flex justify-between text-sm px-4 py-1 text-white dark:text-white">
          <div className="">JavaScript</div>
          <button onClick={() => copyToClipboard(promiseExample, "promise")}>
            {copiedStates.promise ? (
              <div className="flex gap-2 items-center">
                <FaCheckCircle />
                Copied
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <BsFillClipboard2Fill />
                Copy code
              </div>
            )}
          </button>
        </div>
        <pre className="text-sm">
          <code className="language-javascript">{promiseExample}</code>
        </pre>
      </div>

      {/* Async/Await Example */}
      <h2 className="text-base md:text-lg font-semibold mb-2 text-blue-500 dark:text-yellow-500">
        Async/Await: Simplifying Async Code
      </h2>
      <p className="mb-4 text-sm md:text-base text-gray-800 dark:text-gray-300">
        The async/await syntax, introduced in ECMAScript 2017, is the modern way
        of working with asynchronous code. It is built on top of promises, but
        it allows you to write asynchronous code in a synchronous style, which
        makes it more readable and easier to maintain.
      </p>
      <div className="mb-4 bg-gray-900">
        <div className="flex justify-between text-sm px-4 py-1 text-white dark:text-white">
          <div className="">JavaScript</div>
          <button onClick={() => copyToClipboard(asyncExample, "async")}>
            {copiedStates.async ? (
              <div className="flex gap-2 items-center">
                <FaCheckCircle />
                Copied
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <BsFillClipboard2Fill />
                Copy code
              </div>
            )}
          </button>
        </div>
        <pre className="text-sm">
          <code className="language-javascript">{asyncExample}</code>
        </pre>
      </div>
      <h2 className="text-base md:text-lg font-semibold mb-2 text-blue-500 dark:text-yellow-500">
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
