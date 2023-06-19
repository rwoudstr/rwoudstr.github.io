//import * as THREE from 'three';

/**
 * Change supplied image to ____ image
 * when mouse over an icon
 * 
 * img: image to change
 */
function setProjectsImg(img, source) {
    //img.src="./img/temp-about-bg.png";
    img.src=source;
}

/**
 * Change supplied image to ____ image
 * when mouse out 
 * 
 * img: image to change
 */
function revertImage(img) {
    img.src="./img/temp.svg";
}
