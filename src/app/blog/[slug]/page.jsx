import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";

const SinglePostPage = ({ params }) => {
  const { slug } = params;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div>
            <Image
              src="/noavatar.png"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jack Black</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis a
          numquam laboriosam. Aperiam quod eius ipsam qui earum! Sequi odit eos
          ea atque blanditiis nesciunt, adipisci quia iste voluptatibus
          voluptas.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
