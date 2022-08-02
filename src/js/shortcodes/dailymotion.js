export default {
    id: "dailymotion",
    label: "Dailymotion",
    fields: [{
        name: "videoID",
        label: "Dailymotion Video ID",
        widget: "string"
    }, {
        name: "videoTitle",
        label: "Dailymotion Video Title",
        widget: "string"
    }],
    pattern: /{{< dailymotion ([a-zA-Z0-9]+) ([a-zA-Z0-9]+)>}}/,
    fromBlock: function (match) {
        return {
            videoID: match[1],
            videoTitle: match[2]
        };
    },
    toBlock: function (obj) {
        return `{{< dailymotion ${obj.videoID} ${obj.videoTitle} >}}`;
    },
    toPreview: function (obj) {
        return `<div class="c-embed fr-mb-8v"><iframe frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${obj.videoID}" title=${obj.videoTitle} width="100%" height="100%" allowfullscreen></iframe></div>`;
    },
}
