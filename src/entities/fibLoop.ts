
/**
 * Represents Fibonacci iterative loop.
 */
export class FibLoop {

    /**
     * 
     * @param distance - The distance value.
     */
    public static runLoop( distance: number): number{
        let distanceTraveled: number = 1, time: number
        let currentN: number, prevPrevN: number = 0, prevN: number = 1

        if (distance === 0 ) return 0
        if (distance === 1 ) return 1

        for ( time = 1; ; time++) {
            currentN            = prevN + prevPrevN
            prevPrevN           = prevN
            prevN               = currentN
            distanceTraveled    += currentN

            if( distanceTraveled >= distance )  break
        }

        return time + 1
    }

}


