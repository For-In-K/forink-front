import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface NotFoundProps {
  headline?: string;
  subtext?: string;
  homePath?: string;
}

const NotFound = ({
  headline = 'Lost on the global roadmap?',
  subtext = "It seems you've wandered off the path. Let's guide you back home.",
  homePath = '/',
}: NotFoundProps) => {
  const navigate = useNavigate();

  toast('잘못된 URL은 5초 후에 홈으로 돌아가요', {
    autoClose: 5000,
    closeButton: false,
    pauseOnHover: false,
    closeOnClick: false,
  });
  setTimeout(() => {
    navigate(homePath);
  }, 5000);

  return (
    <main className="flex min-h-screen items-start justify-center p-6">
      <section className="grid w-full max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <article className="flex flex-col justify-center gap-6 px-6">
          <header>
            <p className="text-text-muted text-sm font-medium tracking-wide">
              Fori
            </p>
            <h1
              id="notfound-404-title"
              className="text-text-primary text-6xl leading-tight font-extrabold sm:text-7xl"
            >
              404
            </h1>

            <h2 className="text-text-muted mt-2 text-2xl font-semibold sm:text-3xl">
              {headline}
            </h2>
          </header>

          <p className="max-w-xl text-base text-gray-600">{subtext}</p>

          <nav className="mt-2 flex gap-3" aria-label="Navigation links">
            <Link
              to={homePath}
              className="bg-primary hover:bg-primary-hover inline-flex items-center gap-3 rounded-full p-2 px-4 font-semibold text-white shadow-md focus:outline-none active:scale-95"
            >
              Return home
            </Link>
            <a
              href="/roadmap"
              className="hover:bg-white-hover text-primary inline-flex items-center gap-2 rounded-full border border-transparent bg-white p-2 px-4 font-medium shadow-sm active:scale-95"
            >
              Explore roadmap
            </a>
          </nav>

          <p className="mt-4 text-sm text-gray-500">
            Tip: Check our roadmap to see the full global vision.
          </p>
        </article>
      </section>
    </main>
  );
};

export default NotFound;
