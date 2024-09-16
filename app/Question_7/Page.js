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
      <h1>Question 7: [Introduction to Vercel]</h1>
      <p>Vercel is a cloud platform for static and serverless deployment that enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision. It provides a seamless workflow to deploy, preview, and ship modern web projects, supporting popular frameworks like Next.js, React, Vue, and more. With features like automatic HTTPS, global CDN, and continuous deployment from Git, Vercel empowers developers to focus on building exceptional web experiences without worrying about infrastructure management.</p>
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
