import styles from './main-activity-card.module.css';
export const MainActivityCard = (props) => (
    <div className={styles.wrapper}>
        <div className={styles.text}>{props.text}</div>
        <div className={styles.title_icon}>
            <img src={props.icon} alt='icon' className={styles.icon} />
            <div className={styles.wrapepr}>{props.title}</div>
        </div>
    </div>
);
