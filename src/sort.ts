export enum Stack {
  STANDARD,
  SPECIAL,
  REJECTED
}

export const MAX_MASS = 20;
export const MAX_VOLUME = 1000000;
export const MAX_LENGTH = 150;

export const sort = (width: number, height: number, length: number, mass: number): Stack => {
  if(width > 0 && height > 0 && length > 0 && mass > 0) {
    const dimensions = [width, height, length];
    const volume = width * height * length;

    const tooBig = volume > MAX_VOLUME;
    const tooHeavy = mass > MAX_MASS;
    const tooLong = dimensions.some(d => d > MAX_LENGTH)

    if(tooBig || tooHeavy || tooLong) {
      if(tooBig && tooHeavy || tooLong) {
        return Stack.REJECTED;
      } else {
        return Stack.SPECIAL;
      }
    } else {
      return Stack.STANDARD
    }
  } else {
    throw new Error("Invalid input. All values must be greater than zero.");
  }

};
