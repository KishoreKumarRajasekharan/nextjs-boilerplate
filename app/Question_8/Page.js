// app/question-8/page.js

import Link from 'next/link';

export default function Question8() {
  return (
    <div className="container">
      <h1>Question 8: Monitoring and Logging Options</h1>
      <p>Dear customer,</p>
      <p>Thank you for your interest in monitoring and logging options for your Vercel project. Here are some recommended solutions:</p>
      <ul>
        <li>Vercel Analytics: Built-in performance insights, including Core Web Vitals.</li>
        <li>Datadog: Comprehensive monitoring and analytics platform.</li>
        <li>Sentry: Error tracking and performance monitoring.</li>
        <li>LogDNA: Robust logging solution.</li>
        <li>New Relic: Full-stack observability and performance insights.</li>
      </ul>
      <p>To get started, visit the <a href="https://vercel.com/integrations">Vercel Marketplace</a> and search for your preferred tool. Each integration includes setup instructions.</p>
      <p>For more information on best practices, check our <a href="https://vercel.com/docs/concepts/observability">observability documentation</a>.</p>
      <p>Feel free to reach out if you need any assistance with setup or have specific requirements!</p>
      <Link href="/">
        <button className="back-button">Back to Home</button>
      </Link>
      <style jsx>{`
        .container {
          background-color: #000;
          color: #fff;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          padding: 20px;
        }
        .back-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
