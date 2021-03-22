const navButton = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");

Array.from(navLinks).forEach((link) =>
	link.addEventListener("click", () => {
		navButton.checked = false;
	})
);
