// app/question-6/page.js

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
      <h1>Question 6: [Redirects Best Practices]</h1>
      <p>[Dear valued customer,]</p>
      <p>Thank you for reaching out about best practices for redirects on Vercel. Here are some key recommendations:</p>
            <ul>
                <li>Use Vercel's built-in redirects: Utilize the redirects array in your vercel.json file or next.config.js for Next.js projects. This method is efficient and easy to manage.</li>
                <li>Implement 301 redirects for permanent changes: Use status code 301 for permanent redirects to maintain SEO value.</li>
                <li>Use regex for flexible matching: Leverage regular expressions in your redirect rules for more dynamic and flexible redirects.</li>
                <li>Minimize redirect chains: Avoid multiple redirects in sequence as they can slow down page load times.</li>
                <li>Test thoroughly: Always test your redirects in both development and production environments to ensure they're working as expected.</li>
                <li>Consider using Edge Middleware: For more complex redirect logic, Vercel's Edge Middleware can provide powerful, customizable solutions.</li>
            </ul>
            <p>For more detailed information, I recommend checking out Vercel's official documentation on redirects: https://vercel.com/docs/edge-network/redirects</p>    
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
