import { Link } from "@remix-run/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
  return (
    <nav className="px-2 sm:px-4  w-full z-20 top-0 left-0 flex items-center justify-between py-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            slidetree
          </span>
        </a>
        <nav className="flex gap-4">
          <a
            href="https://github.com/0verread/slidetree"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <GitHubLogoIcon className="h-10 w-6 text-slate-400 transition-colors hover:text-white" />
          </a>
          <Link
            to="/signin"
            className="justify-center flex sm:inline-flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group h-10"
          >
            singin
          </Link>
        </nav>
      </div>
    </nav>
  );
};
