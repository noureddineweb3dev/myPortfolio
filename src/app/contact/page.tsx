'use client';

import ContactForm from '../../components/sections/ContactForm';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Contact from '../../components/sections/Contact';

function ContactPage() {
  const search = useSearchParams();
  const showForm = search?.get('form') === '1';

  return (
    <main className="min-h-screen bg-transparent">
      {showForm ? (
        <div className="py-20 px-6">
          <ContactForm />
        </div>
      ) : (
        <div className="py-20 px-6">
          <Contact />
          <div className="mt-8 text-center">
            <Link href="/contact?form=1" className="text-indigo-400 underline">
              Open contact form
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default ContactPage;
