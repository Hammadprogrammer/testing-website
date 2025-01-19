"use client";

import React, { useState } from 'react';
import styles from './ThingWeCan.module.scss'; // Import SCSS module
import Development from './All compoent/Development'; 
import Ecommerce from './All compoent/Ecommerce/Ecommerce';
import WebApplication from './All compoent/Web application/WebApplication';
import MobileAppDevelopment from './All compoent/Mobile App/MobileApp';
import DataScraping from './All compoent/Data Scraping/DataScraping';
import Ai from './All compoent/AI/Ai';
import DotNet from "./All compoent/DOT NET/DotNet"
import Cbs from "./All compoent/CBS/Cbs"
import Shopify from "./All compoent/Shopify/Shopify"


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
export default function CustomTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabsContainer}>
      <h1 className={styles.heading}>
        THINGS WE CAN <span className={styles.span}>DO FOR YOU</span>
      </h1>
      <div className={styles.contentWrapper}>
        {/* Tabs Header */}
        <div className={styles.tabsHeader}>
          <div
            className={`${styles.tabLabel} ${value === 0 ? styles.activeTab : ''}`}
            onClick={() => handleChange(0)}
          >
            DEVELOPMENT
          </div>
          <div
            className={`${styles.tabLabel} ${value === 1 ? styles.activeTab : ''}`}
            onClick={() => handleChange(1)}
          >
            E-Commerce
          </div>
          <div
            className={`${styles.tabLabel} ${value === 2 ? styles.activeTab : ''}`}
            onClick={() => handleChange(2)}
          >
            WEB APPLICATION
          </div>
          <div
            className={`${styles.tabLabel} ${value === 3 ? styles.activeTab : ''}`}
            onClick={() => handleChange(3)}
          >
            MOBILE APP
          </div>
          <div
            className={`${styles.tabLabel} ${value === 4 ? styles.activeTab : ''}`}
            onClick={() => handleChange(4)}
          >
            DATA SCRAPING
          </div>
          <div
            className={`${styles.tabLabel} ${value === 5 ? styles.activeTab : ''}`}
            onClick={() => handleChange(5)}
          >
            AI
          </div>
          <div
            className={`${styles.tabLabel} ${value === 6 ? styles.activeTab : ''}`}
            onClick={() => handleChange(6)}
          >
            DOT NET
          </div>
          <div
            className={`${styles.tabLabel} ${value === 7 ? styles.activeTab : ''}`}
            onClick={() => handleChange(7)}
          >
            CBS
          </div>
          <div
            className={`${styles.tabLabel} ${value === 8 ? styles.activeTab : ''}`}
            onClick={() => handleChange(8)}
          >
            SHOPIFY
          </div>
        </div>

        {/* Tabs Content */}
        <div className={styles.tabsContent}>
          <CustomTabPanel value={value} index={0}>
            <Development />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Ecommerce />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <WebApplication />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <MobileAppDevelopment />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <DataScraping />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Ai />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
        <DotNet/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
       <Cbs/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={8}>
       <Shopify/>
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}
