import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// list of child routes that belong to the About section (don't trigger scroll between them)
const aboutChildRoutes = new Set([
  "",
  "personalskill",
  "technicalskill",
  "technicaljourney",
  "projectjourney",
  "educationjourney",
  "experiencejourney",
  "socialmedia",
  "toolkit",
]);

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  function topLevelSegment(p) {
    if (!p) return "";
    const seg = p.split("/").filter(Boolean)[0];
    return (seg || "").toLowerCase();
  }

  useEffect(() => {
    const prev = prevPathRef.current;
    const prevSeg = topLevelSegment(prev);
    const currSeg = topLevelSegment(pathname);

    const prevIsAbout = aboutChildRoutes.has(prevSeg);
    const currIsAbout = aboutChildRoutes.has(currSeg);

    // If both previous and current routes are within the About section, do NOT scroll.
    if (prevIsAbout && currIsAbout) {
      prevPathRef.current = pathname;
      return;
    }

    // Otherwise, scroll to top as before
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
}
