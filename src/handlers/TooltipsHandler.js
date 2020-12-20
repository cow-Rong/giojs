/**
 * @author syt123450 / https://github.com/syt123450
 */

import { ObjectUtils } from "../utils/ObjectUtils.js";

/**
 * This handlers handle all task related to the spline tooltips.
 */

function TooltipsHandler ( controller ) {

    function create () {

        controller.tooltips = ObjectUtils.createTooltips( controller );
        controller.tooltipsShader = controller.tooltips.tooltipsShader;
        controller.scene.add( controller.tooltips );

    }

    function remove () {

        controller.scene.remove( controller.tooltips );
        controller.tooltips =  null;

    }

    function showTooltips ( msg ) {

        var ctx = controller.tooltipsShader.tooltipsCanvas.getContext( '2d' );

        const msg1 = '北京->上海';
        const msg2 = '攻击次数：45';

        const metrics1 = ctx.measureText('北京->上海');
        const metrics2 = ctx.measureText('攻击次数：45');
        const width = metrics1.width > metrics2.width ? metrics1.width : metrics2.width;
        const height = width/(msg1.length>msg2.length?msg1.length:msg2.length) * 0.9;

        ctx.fillStyle = "rgba(255,255,255,0.95)"; // black border
        ctx.fillRect(0, 0, width, 2*height);
        ctx.fillStyle = "rgba(255,255,255,0.65)"; // white filler
        ctx.fillRect(0, 0, width, 2*height);
        ctx.fillStyle = "rgba(0,0,0,1)"; // text color
        ctx.fillText('北京->上海', 0, height);
        ctx.fillText('攻击次数：45', 0, 2*height);

        controller.tooltips.position.copy(controller.overintersection.point);
        controller.tooltips.scale.set(60, 60, 1);

        controller.tooltipsShader.tooltipsTexture.needsUpdate = true;

    }

    function update () {

        controller.scene.remove(controller.tooltips);
        controller.tooltips = ObjectUtils.createSplineTooltips( controller );

        if(controller.tooltips!==null){

            controller.tooltipsShader = controller.tooltips.tooltipsShader;
            showTooltips( controller.overintersection.object.geometry.name );
            controller.scene.add( controller.tooltips );

        }

    }

    return {
        
        create: create,

        remove: remove,

        update: update,

        showTooltips: showTooltips,

    }

}

export { TooltipsHandler }