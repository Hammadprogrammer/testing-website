"use client";

import React, { useState } from 'react';
import styles from './OpenVacancies.module.scss'; 
import Flutter from "./Vacanciescomponent/Flutter"
import JavaScript from "./Vacanciescomponent/JavaScript developer/JavaScript"
import SQA from "./Vacanciescomponent/Expert SQA/Sqa"
import FullStackDeveloper from "./Vacanciescomponent/PHP full stack developer/Php"



// Define CustomTabPanel
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={styles.tabsContent}
    >
      {value === index && <div className={styles.panelContent}>{children}</div>}
    </div>
  );
}

// Main Tabs Component
export default function OpenVacancies() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabsContainer}>
      <h1 className={styles.heading}>
      OPEN <span className={styles.span}> VACANCIES</span>
      </h1>
      <div className={styles.contentWrapper}>
        {/* Tabs Header */}
        <div className={styles.tabsHeader}>
          <div
            className={`${styles.tabLabel} ${value === 0 ? styles.activeTab : ''}`}
            onClick={() => handleChange(0)}
          >
            FLUTTER / HYBRID MOBILE APP DEVELOPER 
          </div>
          <div
            className={`${styles.tabLabel} ${value === 1 ? styles.activeTab : ''}`}
            onClick={() => handleChange(1)}
          >
             SR.JAVASCRIPT DEVELOPER 
          </div>
          <div
            className={`${styles.tabLabel} ${value === 2 ? styles.activeTab : ''}`}
            onClick={() => handleChange(2)}
          >
             EXPERT SQA ANALYST 
          </div>
          <div
            className={`${styles.tabLabel} ${value === 3 ? styles.activeTab : ''}`}
            onClick={() => handleChange(3)}
          >
              PHP /JS FULL STACK DEVELOPER 
          </div>
      
     
        </div>

        {/* Tabs Content */}
        <div className={styles.tabsContent}>
          <CustomTabPanel value={value} index={0}>
            <Flutter/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           <JavaScript/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
           <SQA/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
          <FullStackDeveloper/>
          </CustomTabPanel>
        
        </div>
      </div>
    </div>
  );
}
