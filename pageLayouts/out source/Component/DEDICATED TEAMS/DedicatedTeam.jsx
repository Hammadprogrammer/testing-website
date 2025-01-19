import { FaUsers, FaLaptop, FaUserAlt } from "react-icons/fa";
import styles from './DedicatedTeam.module.scss';

const ComparisonTable = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Dedicated Teams vs. Project Based vs. Dedicated Resource</h1>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={`${styles.cell} ${styles.first}`}></div>
          <div className={`${styles.cell} ${styles.header}`}>Dedicated Team</div>
          <div className={`${styles.cell} ${styles.header1}`}>Project Based</div>
          <div className={`${styles.cell} ${styles.header2}`}>Dedicated Resource</div>
        </div>
        {/* Row with icons */}
        <div className={styles.row}>
          <div className={styles.cell}></div>
          <div className={styles.cell}>
            <FaUsers className={styles.icon} />
          </div>
          <div className={styles.cell}>
            <FaLaptop className={styles.icon1} />
          </div>
          <div className={styles.cell}>
            <FaUserAlt className={styles.icon2} />
          </div>
        </div>
        {/* Row with text */}
        <div className={styles.row}>
          <div className={styles.cell}>You will get:</div>
          <div className={styles.cell}>
            A dedicated offshore staff or team of professionals who will work exclusively on your project 8 hours a day, 5 days a week
          </div>
          <div className={styles.cell}>
            A team of professionals who will work on your requirements on a per-project basis
          </div>
          <div className={styles.cell}>
            An individual or more professionals who get hired by you, will work on project 8 hours a day, 5 days a week
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>How you pay:</div>
          <div className={styles.cell}>Pay per staff per month</div>
          <div className={styles.cell}>Pay per project</div>
          <div className={styles.cell}>Pay per resource per month</div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>Recommended for:</div>
          <div className={styles.cell}>
            Augmenting a specific, creative, or technical skill gap in your team
          </div>
          <div className={styles.cell}>
            Projects that need both creative and technical expertise
          </div>
          <div className={styles.cell}>
            Lack of specific resources? Hire any individual resource
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
