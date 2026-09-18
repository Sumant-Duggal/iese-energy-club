import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IESE Energy Club',
  description:
    'The IESE Energy Club website: events, team, membership, and Global Energy Day at IESE Business School in Barcelona.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'IESE Energy Club',
    description:
      'Explore the IESE Energy Club, Global Energy Day, the team, and membership information.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}