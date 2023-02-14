import { Dispatch, SetStateAction } from "react";
import { NavigationValue } from "../ts-related/enums";

interface Props {
  // Setter di dalam useState
  // Tipe datanya adalah Dispatch<SetStateAction<TipeData>>
  setWhichData: Dispatch<SetStateAction<NavigationValue>>;
}

const NavBar = ({ setWhichData }: Props) => {
  const onLinkClickHandler = (
    evt: React.SyntheticEvent<HTMLAnchorElement>,
    navigationValue: NavigationValue
  ) => {
    evt.preventDefault();
    setWhichData(navigationValue);
  };

  return (
    <nav className="flex flex-row justify-between">
      {/* Left */}
      <section>
        <h2 className="text-2xl font-semibold">Belajar Hooks (TS Version)</h2>
      </section>

      {/* Right */}
      <section>
        <ul className="flex flex-row gap-4">
          <li>
            {/* JP adalah enum untuk navigasi ke JSONPlaceholder */}
            <a
              href="#"
              className="underline text-blue-400 hover:text-blue-500"
              onClick={(evt) =>
                onLinkClickHandler(evt, NavigationValue.JsonPlaceholder)
              }
            >
              JSONPlaceholder (ToDos)
            </a>
          </li>
          <li>
            {/* RR adalah enum untuk navigasi ke ReqResIn */}
            <a
              href="#"
              className="underline text-blue-400 hover:text-blue-500"
              onClick={(evt) =>
                onLinkClickHandler(evt, NavigationValue.ReqresIn)
              }
            >
              ReqRes.In (Colors)
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
