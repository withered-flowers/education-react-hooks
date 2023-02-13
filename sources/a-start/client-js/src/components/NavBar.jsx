const NavBar = ({ setWhichData }) => {
  const onLinkClickHandler = (evt, navigationValue) => {
    evt.preventDefault();
    setWhichData(navigationValue);
  };

  return (
    <nav className="flex flex-row justify-between">
      {/* Left */}
      <section>
        <h2 className="text-2xl font-semibold">Belajar Hooks</h2>
      </section>

      {/* Right */}
      <section>
        <ul className="flex flex-row gap-4">
          <li>
            {/* JP adalah enum untuk navigasi ke JSONPlaceholder */}
            <a
              href="#"
              className="underline text-blue-400 hover:text-blue-500"
              onClick={(evt) => onLinkClickHandler(evt, "JP")}
            >
              JSONPlaceholder (ToDos)
            </a>
          </li>
          <li>
            {/* RR adalah enum untuk navigasi ke ReqResIn */}
            <a
              href="#"
              className="underline text-blue-400 hover:text-blue-500"
              onClick={(evt) => onLinkClickHandler(evt, "RR")}
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
