import React from 'react';
import { useRouter } from 'next/router';

const MainPage = () => {
  const router = useRouter();

  const questions = [
    "Compare Next.js and React",
    "Edge Functions, Serverless Functions, or Edge Middleware",
    "Best practices for redirects",
    "Introduction to Vercel",
    "Third-party integrations for Monitoring or Logging",
    "Mitigating high usage bills",
    "Resources for CISO onboarding",
    "Improving the familiarization exercise"
  ];

  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ alignSelf: 'flex-start' }}>
        <h1>Develop. Preview. Ship.</h1>
      </div>
      
      <img 
        src="/path/to/nextjs-logo.jpg" 
        alt="Next.js Logo" 
        style={{ width: '200px', height: 'auto' }}
      />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {questions.map((question, index) => (
          <button 
            key={index}
            onClick={() => router.push(`/question${index + 1}`)}
            style={{ 
              backgroundColor: 'blue', 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              cursor: 'pointer',
              borderRadius: '5px'
            }}
          >
            {`Question ${index + 1}`}
          </button>
        ))}
      </div>
      
      <img 
        src="/path/to/vercel-logo.jpg" 
        alt="Vercel Logo" 
        style={{ width: '150px', height: 'auto', alignSelf: 'flex-end' }}
      />
    </main>
  );
};

export default MainPage;
