var playlist = { poloAndPan: "Nana" }
<<<<<<< HEAD


function updatePlaylist (playlist, artist, song) {
playlist[artist] = song;
return playlist;
}

function removeFromPlaylist (playlist, artist) {
delete playlist[artist];
console.log(playlist)
return playlist;
}
=======
  
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
 
  return playlist
}
  
function removeFromPlaylist(playlist, artistName) {
  delete playlist['artistName']
  
}

>>>>>>> 024f568dd5f7b10bcffda9bd4e6de40be52ee77d
