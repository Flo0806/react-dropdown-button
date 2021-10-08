import "./App.css";
import useDropdownButton from "./DropdownButton/dropdownButton-hook";

function App() {
  const { open, openCloseDropdown } = useDropdownButton({
    open: true,
  });

  return (
    <div className="App">
      <div className={"dropdown-button"}>
        <div>
          <button className={"button"} onClick={() => alert("Button clicked!")}>
            Dropdown
          </button>
          <button
            onClick={() => openCloseDropdown(!open)}
            className={"button-arrow"}
          >
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={"dropdown-area"}
          style={{ display: open ? "unset" : "none" }}
        >
          <div className={"menu-item"}>Item 1</div>
          <div className={"menu-item"}>Item 1</div>
          <div className={"menu-item"}>Item 1</div>
          <div className={"menu-item"}>Item 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
