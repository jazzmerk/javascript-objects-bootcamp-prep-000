var playlist ={[artistname]:[songtitle]};
function updatePlaylist (playlist, artistname, songtitle)  {
Object.assign ({},playlist,{artistname:[playlist]}); 
}
