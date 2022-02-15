"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformImage = void 0;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const transformImage = (src, widthAndHeight) => {
    if (!src || !widthAndHeight)
        return '';
    const imageService = 'https://img2.storyblok.com/';
    const path = src
        // removed domain which don't support image transformation
        .replace('a.storyblok.com', '')
        // remove protocol via regex
        .replace(/(^\w+:|^)\/\//, '');
    return imageService + widthAndHeight + path;
};
exports.transformImage = transformImage;
const StoryBlokImageLoader = ({ src, quality, width }) => {
    // Image width and height
    const widthAndHeight = `${width !== null && width !== void 0 ? width : 0}x0`;
    // Adding quality to the image
    const imageModifications = `filters:quality(${quality !== null && quality !== void 0 ? quality : 75})`;
    return (0, exports.transformImage)(src, `${widthAndHeight}/${imageModifications}`);
};
const StoryblokImage = (props) => react_1.default.createElement(image_1.default, Object.assign({}, props, { loader: StoryBlokImageLoader }));
exports.default = StoryblokImage;
