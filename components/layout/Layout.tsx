import Image from "next/image";
import { PropsWithChildren } from "react";
import styles from "../../styles/Layout.module.css";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>Made by GunterTM</span>
      </footer>
    </>
  );
}

export default Layout;
