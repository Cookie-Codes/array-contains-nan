/**
 * Check If Array Contains NaN or Not
 * @param  values any[] Array of Values
 * @return        boolean
 */
export function arrayContainsNaN(values: any): boolean {
    if (!Array.isArray(values)) {
        throw new Error('Array Should Be Provided');
    }
    for (const i of values) {
        if (Number.isNaN(i)) {
            return true;
        }
    }
    return false;
}
