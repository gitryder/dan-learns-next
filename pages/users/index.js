import styles from '../../styles/Users.module.css';

export default function Users() {
      return (
            <div className={styles.container}>
                  <h1 className={styles.title}>
                        All Users
                  </h1>
                  <ul className={styles.list}>
                        <li>Aditya</li>
                        <li>Danyl</li>
                        <li>Rishi</li>
                  </ul>
            </div>
      );
}