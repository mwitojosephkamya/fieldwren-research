/**
 * Photos come from Pexels (https://www.pexels.com), which are free to use.
 * Each photo is referred to by its Pexels number. To swap a photo, open the photo
 * on pexels.com, copy the number at the end of its web address, and paste it here.
 */

export function photoUrl(id: number, width = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const images = {
  hero: { id: 7683704, alt: "University students studying together at a campus table" },
  research: { id: 8199558, alt: "Students discussing their work around a library table" },
  collection: { id: 5699480, alt: "An interviewer taking notes while talking with a participant" },
  analysis: { id: 4559598, alt: "A researcher analysing data on a laptop" },
  evaluation: { id: 8124410, alt: "Printed charts and results spread across a desk" },
  training: { id: 34046709, alt: "Participants working on laptops in a training workshop" },
  band: { id: 590041, alt: "" },
};
