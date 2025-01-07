import React from 'react';

const JavascriptTree = () => {
  const renderTreeItem = (label, children) => (
    <div className="ml-4 mb-2">
      <div className="flex items-start">
        <div className="text-gray-500 dark:text-gray-300 mr-2">|──</div>
        <div className="flex-1">
          <div className="font-semibold text-gray-700 dark:text-gray-300">
            {label}
          </div>
          {children && (
            <div className="ml-4 mt-1 text-gray-700 dark:text-gray-300">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-2 md:p-6 mx-auto bg-white dark:bg-gray-800">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-700 dark:text-white">
        JavaScript Concept Tree
      </h1>
      
      <div className="text-sm md:text-base">
        {renderTreeItem("Variables", 
          <div>
            {renderTreeItem("var")}
            {renderTreeItem("let")}
            {renderTreeItem("const")}
          </div>
        )}
        
        {renderTreeItem("Data Types", 
          <div>
            {renderTreeItem("String")}
            {renderTreeItem("Number")}
            {renderTreeItem("Boolean")}
            {renderTreeItem("Object")}
            {renderTreeItem("Array")}
            {renderTreeItem("Null")}
            {renderTreeItem("Undefined")}
          </div>
        )}
        
        {renderTreeItem("Operators", 
          <div>
            {renderTreeItem("Arithmetic")}
            {renderTreeItem("Assignment")}
            {renderTreeItem("Comparison")}
            {renderTreeItem("Logical")}
            {renderTreeItem("Unary")}
            {renderTreeItem("Ternary (Conditional)")}
          </div>
        )}
        
        {renderTreeItem("Functions", 
          <div>
            {renderTreeItem("Function declaration")}
            {renderTreeItem("Function expression")}
            {renderTreeItem("Arrow function")}
            {renderTreeItem("IIFE")}
          </div>
        )}
        
        {renderTreeItem("Arrays", 
          <div>
            {renderTreeItem("Array methods", 
              <div>
                {renderTreeItem("push()")}
                {renderTreeItem("pop()")}
                {renderTreeItem("shift()")}
                {renderTreeItem("unshift()")}
                {renderTreeItem("splice()")}
                {renderTreeItem("slice()")}
                {renderTreeItem("concat()")}
              </div>
            )}
            {renderTreeItem("Array iteration", 
              <div>
                {renderTreeItem("forEach()")}
                {renderTreeItem("map()")}
                {renderTreeItem("filter()")}
                {renderTreeItem("reduce()")}
              </div>
            )}
          </div>
        )}

        {renderTreeItem("Promises", 
          <div>
            {renderTreeItem("Promise states", 
              <div>
                {renderTreeItem("Pending")}
                {renderTreeItem("Fulfilled")}
                {renderTreeItem("Rejected")}
              </div>
            )}
            {renderTreeItem("Promise methods", 
              <div>
                {renderTreeItem("then()")}
                {renderTreeItem("catch()")}
                {renderTreeItem("finally()")}
              </div>
            )}
          </div>
        )}
        
        {renderTreeItem("ES6+ Features", 
          <div>
            {renderTreeItem("Template literals")}
            {renderTreeItem("Destructuring assignment")}
            {renderTreeItem("Spread/rest operator")}
            {renderTreeItem("Arrow functions")}
            {renderTreeItem("Classes")}
            {renderTreeItem("Modules")}
          </div>
        )}
        
        {renderTreeItem("Web APIs", 
          <div>
            {renderTreeItem("Local Storage")}
            {renderTreeItem("Session Storage")}
            {renderTreeItem("Web Storage API")}
          </div>
        )}
      </div>
    </div>
  );
};

export default JavascriptTree;