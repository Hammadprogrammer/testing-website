import React from 'react';
import style from './Flutter.module.scss';
import images from '../../../../../images/background/homepage-one-banner.jpg';
import Image from 'next/image';

const Flutter = () => {
  return (
    <div className={style.container}>
      <Image src={images} alt="Flutter Job" className={style.image} />
      <div className={style.jobDescription}>
        <h1>Job Description</h1>
        <p className={style.jobText}>
          We are looking for an experienced Hybrid Mobile App Developer <span className={style.highlight}>Flutter Developer</span> to assist us to design and build the next generation of our mobile applications.
        </p>
        <h2>Responsibilities</h2>
        <ul>
          <li><span className={style.highlight}>Design</span> and build mobile applications using Flutter.</li>
          <li><span className={style.highlight}>Deploy</span> Apps on both the iOS and Android platforms.</li>
          <li>Integrate <span className={style.highlight}>3rd party APIs</span> (Communication & Payment gateways etc).</li>
          <li>Experience launching and managing Production mobile Apps.</li>
          <li>Good knowledge of MySQL, Firebase, JavaScript, and Google APIs.</li>
          <li>Full mobile development life cycle understanding.</li>
          <li>Write unit tests for the code to ensure robustness, including edge cases and general reliability.</li>
          <li>Troubleshoot issues, fix bugs, and improve performance.</li>
          <li>Explore and utilize new technologies to maximize development efficiency.</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Translate designs and wireframes into high-quality code.</li>
          <li>Ability to meet deadlines and manage multiple projects at once without sacrificing quality.</li>
          <li>Proficient understanding of code versioning tools (GIT).</li>
          <li>Team player and ability to work under pressure.</li>
          <li>Document code effectively.</li>
          <li><span className={style.highlight}>Can-do attitude</span> and willingness to learn new skills.</li>
        </ul>

        <h2>Skills</h2>
        <p className={style.jobText}>Firebase, Flutter, Android Application, Engineering</p>

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

export default Flutter;
