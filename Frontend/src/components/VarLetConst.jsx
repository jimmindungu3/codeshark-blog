import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

const VarLetConst = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 mb-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-200">
        Understanding Var, Let, and Const in JavaScript
      </h1>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        1. Var
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>var</strong> was introduced in the earliest versions of
        JavaScript (ES1, 1997) as the only way to declare variables. However, it
        has several quirks, particularly around scoping, redeclaration, and
        hoisting, which led to the introduction of <strong>let</strong> and{" "}
        <strong>const</strong> in ES6 (2015).
      </p>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Scoping
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Variables declared with <strong>var</strong> are function-scoped. This
        means they are accessible throughout the entire function in which they
        are declared, even if the declaration occurs within a block (e.g.,
        inside an if statement). However, they are not accessible outside the
        function.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`var number = 5;

function logNumber() {
  console.log(number); // 5
}
logNumber();

function declareAuthor() {
  if (true) {
    var author = "James";
  }
  console.log(author); // "James"
}
declareAuthor();

function print() {
  var number = 5;
}
// console.log(number); // ReferenceError`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Redeclaration and Reassignment
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Variables declared with <strong>var</strong> can be redeclared and
        reassigned within the same scope without causing an error.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`var number = 10;
var number = 20;
console.log(number); // 20`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Hoisting
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Hoisting refers to the JavaScript engine's behavior of moving variable
        declarations to the top of their scope during compilation. With{" "}
        <strong>var</strong>, only the declaration is hoisted, not the
        assignment.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code className="language-javascript">{`console.log(number); // undefined
var number = 20;
// This is interpreted as:
// var number;
// console.log(number); // undefined
// number = 20;`}</code>
      </pre>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-2">
        2. Let
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>let</strong> was introduced in ES6 (2015) to address the scoping
        issues of var. It provides block-level scoping and prevents
        redeclaration, making it a safer choice for variable declarations.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Scoping
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Variables declared with <strong>let</strong> are block-scoped, meaning
        they are only accessible within the block they are declared in
        (including if statements, loops, and functions).
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`function testLet() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

if (true) {
  let blockScoped = "only available in this block";
}
// console.log(blockScoped); // ReferenceError`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Redeclaration and Reassignment
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Variables declared with <strong>let</strong> cannot be redeclared in the
        same scope, but their values can be reassigned.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`let count = 1;
// let count = 2; // SyntaxError: 'count' has already been declared

count = 2; // This is allowed
console.log(count); // 2`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Temporal Dead Zone (TDZ)
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Unlike var, let variables cannot be accessed before they are declared.
        The period between entering scope and being declared is called the
        Temporal Dead Zone.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code className="language-javascript">{`// console.log(counter); // ReferenceError
let counter = 1;
console.log(counter); // 1`}</code>
      </pre>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-2">
        3. Const
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>const</strong> was also introduced in ES6 and is used to declare
        constants - variables whose values cannot be reassigned after
        declaration. It shares many characteristics with let but adds
        immutability.
      </p>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Immutability Rules
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Variables declared with <strong>const</strong> must be initialized at
        declaration and cannot be reassigned. However, for objects and arrays,
        the properties or elements can still be modified.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
        <code className="language-javascript">{`const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

const user = { name: "John" };
user.name = "Jane"; // This is allowed
// user = { name: "Jane" }; // TypeError

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
// numbers = [1, 2, 3, 4]; // TypeError`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Block Scoping and TDZ
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Like let, const is block-scoped and subject to the Temporal Dead Zone.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code className="language-javascript">{`// console.log(API_KEY); // ReferenceError
const API_KEY = "abc123";

if (true) {
  const API_KEY = "def456"; // Different constant
  console.log(API_KEY); // "def456"
}
console.log(API_KEY); // "abc123"`}</code>
      </pre>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-4">
        Comparison & Usage Guidelines
      </h1>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-gray-800 dark:text-gray-200">
                Feature
              </th>
              <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-gray-800 dark:text-gray-200">
                var
              </th>
              <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-gray-800 dark:text-gray-200">
                let
              </th>
              <th className="px-6 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-gray-800 dark:text-gray-200">
                const
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Scope
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Function-scoped
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Block-scoped
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Block-scoped
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Hoisting
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Yes, with undefined
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                No (TDZ)
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                No (TDZ)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Redeclaration
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Allowed
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Not allowed
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Not allowed
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Reassignment
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Allowed
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Allowed
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Not allowed
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Must Initialize
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                No
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                No
              </td>
              <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                Yes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        When to Use Each
      </h2>

      <div className="space-y-6">
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Use const when:
          </h3>
          <ul className="list-disc pl-6 text-green-700 dark:text-green-300 space-y-2">
            <li>
              Declaring values that should never change (e.g., API endpoints,
              configuration values)
            </li>
            <li>Working with immutable data patterns</li>
            <li>Declaring module imports</li>
            <li>
              Creating reference values that won't be reassigned (objects,
              arrays)
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Use let when:
          </h3>
          <ul className="list-disc pl-6 text-blue-700 dark:text-blue-300 space-y-2">
            <li>
              Working with values that need to be reassigned (counters,
              accumulators)
            </li>
            <li>Declaring loop variables</li>
            <li>Managing state that changes over time</li>
            <li>Temporary variables within block scope</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Avoid var because:
          </h3>
          <ul className="list-disc pl-6 text-yellow-700 dark:text-yellow-300 space-y-2">
            <li>
              Function scoping can lead to unexpected behavior and
              harder-to-debug code
            </li>
            <li>Hoisting makes code flow harder to understand</li>
            <li>Ability to redeclare variables can lead to naming conflicts</li>
            <li>Modern JavaScript has better alternatives (let and const)</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
            Best Practices:
          </h3>
          <ul className="list-disc pl-6 text-purple-700 dark:text-purple-300 space-y-2">
            <li>
              Use const by default - it makes code intentions clearer and
              prevents accidental reassignment
            </li>
            <li>Switch to let only when you need to reassign values</li>
            <li>
              Avoid var in modern JavaScript code unless working with legacy
              systems
            </li>
            <li>Keep variables in the smallest scope possible</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VarLetConst;
