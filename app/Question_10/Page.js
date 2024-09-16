// app/question-10/page.js

import Link from 'next/link';

export default function Question6() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1>Question 10: [Resources for CISO Onboarding]</h1>
      <p>To prepare for the CISO onboarding session, I would gather these resources:</p>
            <ul>
                <li>Vercel Security Overview</li>
                <li>Vercel Enterprise Security Whitepaper</li>
                <li>Vercel Secure Compute Documentation</li>
                <li>Vercel Compliance and Certifications</li>
                <li>Vercel Enterprise Plan Features</li>
                <li>Vercel Edge Network Overview</li>
                <li>YouTube Video: "Vercel Enterprise Security Features"</li>
                <li>Case Studies of Enterprise Customers</li>
                <li>Vercel API Documentation</li>
                <li>Vercel Status Page</li>
            </ul>
            <p>I would also prepare a custom migration roadmap tailored to the CISO's specific needs and concerns.</p>
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
