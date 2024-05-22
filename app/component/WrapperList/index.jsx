import React from 'react'
import style from './index.module.css'
import DropableComp from '../dropableComp'
const index = () => {
  return (
    <div className={style.container}>
      <DropableComp/>
      <div className={style.card}>
      <div className={style.text}>
        <span>Nft Wrapper</span>
        <p className={style.subtitle}>items:aa nft , bb nft</p>
        <button className={style.btn}>set alias</button>
        <button className={style.btn}>split</button>
      </div>
      <div className={style.icons}>
      </div>
    </div>
    <div className={style.card}>
      <div className={style.text}>
        <span>Nft Wrapper</span>
        <p className={style.subtitle}>items:aa nft , bb nft</p>
        <button className={style.btn}>set alias</button>
        <button className={style.btn}>split</button>
      </div>
      <div className={style.icons}>
      </div>
    </div>
    </div>
  )
}

export default index