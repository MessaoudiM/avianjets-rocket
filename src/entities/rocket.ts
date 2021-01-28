#! /usr/bin/env node

import {FibLoop}        from "./fibLoop"
import {UnitConverter}  from "./unitConverter"

/** Represents a rocket. */
export class Rocket {
    
    /**
     * 
     * @param distance - The distance value.
     * @param unit - The unit value for the distance. (optional) default = "km"
     */
    public static getTravelTime( distance: number, unit: string = 'km' ): number {
        return FibLoop.runLoop( UnitConverter.distance( distance, unit ) )
    }

}
