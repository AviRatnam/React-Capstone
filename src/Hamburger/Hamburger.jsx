const Hamburger = () => {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");

  burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });

  return (
    <div class="px-4 md:hidden" id="burger">
      <svg
        class="w-6"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
