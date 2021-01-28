
/**
 * Represents a converter of units. Currently does only "km" to "meter"
 */
export class UnitConverter {
    
    /**
     * 
     * @param distance - The distance value.
     * @param unit - - The unit value for the distance.
     */
    static distance( distance: number, unit: string ): number {
        switch ( unit ) {
            case 'km':
                return distance * 1000
                break
            
            default:
                return distance
                break
        }
    }

}


