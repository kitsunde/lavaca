var isArray = require('../lang/isArray');
    /*
     * Helper function to flatten to a destination array.
     * Used to remove the need to create intermediate arrays while flattening.
     */
    function flattenTo(arr, result, level) {
        if (level === 0) {
            result.push.apply(result, arr);
            return;
        }

        var value,
            i = -1,
            n = arr.length;
        while (++i < n) {
            value = arr[i];
            if (isArray(value)) {
                flattenTo(value, result, level - 1);
            } else {
                result.push(value);
            }
        }
        return result;
    }

    /**
     * Recursively flattens an array.
     * A new array containing all the elements is returned.
     * If `shallow` is true, it will only flatten one level.
     */
    function flatten(arr, shallow) {
        return flattenTo(arr, [], shallow ? 1 : -1);
    }
    module.exports = flatten;


