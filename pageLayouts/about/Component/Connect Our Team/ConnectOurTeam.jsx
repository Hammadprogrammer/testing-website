import React from 'react';
import Image from 'next/image'; // Import next/image for image optimization
import style from './ConnectOurTeam.module.scss'; // Your CSS module for styling

// Assuming images are stored in a constants folder for static assets
import images from '../../../../images/7c/ConnectOurTeam image.jpg'; 

const ConnectWithTeam = () => {
  // Define text variables
  const sectionTitle = 'CONNECT WITH ';
  const sectionDescription = 'OUR COMPANY HAS EXPANDED AND DEVELOPED OVER THE YEARS';

  const cards = [
    { icon: images, title: 'Naveed Ahmed Javed', description: 'CEO', email: 'naveed@7ctech.com' },
    { icon: images, title: 'Obaid Nizami', description: 'PMO', email: 'obaid@7ctech.com' },
    { icon: images, title: 'Mohi Uddin', description: 'Team Lead', email: 'mohiudeen@7ctech.com' },
    { icon: images, title: 'Aakif usmani', description: 'Head of SQA', email: 'aakif@7ctech.com' }
  ];

  return (
    <div className={style.main}>
      <h1 className={style.connect}>{sectionTitle} <span className={style.span}>OUR TEAM</span></h1>
      <p className={style.our}>{sectionDescription}</p>

      {/* Cards */}
      <div className={style.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={style.card}>
            <div className={style.content}>
              <div className={style.icon}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={100} // Adjust width according to your design
                  height={100} // Adjust height according to your design
                />
              </div>
              <div className={style.text}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <p className={style.email}>
                  {/* SVG Icon for Email */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={style.message} viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                  </svg>
                  {card.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithTeam;
