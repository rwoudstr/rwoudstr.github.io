//import * as THREE from 'three';

/**
 * Change indicated old image to supplied new image
 * when mouse over an icon
 * 
 * img: image to change
 */
function setProjectsImg(obj, newImg) {
    obj.src=newImg;
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