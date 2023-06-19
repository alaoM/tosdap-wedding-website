"use client";
import Image from "next/image";
import "./page.module.css";
import Link from "next/link";
import { useRef, useState } from "react";

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
      name: "Lorem Ipsum",
      bankName: "GTBank",
      accountNumber: "098765432",
    },
    {
      name: "Lorem 1",
      bankName: "First Banl PLC",
      accountNumber: "234567890",
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
                  <Image
                    width={500}
                    height={350}
                    src="/images/prewedding/groom.jpg"
                    alt="groom"
                  />
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
                  <Image
                    width={500}
                    height={350}
                    src="/images/prewedding/2.jpg"
                    alt="bride"
                  />
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
                      <h3>Self Patners, God&apos;s Patners</h3>

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
                <span>Join us to...</span> Celebrate Our Love
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
            <div className="col col-lg-6">
              <h3>Lorem Ipsum</h3>
              <Link href="tel:0912324834">1234567890</Link>
            </div>
            <div className="col col-lg-6">
              <h3>Lorem Ipsum</h3>
              <Link href="tel:0912324834">1234567890</Link>
            </div>
          </div>{" "}
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
                please make it a monitory gift.
              </h3>

              <div className="row">
                {gift.map((d, i) => (
                  <div key={i} className="col-6">
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
