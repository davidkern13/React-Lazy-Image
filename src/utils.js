/**
 * Returns image orientation
 * @function imageOrientation
 * @param {string} src - src of image
 * @returns {string} - type of image orientation
 */
export const imageOrientation = src => {
  let orientation,
    img = new Image();
  img.src = src;

  if (img.naturalWidth > img.naturalHeight) {
    orientation = "landscape";
  } else if (img.naturalWidth < img.naturalHeight) {
    orientation = "portrait";
  } else {
    orientation = "even";
  }

  return orientation;
};
