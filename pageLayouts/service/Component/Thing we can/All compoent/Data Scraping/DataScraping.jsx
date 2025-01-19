import React from 'react'
import style from "./DataScraping.module.scss"

const DataScraping = () => {
  return (
  <>
  <p className={style.para}>If you are in business of collecting data from online resources or automating any of your business process then 7CTECH is the best partner you can get.</p>
  <p className={style.para1}>For last 10 years 7CTECH has worked on scraping and analyzing huge quantities for different clients.</p>
  <p className={style.para1}>We offer:</p>

  <ul className={style.ul}>
    <li className={style.li}>Data Scrapers</li>
    <li className={style.li}>Data Mining Systems</li>
    <li className={style.li}>Text Mining Solutions</li>
    <li className={style.li}>Big Data Analysis</li>
    <li className={style.li}>Purchasing and Selling Bots</li>
    <li className={style.li}>API integrations</li>
    <li className={style.li}>Process Automation</li>
  </ul>
  </>
  )
}

export default DataScraping
