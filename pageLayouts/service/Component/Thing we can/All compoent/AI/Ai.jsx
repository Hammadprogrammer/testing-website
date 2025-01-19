import React from 'react'
import style from "./Ai.module.scss"

const Ai = () => {
  return (
   <>
   <p className={style.para}>It is soon to be time that many of the manual labor jobs are replaced by the AI (Artificial Intelligence). As scary as it may seem this is the unavoidable outcome of the
     technology growth that is happening now a days. 7CTECH understands that! And we offer best possible Python based AI and deep learning solutions.</p>
    <p className={style.offer}>We offer:</p>

    <ul className={style.ul}>
        <li className={style.li}>TensorFlow Based Solutions</li>
        <li className={style.li}>AI Bots</li>
        <li className={style.li}>AI Chatting Systems.</li>
        <li className={style.li}>Non-Invasive Client Servicing Bots.</li>
    </ul>
   </>
  )
}

export default Ai