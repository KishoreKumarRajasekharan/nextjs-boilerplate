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
    "YouTube Video: &quot;Vercel Enterprise Security Features&quot;",
    "Case Studies of Enterprise Customers",
    "Vercel API Documentation",
    "Vercel Status Page"
  ];

  return (
    &lt;div className="min-h-screen bg-black text-white p-8 font-sans"&gt;
      &lt;h1 className="text-3xl font-bold mb-6"&gt;Question 10: Resources for CISO Onboarding&lt;/h1&gt;
      &lt;p className="mb-4"&gt;To prepare for the CISO onboarding session, I would gather these resources:&lt;/p&gt;
      &lt;ul className="list-disc pl-6 mb-6"&gt;
        {resources.map((resource, index) =&gt; (
          &lt;li key={index} className="mb-2"&gt;{resource}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;p className="mb-6"&gt;I would also prepare a custom migration roadmap tailored to the CISO&apos;s specific needs and concerns.&lt;/p&gt;
      &lt;Link href="/"&gt;
        &lt;button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"&gt;
          Back to Home
        &lt;/button&gt;
      &lt;/Link&gt;
    &lt;/div&gt;
  );
}
