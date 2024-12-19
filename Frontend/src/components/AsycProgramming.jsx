import React, { useState, useEffect } from "react";
import { BsFillClipboard2Fill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

const AsyncProgramming = () => {
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-lg md:text-xl font-bold mb-4 text-blue-500 dark:text-yellow-500">
        Asynchronous Programming in JavaScript
      </h1>
      <p className="mb-6 text-sm md:text-base">
        Asynchronous programming is a fundamental concept for modern JavaScript
        development. It allows you to handle tasks like fetching data from APIs
        or performing I/O operations without blocking the execution of other
        code. In this guide, we'll explore the different techniques used in
        asynchronous programming and how to effectively work with them in
        JavaScript.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        What is Asynchronous Programming?
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Asynchronous programming enables your program to initiate a task and
        move on to the next one without waiting for the first task to finish. In
        traditional, synchronous programming, each task must be completed before
        moving to the next, which can slow down performance, especially in web
        applications. Asynchronous programming solves this by allowing tasks to
        run in the background, improving efficiency.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        The Callback Function: The First Step
      </h2>
      <p className="mb-6 text-sm md:text-base">
        One of the earliest approaches to handling asynchronous operations in
        JavaScript is through callback functions. A callback is a function
        passed as an argument to another function, which is then executed once a
        task is completed.
      </p>
      <div className="mb-6 relative">
        <button
          onClick={() => copyToClipboard(callbackexample)}
          className="absolute top-1 right-1 px-3 py-1 text-white text-sm"
        >
          {copied ? <FaCheckCircle /> : <BsFillClipboard2Fill />}
        </button>
        <pre className="text-sm">
          <code className="language-javascript">{callbackexample}</code>
        </pre>
      </div>
      <p className="mb-6 text-sm md:text-base">
        While callbacks are simple to use, they can lead to "callback hell" when
        you nest many callbacks inside each other. This makes the code harder to
        read and maintain.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Promises: A Better Solution
      </h2>
      <p className="mb-6 text-sm md:text-base">
        To improve upon callbacks, JavaScript introduced promises. A promise
        represents a value that might be available now, or in the future, or
        never. It allows you to handle asynchronous operations more gracefully,
        providing a more structured way to deal with asynchronous code.
      </p>
      <pre className="mb-6 relative">
        <button
          onClick={() => copyToClipboard(promiseExample)}
          className="absolute top-2 right-2 px-3 py-1 text-white font-thin text-sm"
        >
          {copied ? <FaCheckCircle /> : <BsFillClipboard2Fill />}
        </button>
        <code className="language-javascript">{promiseExample}</code>
      </pre>

      <p className="mb-6 text-sm md:text-base">
        Promises make it easier to handle errors and manage asynchronous
        operations in a more readable way, reducing the complexity of nested
        functions.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Async/Await: Simplifying Async Code
      </h2>
      <p className="mb-6 text-sm md:text-base">
        The async/await syntax, introduced in ECMAScript 2017, is the modern way
        of working with asynchronous code. It is built on top of promises, but
        it allows you to write asynchronous code in a synchronous style, which
        makes it more readable and easier to maintain.
      </p>
      <pre className="mb-6 relative">
        <button
          onClick={() => copyToClipboard(asyncExample)}
          className="absolute top-2 right-2 px-3 py-1 text-white font-thin text-sm"
        >
          {copied ? <FaCheckCircle /> : <BsFillClipboard2Fill />}
        </button>
        <code className="language-javascript">{asyncExample}</code>
      </pre>
      <p className="mb-6 text-sm md:text-base">
        With async/await, the code looks cleaner and more natural, as if it’s
        synchronous, even though the operations are asynchronous. You can also
        use `try/catch` to handle errors, making it easier to debug.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Why is Asynchronous Programming Important?
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Asynchronous programming is essential in web development, particularly
        when interacting with external data sources. For example, making HTTP
        requests to fetch data from an API or loading resources without blocking
        the UI. Using asynchronous techniques, you can:
      </p>
      <ul className="mb-6 text-sm md:text-base list-disc ml-6">
        <li>
          Improve application performance by not blocking the main thread.
        </li>
        <li>
          Allow users to interact with the app while background tasks run.
        </li>
        <li>
          Handle complex workflows like fetching data from multiple sources
          without waiting for one operation to finish before starting another.
        </li>
      </ul>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Handling Errors in Asynchronous Code
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Asynchronous code introduces the potential for errors that may occur
        during the execution of tasks. Both promises and async/await provide
        mechanisms for handling these errors:
      </p>
      <ul className="list-disc ml-6 mb-6 text-sm md:text-base">
        <li>Promises: Use `.catch()` to handle errors.</li>
        <li>Async/Await: Use `try/catch` blocks to handle exceptions.</li>
      </ul>

      <h2 className="text-base md:text-lg font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Conclusion
      </h2>
      <p className="mb-6 text-sm md:text-base">
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
