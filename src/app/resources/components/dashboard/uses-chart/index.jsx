'use client'
/** Import Libraries */
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts"

/** Local Imports */
import { usageData } from "../helper"

/** Styles */
import styles from "./uses-chart.module.scss"

const UsesChart = () => {

    const normalizedData = usageData.map(item => ({
        ...item,
        visualTokens: item.tokens * 10000
    }));

    return (
        <div className={styles.ai_usage_card}>
            <p className={styles.ai_title}>AI Usage This Week</p>

            <div className={styles.ai_chart_container}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={normalizedData}
                        accessibilityLayer={false}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(100, 116, 139, 0.1)" />
                        <XAxis dataKey="day" stroke="#64748B" />
                        <YAxis
                            tickMargin={20}
                            stroke="#64748B"
                            tickFormatter={(value) => value >= 1000 ? `${value / 1000}k` : value}
                        />
                        <Tooltip
                            contentStyle={{
                                background: "#020617",
                                border: "1px solid #020617",
                                borderRadius: "8px",
                                color: "#fff",
                                outline: "none",
                            }}
                            itemStyle={{ color: "#fff" }}
                            formatter={(value, name) => {
                                if (name === "Tokens") {
                                    return [`${value / 10000} Million`, "Tokens"];
                                }
                                return [value.toLocaleString(), "Requests"];
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="requests"
                            name="Requests"
                            stroke="#EF4444"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="visualTokens"
                            name="Tokens"
                            stroke="#6D5DFC"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default UsesChart