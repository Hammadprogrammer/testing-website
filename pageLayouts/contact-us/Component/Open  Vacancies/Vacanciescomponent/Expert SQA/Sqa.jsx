import React from 'react';
import style from './SQA.module.scss';
import images from '../../../../../../images/background/homepage-one-banner.jpg';
import Image from 'next/image';

const SQA = () => {
  return (
    <div className={style.container}>
      <Image src={images} alt="SQA Job" className={style.image} />
      <div className={style.jobDescription}>
        <h1>Job Description</h1>
        <p className={style.jobText}>
          7CTECH is looking for a strong Intermediate Software Quality Assurance (SQA) Analyst to join our team.
        </p>
        <h2>Responsibilities</h2>
        <ul>
          <li>Test web applications against specifications and documentation.</li>
          <li>Identify, analyze, and document defects, questionable functions, errors, and inconsistencies in web application functions, outputs, online screens, and content.</li>
          <li>Establish benchmarks for program efficiency, including operating and response times.</li>
          <li>Perform web UI validation for cross-browser compatibility.</li>
          <li>Create and execute test cases and test data.</li>
          <li>Contribute to the establishment of standards and procedures for application design and testing.</li>
          <li>Document, track, and communicate test plans, test results, analysis, and unresolved issues.</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Experience with Black Box Testing, Automation Testing, Agile Testing, and Database Applications.</li>
          <li>Knowledge of Software Quality Management practices.</li>
          <li>Strong analytical and problem-solving skills.</li>
          <li>Ability to work independently and as part of a team.</li>
          <li>Excellent communication skills for documenting test results and collaborating with team members.</li>
        </ul>

        <h2>Skills</h2>
        <p className={style.jobText}>Black Box Testing, Automation Testing, Agile Testing, Database Applications, Software Quality Management</p>

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

export default SQA;
