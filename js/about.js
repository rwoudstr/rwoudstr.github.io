//import * as THREE from 'three';

/**
 * Change supplied image to ____ image
 * when mouse over an icon
 * 
 * img: image to change
 */
function setProjectsImg(img) {
    img.src="./img/plane.svg";
    //document.getElementById(img).src='/img/plane.svg';
}

/**
 * Change supplied image to ____ image
 * when mouse out 
 * 
 * img: image to change
 */
function revertImage(img) {
    img.src="./img/bird.svg";
}
