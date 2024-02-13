import styles from './app-link-card.module.css';
import android from './img/android.svg';
import apple from './img/apple.svg';

export const AppLinkCard = () => (
    <div className={styles.wrapper}>
        <div className={styles.text}>
            <p className={styles.title}>Скачать на телефон</p>
            <p className={styles.subtitle}>Доступно в PRO-тарифе</p>
        </div>
        <div className={styles.title_icon_wrappper}>
            <div className={styles.title_icon}>
                <img src={android} alt='icon' className={styles.icon} />
                <span>Android OS</span>
            </div>
            <div className={styles.title_icon}>
                <img src={apple} alt='icon' className={styles.icon} />
                <span>Apple iOS</span>
            </div>
        </div>
    </div>
);
