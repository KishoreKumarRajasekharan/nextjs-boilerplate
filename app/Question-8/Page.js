// app/question-8/page.js

import Link from 'next/link';

export default function Question8() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Question 8: Monitoring and Logging Options</h1>
      <p className="mb-4">Dear valued customer,</p>
      <p className="mb-4">Thank you for your interest in monitoring and logging options for your Vercel project. Here are some recommended solutions:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Vercel Analytics: Built-in performance insights, including Core Web Vitals.</li>
        <li>Datadog: Comprehensive monitoring and analytics platform.</li>
        <li>Sentry: Error tracking and performance monitoring.</li>
        <li>LogDNA: Robust logging solution.</li>
        <li>New Relic: Full-stack observability and performance insights.</li>
      </ul>
      <p className="mb-4">To get started, visit the <a href="https://vercel.com/integrations" className="text-blue-400 hover:underline">Vercel Marketplace</a> and search for your preferred tool. Each integration includes setup instructions.</p>
      <p className="mb-4">For more information on best practices, check our <a href="https://vercel.com/docs/concepts/observability" className="text-blue-400 hover:underline">observability documentation</a>.</p>
      <p className="mb-6">Feel free to reach out if you need any assistance with setup or have specific requirements!</p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
