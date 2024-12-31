import styles from './homePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.body}>
            <h1>Take Control of Your Finances</h1>
            <button>Get Started</button>
        </div>
    );
};

export default HomePage;