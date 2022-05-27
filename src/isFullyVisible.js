
export function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
 
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
 
  return ((top >= 0) && (bottom <= window.innerHeight));
};
