import { Link } from "react-router-dom";

function NotFound(): JSX.Element {
  // Ascii arts from https://www.asciiart.eu/animals/cats
  const asciiArt: string = `        |\\      _,,,---,,_
  ZZZzz /,\`.-'\`'    -.  ;-;;,_
       |,4-  ) )-,_. ,\\ (  \`'-'
      '---''(_/--'  \`-'\\_)  Felix Lee `;

  return (
    <div className="max-w-[1400px] mx-auto md:px-8 md:py-40">
      <h1 className="font-extrabold text-6xl uppercase">404 Unexist</h1>
      <p className="mb-10">
        What you&apos;re trying to seek are unfounded.{" "}
        <Link className="underline" to="/">
          Go Home.
        </Link>
      </p>

      <pre>{asciiArt}</pre>
    </div>
  );
}

export default NotFound;
