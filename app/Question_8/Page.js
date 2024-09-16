// app/question-8/page.js

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
      <h1>Question 8: [Monitoring and Logging Options]</h1>
      <p>Dear customer,</p>
            <p>Thank you for your interest in monitoring and logging options for your Vercel project. Vercel offers several built-in and third-party integration options to help you monitor your application's performance and log important events. Here are some recommendations:</p>
            <ul>
                <li>Vercel Analytics: This built-in feature provides insights into your application's performance, including Core Web Vitals.</li>
                <li>Datadog: A comprehensive monitoring and analytics platform that integrates well with Vercel for both monitoring and logging.</li>
                <li>Sentry: Excellent for error tracking and performance monitoring, with easy integration into Vercel projects.</li>
                <li>LogDNA: A robust logging solution that can be easily set up with Vercel deployments.</li>
                <li>New Relic: Offers full-stack observability and can be integrated with Vercel for detailed performance insights.</li>
            </ul>
            <p>To get started with these integrations, you can visit the Vercel Marketplace (https://vercel.com/integrations) and search for the desired tool. Each integration comes with setup instructions to help you get started quickly.</p>
            <p>For more detailed information on monitoring and logging best practices with Vercel, I recommend checking out our documentation: https://vercel.com/docs/concepts/observability</p>
            <p>Let me know if you have any specific requirements or if you need help setting up any of these integrations!</p>
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
