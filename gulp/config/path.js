import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder   = "./src";

export const path = {
    build: {
        js       : `${buildFolder}/js/`,
        css      : `${buildFolder}/css/`,
        html     : `${buildFolder}/`,
        images   : `${buildFolder}/img/`,
        fonts    : `${buildFolder}/fonts/`,
        favicons : `${buildFolder}/favicons/`,
        svg     : `${buildFolder}/svg/`,
        // videos  : `${buildFolder}/videos/`,
    },
    src: {
        js      : `${srcFolder}/scripts/*.js`,
        html    : `${srcFolder}/**/*.html`,
        scss    : `${srcFolder}/styles/*.scss`,
        favicons: `${srcFolder}/assets/favicons/*.*`,
        fonts   : `${srcFolder}/assets/fonts/**/*.{woff2,woff,ttf,svg,eot}`,
        images  : `${srcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp,avif}`,
        svg     : `${srcFolder}/assets/svg/*.svg`,
        aliases : `${srcFolder}/**/*.{js,scss,html}`,
        // videos  : `${srcFolder}/blocks/**/*.{mp4,webm}`,
    },
    watch: {
        js       : `${srcFolder}/scripts/**/*.js`,
        html     : `${srcFolder}/**/*.html`,
        scss     : `${srcFolder}/styles/**/*.scss`,
        favicons : `${srcFolder}/assets/favicons/*.*`,
        fonts    : `${srcFolder}/assets/fonts/**/*.{woff2,woff,ttf,svg,eot}`,
        images  : `${srcFolder}/assets/img/*.{jpg,jpeg,png,gif,webp,avif}`,
        svg     : `${srcFolder}/assets/svg/*.svg`,
        // videos  : `${srcFolder}/blocks/**/*.{mp4,webm}`,
    },
    clean      : buildFolder,
    buildFolder: buildFolder,
    srcFolder  : srcFolder,
    rootFolder : rootFolder,
    ftp        : "www",
    domain     : `PASTE YOUR DOMAIN`
}