import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/42229054?s=460&u=9b1ec0750e2b18b135d8fe9627f1a1ea439c0ac7&v=4" alt="André Nishimoto"/>
            <div>
                <strong>André Nishimoto</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}