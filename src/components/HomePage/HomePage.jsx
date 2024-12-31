import { useNavigate } from 'react-router-dom';
import styles from './homePage.module.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/budget');
    };

    return (
        <div className={styles.body}>
            <h1 className={styles.heading}>Take Control of Your Finances</h1>
            <p className={styles.paragraph}>With out app you can easily track your income and expenses, set financila goals, and make informed decisions about your money.</p>
            <button onClick={() => handleNavigation()}>Get Started</button>
        </div>
    );
};

export default HomePage;