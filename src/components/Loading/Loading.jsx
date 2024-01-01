import React from 'react'
import styles from './Loading.module.scss'
import loading from '../../assets/loading_white.svg'

const Loading = () => {
  return (
    <div className={styles.loading__box}>
      <img className={styles.loading__animate} src={loading} alt="loading animate" />
    </div>
  )
}

export default Loading