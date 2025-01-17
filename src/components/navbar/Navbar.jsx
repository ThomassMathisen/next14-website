import styles from "./navbar.module.css";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo{" "}
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
