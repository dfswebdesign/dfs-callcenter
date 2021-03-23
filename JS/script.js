const navButton = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");

Array.from(navLinks).forEach((link) =>
	link.addEventListener("click", () => {
		navButton.checked = false;
	})
);

var $title = $(".js-title");
var copy = ".js-copy";

$title.click(function () {
	$(this).next(copy).slideToggle();
	$(this).parent().siblings().children().next().slideUp();
	return false;
});
