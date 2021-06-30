import { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css';

export default function Users() {
      const router = useRouter();
      const { route } = router.query;

      return (
            <div className={styles.title}>
                  {getUserDataFromRouteName(route)}
            </div>
      );
}

function getUserDataFromRouteName(route) {
    if (
          route === "dan" ||
          route === "aditya" ||
          route === "rishi"
    ) {
      return <h1>You are on {route}'s page</h1>;
    } else {
      return <h1>User not found.</h1>;
    }
}