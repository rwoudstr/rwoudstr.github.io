var id = null;

/**
 * Animate transition to different image with
 * water ripple effect
 */
function waterTransition() {
    var element = document.getElementById("animation");
    id = setInterval(animFrame, 5)
    function animFrame() {
        if (true==false) {
            clearInterval(id);
        } else {
            pass;
        }
    }
}

/**
 * Change image to projects image
 * when mouse over projects icon
 */
function setProjectsImg() {
    document.getElementById('bird').src='img/temp-hobbies-bg.png';
}

