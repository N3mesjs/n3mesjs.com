import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>Test Links</h1>
      {/* Link interno */}
      <Link href="/">
        home
      </Link>
      {/* Link esterno */}
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </a>
    </div>
  );
}
