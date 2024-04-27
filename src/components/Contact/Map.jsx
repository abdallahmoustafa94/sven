const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.091057999176!2d9.945271676455766!3d51.54822927182266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d4e6407bd4a9%3A0x269456588b992cff!2sAlbrecht-Thaer-Weg%2022D%2C%2037075%20G%C3%B6ttingen%2C%20Germany!5e0!3m2!1sen!2seg!4v1714236413514!5m2!1sen!2seg"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
