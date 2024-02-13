import styles from './header.module.css';
import './header.css';

import {
    SettingOutlined,
} from '@ant-design/icons';

export function HeaderInner() {
    return (
        <header className={styles.header}>
            <div className={styles.bread_crumbs}>Главная</div>
            <div className={styles.title_wrapper}>
                <h1 className={styles.title_desc}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
                <h1 className={styles.title_mob}>Приветствуем тебя в CleverFit — приложении, <br /> которое поможет тебе добиться своей мечты!</h1>
                <div className={styles.settings}>
                    <SettingOutlined className='settings_icon' /> <span className={styles.icon_title}>Настройки</span>
                </div>
            </div>
        </header>
    )
}

export default HeaderInner;