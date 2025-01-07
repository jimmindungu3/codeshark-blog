import React from "react";

const Home = () => {
  return (
    <div className="p-4 md:p-6 mx-auto bg-white dark:bg-gray-800">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-700 dark:text-white">
        Welcome to My Blog
      </h1>
      <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-200">
        Hi, I'm <span className="font-semibold">James Ng'ang'a Ndung'u</span>, a
        passionate full-stack developer, educator, and lifelong learner based in
        Nairobi, Kenya. With expertise in modern web technologies like React,
        Node.js, Django, and more, I have built robust applications ranging from
        e-commerce platforms to booking systems. Currently, I share my knowledge
        as a TVET Trainer, empowering the next generation of Techies.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-4 text-gray-700 dark:text-white">
        About This Blog
      </h2>
      <p className="mb-6 text-sm md:text-base text-gray-700 dark:text-gray-200">
        This blog is a resource for developers and students alike. Here, I share
        insights, tutorials, and experiences from my journey in web development,
        focusing on topics like JavaScript, frameworks, backend development, and
        coding best practices. Whether you're a beginner or an experienced
        developer, you will find something valuable here.
      </p>

      <h2 className="text-base md:text-lg font-semibold mb-4 text-gray-700 dark:text-white">
        Why This Blog is Your Perfect Companion
      </h2>
      <ul className="mb-6 text-sm md:text-base list-disc ml-6 md:ml-8 text-gray-700 dark:text-gray-200">
        <li>
          <span className="font-semibold">For Students:</span> Get a structured
          learning path with beginner-friendly content, practical examples, and
          step-by-step guides.
        </li>
        <li>
          <span className="font-semibold">For Developers:</span> Stay updated
          with modern trends, deep-dives into advanced concepts, and tips for
          writing clean, efficient code.
        </li>
        <li>
          <span className="font-semibold">For Educators:</span> Leverage
          teaching strategies and coding resources to better equip your
          learners.
        </li>
        <li>
          Community-driven content to help you grow alongside like-minded
          individuals.
        </li>
      </ul>

      <h2 className="text-base md:text-lg font-semibold mb-4 text-gray-700 dark:text-white">
        Let's Learn and Grow Together
      </h2>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 pb-8">
        As a developer and educator, I believe in sharing knowledge to build a
        stronger tech community. Through this blog, I aim to demystify complex
        topics, share real-world examples, and inspire others to achieve their
        goals in tech. Bookmark this site, explore the content, and join me on
        this journey of continuous learning and growth!
      </p>
    </div>
  );
};

export default Home;
