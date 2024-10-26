import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        We are a dedicated team of professionals with a passion for excellence. Our team strives to bring you the best experience with our platform.
      </p>
      <section>
        <h2>Our History</h2>
        <p>
          Established in 2023, we have rapidly grown to become a trusted source for valuable information and services.
        </p>
      </section>
      <section>
        <h2>Our Team</h2>
        <ul>
          <li>John Doe - Founder</li>
          <li>Jane Smith - Lead Developer</li>
          <li>Mary Johnson - Marketing Manager</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
