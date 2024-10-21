import { Roboto } from 'next/font/google'
import logoImg from '../assets/logo.svg'
import Image from 'next/image';
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="flex flex-col items-center justify-center h-[100px] bg-[#121214]">
          <div className="w-[110px]">
            <Image src={logoImg} alt="Logo" width={110} height={32} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}