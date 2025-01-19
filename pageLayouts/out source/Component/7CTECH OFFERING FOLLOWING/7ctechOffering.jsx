import React from 'react';
import style from './7ctechOffering.module.scss';

const Offering = () => {
  return (
    <div className={style.main}>
      <h1 className={style.header}>7CTECH OFFERING FOLLOWING OUTSOURCING SERVICES</h1>

      <div className={style.row}>
        <div className={style.item}>
          <div className={style.circleOne}>1</div>
          <p className={style.paraOne}>Dedicated Teams (Full Department)</p>
        </div>

        <div className={style.item}>
          <div className={style.circleTwo}>2</div>
          <p className={style.paraTwo}>Project Based</p>
        </div>

        <div className={style.item}>
          <div className={style.circleThree}>3</div>
          <p className={style.paraThree}>Dedicated Resource (One or Many)</p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
