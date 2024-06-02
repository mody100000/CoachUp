import React from "react";
import styles from "./Footer.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <span className={styles.line}></span>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h1 className={styles.logo}>XFACTOR</h1>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>My Account</h2>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Top Links</h2>
          <ul className={styles.list}>
            <li>Classes</li>
            <li>FAQ</li>
            <li>Our Trainers</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Address</h2>
          <ul className={styles.contactInfo}>
            <li>
              <FaMapMarkerAlt /> 123 Fitness St, Gym City
            </li>
            <li>
              <FaPhone /> +1 234 567 890
            </li>
            <li>
              <FaEnvelope /> contact@xfactor.com
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
