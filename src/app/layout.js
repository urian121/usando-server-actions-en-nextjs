import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Server Actions en Next.js",
  description: "Aprendiendo Server Actions en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-12">
              <h1 className="text-center fw-bold">
                Usando Server Actions en Next.js <hr />
              </h1>
            </div>
          </div>

          {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
