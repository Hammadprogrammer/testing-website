import React from 'react';
import style from './Php.module.scss';
import images from '../../../../../../images/background/homepage-one-banner.jpg';
import Image from 'next/image';

const FullStackDeveloper = () => {
  return (
    <div className={style.container}>
      <Image src={images} alt="Full Stack Developer Job" className={style.image} />
      <div className={style.jobDescription}>
        <h1>Job Description</h1>
        <p className={style.jobText}>
          We are looking for a Full Stack Developer with strong problem-solving skills, a passion for self-learning, teamwork, and the ability to quickly adapt to new technologies. The ideal candidate will also have mentoring skills along with the required technical expertise.
        </p>

        <h2>Required Education & Skills</h2>
        <ul>
          <li>Bachelor’s or Master’s Degree in Computer Science.</li>
          <li>Minimum of 3 years of experience in JavaScript frameworks and libraries.</li>
          <li>At least 3 years of experience in PHP and its frameworks.</li>
          <li>Expertise in HTML, CSS3, and Bootstrap.</li>
          <li>Strong understanding of the MVC framework.</li>
          <li>Solid understanding of JavaScript functional programming concepts and object-oriented techniques.</li>
          <li>Proficiency in Data Structures, Algorithms, and Object-Oriented Design.</li>
          <li>Excellent teamwork, self-learning, and problem-solving skills.</li>
          <li>Good English communication skills.</li>
          <li>Experience with Restful APIs and web services.</li>
          <li>Experience with Node.js will be highly advantageous.</li>
        </ul>

        <h2>Skills</h2>
        <p className={style.jobText}>API Development, Core PHP, HTML</p>

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
        <p><span className={style.label}>Minimum Experience:</span> 3 Years</p>
        <p><span className={style.label}>Apply Before:</span> 27 / 1 / 2025</p>
        <p><span className={style.label}>Posting Date:</span> 28 / 12 / 2024</p>

        <h2>How to Apply</h2>
        <p>Email your resume with the position applied in subject to: <a href="mailto:info@7ctech.com">info@7ctech.com</a></p>
      </div>
    </div>
  );
};

export default FullStackDeveloper;
