import styles from './Table.module.scss';

export default function Table() {
  const data = [
    {
      number: 1,
      title: 'Dedicated Teams (Full Department)',
      description: [
        'Perhaps you want to grow your business quickly and do not want to go into the process of hiring the full team, and managing the complexities of team creation as well as making sure you have the full technical spectrum?',
        'Perhaps you have the diverse needs? You need web development and you need some software developed for it too! But you may need all that for just 6 months or so. No one would like to create a full software department in house for this.',
        '7CTECH has expert resources and technically advanced infrastructure. 7CTECH has diverse resources that can be "rented" or "bought" for a certain period or for "pay as you go", indefinite time frame.',
        '7CTECH has provided such service to the companies in many parts of the world for over a decade. Effectively cutting the cost for our happy clients and making their business grow by heaps. 7CTECH’s dedicated teams are rally the best GROWTH HACK you can have.'
      ]
    },
    {
      number: 2,
      title: 'Project Based',
      description: [
        'If you have a killer idea or a great startup thought lingering around in your mind for a long time? Or you want to have a nice mobile application for the online eCommerce that you have. But you have limited budget as well as you do not know the detailed technical aspect of how it gets executed.',
        'Then you do not need to worry any more. 7CTECH offers end to end project based outsourcing services. We at 7CTECH believe that a project does not only depend on creating what is asked for rather we believe in creating and taking proud in success. We at 7CTECH believe that any project trusted to us completes when it is a success in terms of achieving the goals for which our clients start/conceptualize their projects and products.',
        'End-to-end project based development services of 7CTECH can be the best way to create you next great idea from just an idea to a reality. We will develop it, nourish it and stay beside you until the full maturity of your idea to a staging success.'
      ]
    },
    {
      number: 3,
      title: 'Dedicated Resource (One or Many)',
      description: [
        'If you have a killer technical team in place and your in-house needs are being taken care of properly, but you still want to grow further without moving to a new office and investing highly in hiring new developers, designers and software analysts, then 7CTECH dedicated resources service is the one for you.',
        'You can pick and choose from a list of highly skilled resources for web development, web designing, mobile app development, Ionic framework, angularJS, NodeJS , PHP developers and Dot.Net developers as per your needs.',
        'Our dedicated resources are skilled in Agile and team based development systems. We believe that our clients should not be compelled to hire expensive in-house developers and designers for expansion.',
        'In the current world economy hiring every single technical and highly skilled resource in house is not a good idea probably. In today’s global village you can pick and chose from the big list of resources that can corporate and coordinate on the internet with help of Agile team management tools and accomplish great results.'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.row}>
            <div className={`${styles.icon} ${index === 0 ? styles.number1 : index === 1 ? styles.number2 : styles.number3}`}>
              <span>{item.number}</span>
            </div>
            <h3 className={`${styles.title} ${index === 0 ? styles.title1 : index === 1 ? styles.title2 : styles.title3}`}>{item.title}</h3>
          </div>
          <div className={styles.description}>
            {item.description.map((text, i) => (
              <p key={i} className={styles.text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
