import React, { FC } from 'react';
import Image, { ImageLoader, ImageProps } from 'next/image';

export const transformImage = (src: string, widthAndHeight: string): string => {
  if (!src || !widthAndHeight) return '';

  const imageService = 'https://img2.storyblok.com/';
  const path = src
    // removed domain which don't support image transformation
    .replace('a.storyblok.com', '')
    // remove protocol via regex
    .replace(/(^\w+:|^)\/\//, '');
  return imageService + widthAndHeight + path;
};

export const StoryBlokImageLoader: ImageLoader = ({ src, quality, width }) => {
  // Image width and height
  const widthAndHeight = `${width ?? 0}x0`;

  // Adding quality to the image
  const imageModifications = `filters:quality(${quality ?? 75})`;

  return transformImage(src, `${widthAndHeight}/${imageModifications}`);
};

const StoryblokImage: FC<ImageProps> = (
  props,
  // eslint-disable-next-line jsx-a11y/alt-text
// eslint-disable-next-line react/jsx-props-no-spreading
) => <Image {...props} loader={StoryBlokImageLoader} />;

export default StoryblokImage;
