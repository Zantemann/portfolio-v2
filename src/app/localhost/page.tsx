import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

// This redirect is for development purposes only. Not used in this project.
export default function RedirectPage() {
  redirect('http://localhost:3000');
}
