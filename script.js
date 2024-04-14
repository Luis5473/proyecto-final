const redirect = (id) => {
  window.location.href = `../public/Album/Album.html?album=${id}`;
};

const divAlbums = document.querySelector(".gasolina");

const renderAlbums = (album) => {
  if (!album || !album.portada) {
    console.error('Album or album cover not found');
    return;
  }

  const div = document.createElement("div");
  const imgAlbum = document.createElement("img");
  const iconTrash = document.createElement("i");

  div.classList.add("gasolina");
  console.log(album);

  const urlPortada = album.portada;
  imgAlbum.src = urlPortada;
  div.appendChild(imgAlbum);
  div.appendChild(iconTrash);
  divAlbums.appendChild(div);
};