import Image from 'next/image';
import styles from './example.module.css';

export default function Example() {
  return (
    <>
      <Image
        src="https://picsum.photos/300/200"
        width="300"
        height="200"
        alt="next logo"
        data-test="example-image"
      />
      <h1 data-test="example-text" className={styles.test}>
        Hello World
      </h1>
    </>
  );
}
