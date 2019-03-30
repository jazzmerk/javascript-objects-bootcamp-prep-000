var playlist=new Object ();
{[artistname]:[songtitle]};
playlist={johncoltrane:'Impressions'}

function updatePlaylist (playlist, artistname, songtitle)  {
Object.assign ({},playlist,{artistname:[playlist]}); 
}
