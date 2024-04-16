/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    /*
        In practice there is variance (+- 2ms), but LC seems to expect that.
     */
    return new Promise(resolve => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

module.exports = sleep;