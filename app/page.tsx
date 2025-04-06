"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo">LOGO</div>
          <nav className="nav">
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="#products" className="nav-link">PRODUCTS</Link>
            <Link href="#about" className="nav-link">ABOUT</Link>
            <Link href="#contacts" className="nav-link">CONTACTS</Link>
          </nav>
        </header>

        <main className="main">
          <div className="content">
            <div className="text-section">
              <h1 className="title">Face <br /> Recognition</h1>
              <p className="description">
                Discover detailed information about your favorite actors and actresses with our advanced face
                recognition technology. Simply upload an image and get instant results about the person.
              </p>
              <Link href="/upload" className="cta-button">
                Get started
              </Link>
            </div>

            <div className="graphic">
              <div className="circle-background"></div>
              <div className="card">
                <div className="avatar-wrapper">
                  <div className="avatar"></div>
                </div>
                <p className="card-text">Just put your face into selected area :)</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: #ffffff;
          color: #0f172a;
          padding: 0;
        }

        .header {
          max-width: 2500px;
          margin: 0;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 50rem;
          background-color:  #38bdf8;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #0f172a;
          font-weight: 500;
        }

        .nav-link:hover {
          text-decoration: underline;
        }

        .main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          color: #1e293b;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 3.75rem;
          }
        }

        .description {
          color: #38bdf8;
          max-width: 28rem;
        }

        .cta-button {
          display: inline-block;
          background-color: #38bdf8;
          color: white;
          padding: 1.5rem 2rem;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 500;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #0ea5e9;
        }

        .graphic {
          position: relative;
        }

        .circle-background {
          position: absolute;
          inset: 0;
          background-color: #38bdf8;
          border-radius: 9999px;
          transform: translateX(-25%) scale(1.25);
          z-index: 0;
        }

        .card {
          position: relative;
          z-index: 10;
          width: 16rem;
          height: 500px;
          background-color: #38bdf8;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          color: white;
          text-align: center;
        }

        .avatar-wrapper {
          width: 6rem;
          height: 6rem;
          border: 2px solid white;
          border-radius: 9999px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar {
          width: 5rem;
          height: 5rem;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
        }

        .card-text {
          font-size: 0.875rem;
          padding: 0 1rem;
        }
      `}</style>
    </>
  );
}
