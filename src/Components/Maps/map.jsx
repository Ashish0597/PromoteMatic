import React from "react";

const MapsSection = () => {
  return (
    <div className="section pt-0">
      <div className="hero-container">
        <iframe
          className="maps overflow-hidden"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.792611073152!2d77.21780714359225!3d28.572876352789187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25c2bda02bd%3A0x88805483a1dca8bb!2sSouth%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1772010034367!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="South Extension I, New Delhi"
        ></iframe>
      </div>
    </div>
  );
};

export default MapsSection;