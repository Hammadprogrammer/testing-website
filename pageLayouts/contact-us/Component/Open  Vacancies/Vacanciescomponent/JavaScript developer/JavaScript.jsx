import React from 'react';
import style from './JavaScript.module.scss'; // Renamed for clarity
import images from '../../../../../../images/background/homepage-one-banner.jpg'; // Updated image path
import Image from 'next/image';

const JavaScript = () => {
  return (
    <div className={style.container}>
      <Image src={images} alt="Job Description" className={style.image} />
      <div className={style.jobDescription}>
        <h1>Job Description</h1>
        <p className={style.jobText}>
          We are looking for an experienced <span className={style.highlight}>Senior JavaScript Developer</span> with problem-solving, self-learning, teamwork, and quick adaptation to new technologies. This role requires strong mentoring skills, along with technical expertise in JavaScript and related technologies.
        </p>

        <h2>Responsibilities</h2>
        <ul>
          <li><span className={style.highlight}>Design</span> and build scalable applications using JavaScript frameworks.</li>
          <li>Work with cross-functional teams to define and implement new features.</li>
          <li>Optimize applications for maximum speed and scalability.</li>
          <li>Maintain code quality through unit testing and code reviews.</li>
          <li>Troubleshoot and debug applications to ensure seamless performance.</li>
          <li>Mentor junior developers and contribute to their growth.</li>
          <li>Stay updated with the latest industry trends and technologies.</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Minimum 3 years of experience with JavaScript frameworks and libraries.</li>
          <li>Experience with PHP and its frameworks, including MVC architecture.</li>
          <li>Proficiency in HTML5, CSS3, and Bootstrap.</li>
          <li>Strong understanding of Object-Oriented Programming and functional programming concepts.</li>
          <li>Solid knowledge of Data Structures, Algorithms, and software design principles.</li>
          <li>Excellent communication skills in English.</li>
          <li>Experience with RESTful APIs and web services.</li>
          <li>Node.js experience is a plus.</li>
        </ul>

        <h2>Skills</h2>
        <p className={style.jobText}>JavaScript, PHP, HTML5, CSS3, Bootstrap, Node.js, RESTful APIs, Problem-solving, Teamwork</p>

        <h2>Job Details</h2>
        <p><span className={style.label}>Industry:</span> Information Technology</p>
        <p><span className={style.label}>Functional Area:</span> Software & Web Development</p>
        <p><span className={style.label}>Total Positions:</span> 2 Posts</p>
        <p><span className={style.label}>Job Shift:</span> Second Shift (Afternoon)</p>
        <p><span className={style.label}>Job Type:</span> Full Time/Permanent</p>
        <p><span className={style.label}>Job Location:</span> Karachi, Pakistan</p>
        <p><span className={style.label}>Gender:</span> No Preference</p>
        <p><span className={style.label}>Minimum Education:</span> Bachelors</p>
        <p><span className={style.label}>Career Level:</span> Experienced Professional</p>
        <p><span className={style.label}>Minimum Experience:</span> 2 Years</p>
        <p><span className={style.label}>Apply Before:</span> 27 / 1 / 2025</p>
        <p><span className={style.label}>Posting Date:</span> 28 / 12 / 2024</p>

        <h2>How to Apply</h2>
        <p>Email your resume with the position applied in subject to: <a href="mailto:info@7ctech.com">info@7ctech.com</a></p>
      </div>
    </div>
  );
}

export default JavaScript;
