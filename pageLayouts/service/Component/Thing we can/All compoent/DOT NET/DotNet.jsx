import React from 'react'
import style from "./DotNet.module.scss"

const DotNet = () => {
  return (
  <>
  <p className={style.p}>.NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH has been working and developing solutions using Microsoft .NET core technologies like WPF, WCF and razer pages.
<br />
<br />
We have developed highly optimized, Architectural and design patterns driven solutions. Out expertise with Microsoft .NET technologies comprise of:</p>
<ol className={style.ol}>
    <li className={style.li}>  CQRS (Command Query Responsibility Separation) and Databus patterns driven API development.</li>
    <li className={style.li}>Big data manipulation.</li>
    <li className={style.li}>High availability and highly reliable system design and development.</li>
    <li className={style.li}>Real time Write through cache implementation using proprietary concurrent accessible solutions.</li>
    <li className={style.li}>Razer pages based web development.</li>
    <li className={style.li}>.NET MVC based web applications and web solutions development.</li>
    <li className={style.li}>React.JS implementation iside .NET MVC.</li>
</ol>

  </>
  )
}

export default DotNet