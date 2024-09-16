// app/question-7/page.js

import Link from 'next/link';

export default function Question7() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Question 7: Introduction to Vercel</h1>
      <p style={{ marginBottom: '16px' }}>
        Vercel is a cloud platform for static and serverless deployment. It offers:
        • Instant deployment
        • Automatic scaling
        • Seamless workflow for modern web projects
        • Support for frameworks like Next.js, React, Vue
        • Automatic HTTPS
        • Global CDN
        • Continuous deployment from Git
      </p>
      <p style={{ marginBottom: '16px' }}>
        Vercel empowers developers to focus on building exceptional web experiences
        without worrying about infrastructure management.
      </p>
      <Link href="/">
        <button style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}>Back to Home</button>
      </Link>
    </div>
  );
}
