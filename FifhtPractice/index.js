const { KeyObject } = require("crypto");

/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var tagsObj = new Object();
    var tagList = [];

    for(var i=0;i<hashtags.length;i++){
        var hashtag = hashtags[i].toLowerCase();

        if(!tagsObj.hasOwnProperty(hashtag)){
            tagsObj[hashtag]=true;
            tagList.push(hashtag);
        }
    }

    console.log(Object.keys(tagsObj));
    return tagList.join(', ');
};
