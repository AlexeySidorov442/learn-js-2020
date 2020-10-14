/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var splitTweet = tweet.split(' ');
    var arr=[];
    for(var i=0;i<splitTweet.length;i++){
        if(splitTweet[i].startsWith('#'))
        arr.push(splitTweet[i].slice(1));
    }
    return arr;
};
