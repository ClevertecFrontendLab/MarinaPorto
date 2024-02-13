/* eslint-disable no-irregular-whitespace */
import styles from './main-activity-cards.module.css';
import calendar from './img/icon-calendar.svg';
import heart from './img/heart.svg';
import profile from './img/profile.svg';
import { MainActivityCard } from '../main-activity-card';

export const MainActivityCards = () => (
    <div className={styles.cards_wrapper}>
        <MainActivityCard icon={heart} title='Тренировки' text='Расписать тренировки' />
        <MainActivityCard icon={calendar} title='Календарь' text='Назначить календарь' />
        <MainActivityCard icon={profile} title='Профиль' text='Заполнить профиль' />
    </div>
);
