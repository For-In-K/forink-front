import React from 'react';
import { Link } from 'react-router-dom';

type NotFoundProps = {
  headline?: string;
  subtext?: string;
  homePath?: string;
};

const NotFound: React.FC<NotFoundProps> = ({
  headline = 'Lost on the global roadmap?',
  subtext = "It seems you've wandered off the path. Let's guide you back home.",
  homePath = '/',
}) => (
  <main className="flex min-h-screen items-start justify-center p-6">
    <section className="grid w-full max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2">
      <article className="flex flex-col justify-center gap-6 px-6">
        <header>
          <p className="text-sm font-medium tracking-wide text-[--color-primary]">
            Fori
          </p>
          <h1
            id="notfound-404-title"
            className="text-6xl leading-tight font-extrabold text-gray-900 sm:text-7xl"
          >
            404
          </h1>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800 sm:text-3xl">
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

export default NotFound;
