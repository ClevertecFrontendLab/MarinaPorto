import styles from './header.module.css';

import {
    SettingOutlined,

} from '@ant-design/icons';
<SettingOutlined />
export function HeaderInner() {

    return (
        <header className={styles.header}>
            <div className={styles.bread_crumbs}>Главная</div>
            <div className={styles.title_wrapper}>
                <h1 className={styles.title}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
                <div className={styles.settings}>
                    <SettingOutlined /> Настройки
                </div>
            </div>
        </header>
    )
}

export default HeaderInner;