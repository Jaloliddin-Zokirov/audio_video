import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Admin.module.scss'
import AdminCategory from '../AdminCategory/AdminCategory'

const Admin = () => {
  return (
    <div className={styles.admin__home}>
      <AdminCategory />
      <main>
        {<Outlet />}
      </main>
    </div>
  )
}

export default Admin