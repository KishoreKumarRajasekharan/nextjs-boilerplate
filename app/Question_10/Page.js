// app/question-10/page.js

import Link from 'next/link';

export default function Question10() {
  const resources = [
    "Vercel Security Overview",
    "Vercel Enterprise Security Whitepaper",
    "Vercel Secure Compute Documentation",
    "Vercel Compliance and Certifications",
    "Vercel Enterprise Plan Features",
    "Vercel Edge Network Overview",
    "YouTube Video: 'Vercel Enterprise Security Features'",
    "Case Studies of Enterprise Customers",
    "Vercel API Documentation",
    "Vercel Status Page"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Question 10: Resources for CISO Onboarding</h1>
      <p className="mb-4">To prepare for the CISO onboarding session, I would gather these resources:</p>
      <ul className="list-disc pl-6 mb-6">
        {resources.map((resource, index) => (
          <li key={index} className="mb-2">{resource}</li>
        ))}
      </ul>
      <p className="mb-6">I would also prepare a custom migration roadmap tailored to the CISO's specific needs and concerns.</p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
