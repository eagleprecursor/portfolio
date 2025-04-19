
import React from 'react';

/**
 * Calculate the position of the medal given a
 * desired size for the image
 */
function getMedalPos({ left, top, width, height}, size) {

    const [scaleW, scaleH] = [width/size, height/size];
    return "-" + (left/scaleW) + "px -" + (top/scaleH) + "px";
}

/**
 * Calculate the size of the medal sheet background given
 * a desired size for each medal
 */
function getBackgroundSize({ sheetWidth = 2048, sheetHeight = 1024, width, height }, size) {

    const [scaleW, scaleH] = [(sheetWidth / width) * size, (sheetHeight / height) * size];

    return scaleW + "px " + scaleH + "px";
}

/**
 * Medal image for Halo 5
 * 
 * Displays a medal using the model metadata. The sprite sheet is
 * scaled to the provided size
 * 
 * A tooltip of the description is displayed on hover
 */
export default function MedalImage({ medals, name, noTitle = false, size = 37 }) {
    
    if (medals)
    {
        const medal = medals[name];

        if (medal)
        {
            const title = !noTitle && { 
                title: medal.short_desc
            }

            return (
                <span class="medalsheet-halo5" {...title} style={{ 
                    width: size + "px",
                    height: size + "px",
                    backgroundSize: getBackgroundSize(medal.sprite, size),
                    backgroundPosition: getMedalPos(medal.sprite, size) 
                }}></span>
            );
        }
    }

    return null;
}