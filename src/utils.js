/**
 * Returns image orientation
 * @function imageOrientation
 * @param {string} img - src of image
 * @returns {string} - type of image orientation
 */
export const imageOrientation = img => {
  let orientation;

  if (img.naturalWidth > img.naturalHeight) {
    orientation = "landscape";
  } else if (img.naturalWidth < img.naturalHeight) {
    orientation = "portrait";
  } else {
    orientation = "even";
  }

  return orientation;
};

export const Image = "https://i.ibb.co/DtbLVMN/Purple-and-White-Math-Tutor-Bordered-Linked-In-Banner.png";
export const ErrorImage = "https://i.ibb.co/5Ykzw98/Lighter-District.png";