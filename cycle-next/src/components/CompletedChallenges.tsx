import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desáfios completos</span>
            <span>5</span>
        </div>
    );
}