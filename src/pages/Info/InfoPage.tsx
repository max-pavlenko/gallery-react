import React from 'react';
import styles from './InfoPage.module.scss'

const InfoPage = () => {
   return (
       <article className={styles.infoPage}>
          <h1 className={styles.infoPage__title}>Exploring the Simple Gallery</h1>
          <p className={styles.infoPage__intro}>A User-Friendly Platform for Organizing and Showcasing Your Photos</p>
          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Effortless Photo Organization</h2>
             <p className={styles.infoPage__sectionDescription}>With the Simple Gallery, you can bid farewell to the chaos of scattered photo files and enjoy a streamlined organization process. The platform allows you to create albums, tag photos with relevant keywords, and add descriptions, making it simple to categorize and locate your images. Say goodbye to hours spent searching for that one perfect shot; the Simple Gallery brings order to your digital collection.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Sleek and User-Friendly Interface</h2>
             <p className={styles.infoPage__sectionDescription}>Our gallery boasts a sleek and user-friendly interface, ensuring a smooth and enjoyable user experience. The clean design focuses on your photos, putting them front and center. Navigation is intuitive, allowing you to effortlessly browse through your albums and images. With a few clicks, you can easily view, edit, or share your photos with friends, family, or clients.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Customizable Display Options</h2>
             <p className={styles.infoPage__sectionDescription}>The Simple Gallery understands that every photo collection is unique, and we provide you with the tools to showcase your images exactly as you envision. Choose from a variety of display options, including grid view, slideshow, or carousel, to suit your preferences and the atmosphere you want to create. Take control of your gallery's appearance and make it a reflection of your personal style.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Seamless Integration and Sharing</h2>
             <p className={styles.infoPage__sectionDescription}>Sharing your photos with loved ones or the wider world is a breeze with the Simple Gallery. Our platform enables easy integration with social media networks, allowing you to share your images with just a few clicks. Whether you're posting a stunning landscape on Instagram or showcasing your portfolio on Facebook, the Simple Gallery makes sharing seamless and hassle-free.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Protection and Privacy</h2>
             <p className={styles.infoPage__sectionDescription}>We understand the importance of safeguarding your precious memories. The Simple Gallery offers various privacy settings, allowing you to control who can access your photos. Whether you want to keep your gallery private for personal use or selectively share certain albums, our platform ensures your images are protected according to your preferences.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Cross-Platform Accessibility</h2>
             <p className={styles.infoPage__sectionDescription}>The Simple Gallery provides cross-platform accessibility, meaning you can access and manage your photo collection from multiple devices. Whether you prefer to use your computer, smartphone, or tablet, our responsive design ensures a consistent and optimized experience across different devices, allowing you to enjoy your gallery wherever you go.</p>
          </section>

          <section className={styles.infoPage__section}>
             <h2 className={styles.infoPage__sectionTitle}>Conclusion</h2>
             <p className={styles.infoPage__sectionDescription}>The Simple Gallery offers a user-friendly and feature-rich platform for organizing and showcasing your photos. With its effortless organization, sleek interface, customizable display options, seamless sharing capabilities, privacy settings, and cross-platform accessibility, the Simple Gallery is the perfect companion for both amateur and professional photographers. Start exploring the Simple Gallery today and unlock the full potential of your photo collection.</p>
          </section>
       </article>
   );
};

export default InfoPage;
