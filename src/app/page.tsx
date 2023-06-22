"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isCopied, setIscopied] = useState("");
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIscopied(text);
        // You can add additional logic or feedback here after the text is copied
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
        // You can handle the error or provide feedback to the user
      });
  };

  const gift = [
    {
      name: "Ayanbisi Victor Oludapo",
      bankName: "  Access Bank",
      accountNumber: "0060244138 ",
    },
  ];

  const rsvp = [
    {
      name: "Olufunmilayo",
      phoneNo: " +2348160906596",
    },
    {
      name: "Olaolu",
      phoneNo: "+2348120001182",
    },
  ];
  return (
    <>
      {/* start wedding-couple-section */}
      <section className="wedding-couple-section section-padding" id="couple">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="gb groom shadow-sm">
                <div className="img-holder wow fadeInLeftSlow">
                  <img src="/images/prewedding/groom.jpg" alt="groom" />
                </div>
                <div className="details">
                  <div className="details-inner">
                    <h3>The groom</h3>
                    <p>
                      Oluwatosin, If i say you&apos;re my dream come true, but
                      that would be an understatement. There are a million words
                      to describe our love, but let&apos;s start with this one:
                      everlasting. I love who you are, I love who we are, I love
                      who we are becoming.
                    </p>
                    <span className="signature">Oludapo</span>
                  </div>
                </div>
              </div>
              <div className="gb bride">
                <div className="details">
                  <div className="details-inner">
                    <h3>The Bride</h3>
                    <p>
                      Oludapo,The best love is the kind that awakens the soul
                      and makes us reach for more, that plants a fire in our
                      hearts and brings peace to our minds. I love you, not only
                      for what you are, but for what I am when I am with you.
                    </p>
                    <span className="signature">Oluwatosin</span>
                  </div>
                </div>
                <div className="img-holder wow fadeInRightSlow">
                  <img src="/images/prewedding/bride.jpg" alt="bride" />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
      {/* end wedding-couple-section */}
      {/* start count-down-section */}
      <section
        className="count-down-section section-padding parallax"
        data-bg-image="images/countdown.avif"
        data-speed={7}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>
                <span>We are counting down.....</span> The adventure
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="count-down-clock">
                <div id="clock"></div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
      </section>
      {/* end count-down-section */}
      {/* start story-section */}
      <section className="story-section section-padding" id="story">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="section-title">
                <div className="vertical-line">
                  <span>
                    <i className="fi flaticon-two" />
                  </span>
                </div>
                <h2>Our love story</h2>
              </div>
            </div>
          </div>{" "}
          {/* end section-title */}
          <div className="row">
            <div className="col col-xs-12">
              <div className="story-timeline">
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="story-text right-align-text">
                      <h3>First meet</h3>
                      <p>
                        Oluwatosin first met Oludapo during a singles meeting at
                        Zion Baptist Church. Although she had known him as a
                        fellow church member, it was during this event that they
                        had a chance to engage in a deeper conversation.
                      </p>
                      <h3>How it began</h3>

                      <p>
                        As part of the program, five individuals were randomly
                        paired up to share about themselves, their hobbies, and
                        aspirations. Dee, as Tosin fondly referred to him, was
                        one of the five people she had the opportunity to speak
                        with. She was immediately drawn to his sense of humor,
                        finding herself enjoying their interaction. However, at
                        that time, it was merely a friendly connection, and
                        nothing more.
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="img-holder">
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/1.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="img-holder right-align-text story-slider">
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/2.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/2.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6 text-holder">
                    <span className="heart">
                      <i className="fa fa-heart" />
                    </span>
                    <div className="story-text">
                      <h3>Love enhanced by 2go and Facebook</h3>

                      <p>
                        Time passed, and the digital landscape was dominated by
                        platforms like Facebook and 2go. It was during this
                        period that Tosin received a message from an unknown
                        number. The sender introduced himself as Victor and
                        explained that he had obtained her contact information
                        from her brother.
                      </p>
                      <h3> Friends turn Lovers</h3>

                      <p>
                        Curiosity got the better of Tosin, and she decided to
                        engage in a conversation with Victor. To her surprise,
                        their interactions became a regular occurrence, and she
                        found herself genuinely liking him. Victor possessed
                        qualities that deeply resonated with her. His
                        simplicity, humility, and caring nature endeared him to
                        Tosin, and her affection for him grew organically.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6 text-holder right-heart">
                    <span className="heart">
                      <i className="fa fa-heart" />
                    </span>
                    <div className="story-text right-align-text">
                      <h3>Pillar, Bestfriend, & Lovers </h3>
                      <p>
                        Months turned into years as they continued to chat and
                        build a connection. Despite the physical distance
                        between them, their bond grew stronger each day. Through
                        the challenges of a long-distance relationship, they
                        relied on their faith in God to sustain their love.
                      </p>
                      <h3>Self partners, God&apos;s partners</h3>

                      <p>
                        Their friendship blossomed, and they became each
                        other&apos;s pillars of support, confidants in times of
                        joy and sorrow. Their interactions were marked by
                        genuine care, understanding, and unwavering commitment.
                        Dapo&apos;s love for Tosin was evident in his every word
                        and action, and she reciprocated his affection
                        wholeheartedly.
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="img-holder right-align-text story-slider">
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/5.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/6.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="img-holder right-align-text story-slider">
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/2.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                      <Image
                        height={500}
                        width={500}
                        src="/images/prewedding/2.jpg"
                        alt=""
                        className="img img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6 text-holder">
                    <span className="heart">
                      <i className="fa fa-heart" />
                    </span>
                    <div className="story-text">
                      <h3>Join us as we begin a journey with God</h3>

                      <p>
                        Oluwatosin and Oludapo&apos;s love story is a testament
                        to the power of fate and the beauty of finding love in
                        unexpected places. From that initial meeting at the
                        singles program to their enduring friendship and
                        eventual engagement, their journey has been filled with
                        love, perseverance, and the divine guidance of God.
                        Together, they embrace the future, ready to face any
                        challenge as they build a life of love and happiness.
                        Join us on the 8th day of July, 2023 as we make this
                        journey official.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
      {/* end story-section */}
      {/* start cta */}
      <section
        className="cta section-padding parallax"
        data-bg-image="images/cta-bg.jpg"
        data-speed={7}
      >
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <h2>
                <span>We are going to...</span> Celebrate Our Love
              </h2>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
      {/* end cta */}

      <section className="gallery-section section-padding" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="section-title">
                <div className="vertical-line">
                  <span>
                    <i className="fi flaticon-two" />
                  </span>
                </div>
                <h2>Our gallery</h2>
              </div>
            </div>
          </div>{" "}
          {/* end section-title */}
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <ul>
                  <li>
                    <Link data-filter="*" href="#" className="current">
                      All
                    </Link>
                  </li>
                  <li>
                    <Link data-filter=".wedding" href="#">
                      Wedding
                    </Link>
                  </li>
                  <li>
                    <Link data-filter=".ceremony" href="#">
                      Ceremony
                    </Link>
                  </li>
                  <li>
                    <Link data-filter=".party" href="#">
                      Party
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery">
                <div className="grid wedding">
                  <Link
                    href="images/prewedding/1.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/1.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid wedding ceremony">
                  <Link
                    href="images/prewedding/2.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/2.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid ceremony eudcation">
                  <Link
                    href="images/prewedding/3.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/3.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid wedding party">
                  <Link
                    href="images/prewedding/4.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/4.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid ceremony">
                  <Link
                    href="images/prewedding/5.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/5.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid party">
                  <Link
                    href="images/prewedding/6.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/6.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid wedding">
                  <Link
                    href="images/prewedding/3.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/3.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid ceremony">
                  <Link
                    href="images/prewedding/2.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/2.jpg"
                      alt="prewedding"
                      className="img img-fluid"
                    />
                  </Link>
                </div>
                <div className="grid ceremony">
                  <Link
                    href="images/prewedding/1.jpg"
                    className="fancybox"
                    data-fancybox-group="gall-1"
                  >
                    <Image
                      width={500}
                      height={500}
                      src="/images/prewedding/1.jpg"
                      alt=""
                      className="img img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>

      <section className="events-section section-padding" id="events">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="section-title">
                <div className="vertical-line">
                  <span>
                    <i className="fi flaticon-two" />
                  </span>
                </div>
                <h2>Wedding events</h2>
              </div>
            </div>
          </div>
          {/* end section-title */}
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <div className="event">
                <div className="details">
                  <h3>Church Wedding</h3>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" /> Zion Baptist Church,
                      Adewole Housing Estate, Ilorin
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> July 8th, 2023
                    </li>
                  </ul>
                  <a
                    className="see-location-btn popup-gmaps"
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.1003827093016!2d4.5098515344130075!3d8.479850074696115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036533eea699211%3A0x542d834f3a4aa83a!2sZion%20Baptist%20Church%2C%20Adewole%20Ilorin!5e0!3m2!1sen!2sng!4v1687228783808!5m2!1sen!2sng"
                  >
                    See location <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="event">
                <div className="details">
                  <h3>Engagement &amp; Reception</h3>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" /> Olufunmi hall, Circular
                      Hotels, New yidi road, Ilorin Kwara state
                    </li>
                    <li>
                      <i className="fa fa-clock-o" />
                      July 8th, 2023
                    </li>
                  </ul>
                  <a
                    className="see-location-btn popup-gmaps"
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659.1619697008073!2d4.559295701560737!3d8.482413516787064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103653fc63aaca6d%3A0xcbe9d374d775cdb5!2sCircular%20Hotel!5e0!3m2!1sen!2sng!4v1687228879423!5m2!1sen!2sng"
                  >
                    See location <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

      <section className="getting-there-section section-padding" id="rsvp">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="section-title-white">
                <div className="vertical-line">
                  <span>
                    <i className="fi flaticon-two" />
                  </span>
                </div>
                <h2>RSVP</h2>
              </div>
            </div>
          </div>{" "}
          {/* end section-title */}
          <div className="row content d-sm-flex justify-content-center">
            {rsvp.map((d, i) => (
              <div className="col col-lg-6" key={i}>
                <h3>{d.name}</h3>
                <Link href={`tel:${d.phoneNo}`}>{d.phoneNo}</Link>
              </div>
            ))}
          </div>
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>

      {/* end getting-there-section */}
      {/* start gift-registration-section */}
      <section className="gift-registration-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title">
                <div className="vertical-line">
                  <span>
                    <i className="fi flaticon-two" />
                  </span>
                </div>
                <h2>Do you come bearing gifts?</h2>
              </div>
            </div>
          </div>{" "}
          {/* end section-title */}
          <div className="row content justify-content-center">
            <div className="col-lg-8">
              <h3>
                We sincerely covet your prayers towards the sucess of the
                day&apos;s event and our marriage. We would also be delighted if
                you honor us with your presence. If you wish to give a gift,
                please make it a monetary gift.
              </h3>

              <div className="row d-flex justify-content-center">
                {gift.map((d, i) => (
                  <div key={i} className="col-md-6">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">{d.name}</h5>
                        <p className="card-text">{d.bankName}</p>
                        <button
                          onClick={() => copyToClipboard(d.accountNumber)}
                          className="btn btn-primary"
                        >
                          {d.accountNumber === isCopied
                            ? "Copied"
                            : d.accountNumber}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
    </>
  );
}
