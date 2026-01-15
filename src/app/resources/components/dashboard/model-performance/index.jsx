/** React Import */
import React from 'react'

/** Local Imports */
import { modelPerformance } from '../helper'

/** Styles */
import styles from './model.module.scss'

/** Main Export */
const ModelPerformance = () => {

    return (
        <div className={styles.ai_model_card}>
            <p className={styles.ai_title}>Model Performance</p>
            <div className={styles.ai_table_responsive}>
                <table className={styles.ai_table}>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Requests</th>
                            <th>Latency (ms)</th>
                            <th>Error %</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modelPerformance.map((m) => (
                            <tr key={m.model}>
                                <td className={styles.model}>{m.model}</td>
                                <td>{m.requests.toLocaleString()}</td>
                                <td>{m.latency}</td>
                                <td className={m.errors > 0.2 ? styles.bad : styles.good}>
                                    {m.errors}%
                                </td>
                                <td>${m.cost.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ModelPerformance