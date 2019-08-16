import styles from './index.css';
import router from 'umi/router'

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <li>
          <button onClick={() => {
            router.push('/home')
          }}>home</button>
        </li>
      </ul>
    </div>
  );
}
