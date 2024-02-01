import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css'
import NextTopLoader from 'nextjs-toploader';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        <NextTopLoader/>
        </body>
    </html>
  );
}
