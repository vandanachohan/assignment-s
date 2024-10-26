import React from 'react';
import Link from 'next/link';
import { text } from 'stream/consumers';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign:'center', color: 'blue'}}>Welcome to Our Website</h1>
      <nav style={{ textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>
        Discover amazing services and information on our platform. We’re here to serve you with quality content and excellent support.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver quality services and valuable resources to our users, helping them succeed in their personal and professional lives.
        </p>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Comprehensive resources</li>
          <li>User-friendly design</li>
          <li>24/7 support</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
