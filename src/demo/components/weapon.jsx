import React from 'react';

/**
 * Weapon image for Halo 5
 * 
 * Displays a weapon using the name if the metadata has been
 * retrieved, otherwise will display nothing.
 * 
 * A tooltip of the description is displayed on hover
 */
export default function WeaponImage({ weapons, name }) {

    if (weapons)
    {
        const weapon = weapons[name];

        if (weapon)
        {
            return (
                <span class="weapon-halo5">
                    <img src={weapon.image} />
                </span>
            );
        }       
    }

    return null;
}