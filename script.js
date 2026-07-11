// TWENZER. media — hero video behaviour
(function () {
  "use strict";

  var video     = document.getElementById("heroVideo");
  var hero      = document.getElementById("top");
  var services  = document.getElementById("services");
  var scrollHint = document.getElementById("scrollHint");
  var nav       = document.getElementById("nav");

  // Smoothly scroll to the section right after the hero
  function goToNext() {
    if (services) services.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (video) {
    // 1) When the video finishes → auto-scroll down to the next section
    video.addEventListener("ended", goToNext);

    // 2) Autoplay can be blocked; try to kick it off and stay silent if it fails
    var tryPlay = function () {
      var p = video.play();
      if (p && typeof p.catch === "function") { p.catch(function () {}); }
    };
    tryPlay();
  }

  // 3) Replay the video from the start whenever the hero comes back into view
  //    (e.g. the visitor scrolls back up to watch it again)
  if (video && hero && "IntersectionObserver" in window) {
    var wasVisible = true; // hero is visible on load
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var visible = entry.isIntersecting && entry.intersectionRatio > 0.55;
        // Only restart when the hero re-enters after having left the viewport
        if (visible && !wasVisible) {
          try { video.currentTime = 0; } catch (e) {}
          var p = video.play();
          if (p && typeof p.catch === "function") { p.catch(function () {}); }
        }
        wasVisible = visible;
      });
    }, { threshold: [0, 0.55, 1] });
    io.observe(hero);
  }

  // Scroll hint acts as a manual fallback for the auto-scroll
  if (scrollHint) scrollHint.addEventListener("click", goToNext);

  // Solidify the nav background once the user scrolls past the hero top
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
