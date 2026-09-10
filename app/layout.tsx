import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noble Lab Attend',
  description: 'Computer laboratory entry and PC usage management system',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
