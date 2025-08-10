import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Entrex Chauffeur Services',
  description:
    'Premium chauffeur and transport services with luxury vehicles, punctuality, and comfort guaranteed.',
  icons: {
    icon: '/logo.png', // public folder path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-100 text-gray-900 font-sans">
        {children}
        <Toaster
        position="bottom-right"
        toastOptions={{
          className:
            "bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white shadow-lg border dark:border-gray-700",
          duration: 4000,
          style: {
            padding: "12px 16px",
            borderRadius: "10px",
          },
        }}
      />
      </body>
    </html>
  );
}
