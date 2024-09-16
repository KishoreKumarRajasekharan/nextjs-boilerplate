// app/question-7/page.js

import Link from 'next/link';

export default function Question7() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-5">
      <h1 className="text-2xl font-bold mb-4">Question 7: Introduction to Vercel</h1>
      <p className="mb-4">
        Vercel is a cloud platform for static and serverless deployment. It offers:
        • Instant deployment
        • Automatic scaling
        • Seamless workflow for modern web projects
        • Support for frameworks like Next.js, React, Vue
        • Automatic HTTPS
        • Global CDN
        • Continuous deployment from Git
      </p>
      <p className="mb-4">
        Vercel empowers developers to focus on building exceptional web experiences
        without worrying about infrastructure management.
      </p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
