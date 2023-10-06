import Link from "next/link";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="w-full flex justify-end text-sm">
      <ol className="list-none p-0 flex items-center md:justify-end">
        <li className="flex items-center">
          <Link href="/" className="pr-1 text-base font-medium text-secondary transition hover:opacity-70 hover:underline ">
            Home
          </Link>
          {paths.length > 0 && <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>}
        </li>
        {paths.map((path, index) => (
          <li className="flex items-center" key={index}>
            {index !== paths.length - 1 ? (
              <Link
                href={`/${paths.slice(0, index + 1).join('/')}`}
                className="pr-1 text-base font-medium text-secondary capitalize transition hover:opacity-70 hover:underline"
              >
                {path}
              </Link>
            ) : (
              <span className="text-base font-medium text-primary capitalize">{path}</span>
            )}
            {index !== paths.length - 1 && (
              <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
