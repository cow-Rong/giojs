/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * shader material's parameter for splin tooltips
 */

function TooltipsShader ( controller ) {

    var tooltipsCanvas, tooltipsTexture;
    var temp = createTooltipsParams();

    function createTooltipsParams () {

        tooltipsCanvas = document.createElement( 'canvas' );
        tooltipsCanvas.width = 128;
        tooltipsCanvas.height = 64;

        tooltipsTexture = new THREE.Texture( tooltipsCanvas );
        tooltipsTexture.needsUpdate = true;

        return null;
    }

    return {

        tooltipsCanvas: tooltipsCanvas,

        tooltipsTexture: tooltipsTexture,

    }
}

export { TooltipsShader }