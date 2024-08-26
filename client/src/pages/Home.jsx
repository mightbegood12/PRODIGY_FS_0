import React from "react";

export default function Home() {
  return (
    <div class="m-5 flex flex-col gap-3 no-scrollbar">
      <h3 className="text-2xl font-bold">
        My Secure Authentication Web App Project
      </h3>
      <h4 className="text-xl font-bold">What I Built</h4>
      <p>
        For my Prodigy Infotech Internship Task, I worked on creating a secure
        authentication web app. This project was a fantastic opportunity to
        apply my knowledge of web development and security. Here’s what I
        accomplished:
      </p>
      <ul className="ml-3">
        <li>
          <strong>User Registration and Login</strong>: I developed features for
          users to register, log in, and manage their passwords securely.
        </li>
        <li>
          <strong>Session Management</strong>: I implemented robust session
          management to ensure users stayed securely logged in and their data
          remained protected.
        </li>
      </ul>
      <h4 className="text-xl font-bold">Technologies I Used</h4>
      <ul className="ml-3">
        <li>
          <p>
            <strong>MERN Stack</strong>:
          </p>
          <ul className="ml-3">
            <li>
              <strong>MongoDB</strong>: I used MongoDB to store user data in a
              flexible and scalable NoSQL database.
            </li>
            <li>
              <strong>Express.js</strong>: I built the server-side logic and
              managed all authentication processes with Express.js.
            </li>
            <li>
              <strong>React.js</strong>: I created an intuitive and responsive
              user interface with React.js.
            </li>
            <li>
              <strong>Node.js</strong>: I powered the server-side functionality
              and managed API requests using Node.js.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Tailwind CSS</strong>: I employed Tailwind CSS to design a
            modern and responsive user interface. Its utility-first approach
            helped me craft a clean, professional look for the app.
          </p>
        </li>
      </ul>
      <h4 className="text-xl font-bold">My Achievements</h4>
      <ul className="ml-3 ">
        <li>
          <strong>Mastered Security Best Practices</strong>: I understood and
          implemented best practices for securing user data and protecting
          against common vulnerabilities.
        </li>
        <li>
          <strong>Designed a Great User Experience</strong>: Using Tailwind CSS,
          I ensured the app was not only functional but also visually appealing
          and user-friendly across all devices.
        </li>
      </ul>
      <h4 className="text-xl font-bold">Why This Project Was Exciting</h4>
      <p>
        This project allowed me to blend technical skills with practical
        application. By working on secure authentication and leveraging the MERN
        stack along with Tailwind CSS, I gained valuable hands-on experience in
        building and securing modern web applications. I was thrilled to tackle
        this challenge and create something both functional and elegant.
      </p>
    </div>
  );
}
