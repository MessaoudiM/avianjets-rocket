
import { Rocket }           from "./rocket"

/**
 * Parser for the CLI
 */
export class RocketCliParser{
    
    /**
     * Outputs traveltime to the console.
     * @param distance - The distance value before validation.
     */
    public static logTravelTime( distance: string ): void {
        console.log( this.constructMessage( distance) );
    }

    /**
     *  Validate distance value and get the corresponding message.
     * @param distance - The distance value before validation.
     */
    private static constructMessage( distance: string ): string {
        switch ( true ) {
            case typeof distance === 'undefined':
                return this.getErrorMessage( 'empty')
           
            case ( isNaN( distance as any ) ):
                return this.getErrorMessage( 'not a number')
        
            default:
                return this.getSuccesMessage( parseInt( distance ) );
        }
    }

    /**
     * Get the error message.
     * @param msg - The error nessage.
     */
    private static getErrorMessage( msg: string ): string {
        msg =  "Distance argument is " + msg + " \n"
        msg += "Please use the following syntax: node rocket [distance in km] \n"
        msg += "For instance: node rocket 384400"
        return msg
    }

    /**
     * Get the rockets time traveled message.
     * @param distance - The distance value after validation.
     */
    private static getSuccesMessage( distance: number ): string {
        return 'time traveled:           ' + Rocket.getTravelTime( distance ) + ' seconds'
    }

}
