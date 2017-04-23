function main() {
    $.get("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/sand0848?api_key=RGAPI-1f6ceaad-7c6d-4b9d-8624-c25b883afa41", function(data){
  alert("Data: " + data);
});
}
