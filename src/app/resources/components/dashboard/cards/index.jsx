/** Styles */
import styles from "./cards.module.scss";

/** Main Export */
const Cards = ({ title, icon, value, change, color }) => {

    return (
        <div className={styles.ai_card} style={{ "--accent": color }}>
            <div className={styles.ai_header}>
                <span className={styles.ai_title}>{title}</span>
                <span className={styles.ai_icon}>{icon}</span>
            </div>
            <div className={styles.ai_value}>{value}</div>
            <div className={styles.ai_change}>
                {change}
            </div>
        </div>
    );
}

export default Cards