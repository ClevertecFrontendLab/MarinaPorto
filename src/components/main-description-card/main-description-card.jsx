/* eslint-disable no-irregular-whitespace */
import styles from './main-description-card.module.css';

export const MainDescriptionCard = () => (
    <div className={styles.card_wrapper}>
        <div className={styles.card_title}>С CleverFit ты сможешь:</div>
        <ul className={styles.text_items}>
            <li className={styles.text_item}>
                — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
            </li>
            <li className={styles.text_item}>
                — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                с нормами и рекордами; 
            </li>
            <li className={styles.text_item}>
                — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                о тренировках;
            </li>
            <li className={styles.text_item}>
                — выполнять расписанные тренировки для разных частей тела, следуя подробным
                инструкциям и советам профессиональных тренеров.
            </li>
        </ul>
    </div>
);
