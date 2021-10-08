import { useState } from "react";

const useDropdownButton = (options) => {
  const { open } = options;
  const [dropdownOpen, setDropdownOpen] = useState(open);

  const openCloseDropdown = (open) => {
    console.log(dropdownOpen);
    setDropdownOpen(open);
  };

  return { openCloseDropdown, open: dropdownOpen };
};

export default useDropdownButton;
