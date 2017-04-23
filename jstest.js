var summonerInfo;

function preload() {
    summonerInfo = loadJSON("summonerinfo.json");
}

function main() {
    alert(summonerInfo.name + summonerInfo.summonerLevel);
}
