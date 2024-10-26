import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us through the contact details below.</p>
      <section>
        <h2>Email</h2>
        <p>support@ourwebsite.com</p>
      </section>
      <section>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
      </section>
      <section>
        <h2>Address</h2>
        <p>123 Main Street, Hometown, Country</p>
      </section>
    </div>
  );
};

export default Contact;
