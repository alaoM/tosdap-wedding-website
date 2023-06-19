"use client";
// import "./globals.css";
import React, { useEffect } from "react";
import Script from "next/script";

import "/public/css/font-awesome.min.css";
import "/public/css/flaticon.css";

import "/public/css/animate.css";
import "/public/css/owl.carousel.css";
import "/public/css/owl.theme.css";
import "/public/css/slick.css";
import "/public/css/slick-theme.css";
import "/public/css/owl.transitions.css";
import "/public/css/jquery.fancybox.css";
import "/public/css/magnific-popup.css";
// Bootstrap core CSS
import "/public/css/bootstrap.min.css";
import "/public/css/style.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export const metadata = {
  title: "❤️ TOSDAP",
  description: "The TOSDAP Love story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("/public/js/bootstrap.min.js");
  });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="home">
        <div className="page-wrapper">
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </div>
        <Script src="js/jquery.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="js/jquery-plugin-collection.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </html>
  );
}
