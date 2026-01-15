/** React Imports */
import React from 'react'

/** Components */
import Cards from '@/components/dashboard/cards'
import { CardData } from '@/components/dashboard/helper'
import UsesChart from '@/components/dashboard/uses-chart'
import ModelPerformance from '@/components/dashboard/model-performance'

/** Styles */
import styles from './dashboard.module.scss'

/** Main Export */
const DashboardPage = () => {

  return (
    <div className={styles.ai_dashboard}>
      <div className='contain'>
        <div className={styles.ai_cards}>
          {CardData.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>
        <div className={styles.ai_charts}>
          <UsesChart />
        </div>
        <div className={styles.ai_model_performance}>
          <ModelPerformance />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage