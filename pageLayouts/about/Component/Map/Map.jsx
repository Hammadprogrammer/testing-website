import styles from './Map.module.scss';  // Import the SCSS module

const Map = () => {
  return (
    <>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6821095950886!2d67.0608219751397!3d24.855785577932284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea44d96c8e5%3A0x84cf59a8354bb238!2s7CTECH%20-%20Your%20Perfect%20Business%20Solution!5e1!3m2!1sen!2s!4v1735659355880!5m2!1sen!2s"
          className={styles.iframe}
          title="7CTech Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
