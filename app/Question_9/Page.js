// app/question-9/page.js

import Link from 'next/link';

export default function Question9() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1>Question 9: Mitigating High Usage Bills</h1>
      <p>Dear customer,</p>
      <p>I understand your concern about the high usage bill related to fast origin transfer and fast data transfer. Here are some strategies to help mitigate these costs:</p>
      <ul>
        <li>Optimize asset sizes: Compress images, minify JavaScript and CSS files, and use efficient file formats like WebP for images.</li>
        <li>Implement caching strategies: Utilize Vercel's Edge Cache and configure appropriate cache headers for static assets.</li>
        <li>Use Incremental Static Regeneration (ISR): This Next.js feature can help reduce the frequency of content updates, lowering origin requests.</li>
        <li>Implement efficient API routes: Optimize your API calls to reduce unnecessary data transfer.</li>
        <li>Consider using Vercel's Image Optimization: This feature can help reduce image sizes and improve loading times.</li>
        <li>Monitor your usage: Regularly check your Vercel dashboard to identify high-usage areas and optimize accordingly.</li>
        <li>Implement lazy loading: Load non-critical resources only when needed to reduce initial page load size.</li>
      </ul>
      <p>For more detailed information, check out Next.js Performance Optimization and Vercel Edge Network documentation.</p>
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
