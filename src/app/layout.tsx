import React from "react";
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
import { AppWrapper } from "../../components/Wrapper";

export const metadata = {
  openGraph: {
    title: "❤️ TOSDAP",
    description: "The TOSDAP Love story",
    url: "https://wedding.tosdapdrivers.com.ng",
    siteName: "wedding.tosdapdrivers.com.ng",
    images: [
      {
        url: "https://wedding.tosdapdrivers.com.ng/8.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://wedding.tosdapdrivers.com.ng/8.png",
        width: 1800,
        height: 1600,
        alt: "TOSDAP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <AppWrapper>{children}</AppWrapper>

        <Script src="js/jquery.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="js/jquery-plugin-collection.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </html>
  );
}
