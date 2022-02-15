# Storyblok next image
A simple wrapper around next/image which use the same props but change the loader to a custom loader for storyblok

## How to use

Import the package
```javascript
import StoryblokImage from 'storyblok-next-image'
```

Then use is like a normal next/imafge
```
  <Image
    src={src}
    alt={alt}
    width={400}
    height={400}
  />
```

As this package is just a wrapper around next/image where only the loader functions is changed does all of the normal props for Next/image work EXCEPT loader.
For more information of props and how to use next/image: https://nextjs.org/docs/api-reference/next/image#required-props

This npm package also exports the loader function via
```javascript
import {StoryBlokImageLoader} from 'storyblok-next-image'
```