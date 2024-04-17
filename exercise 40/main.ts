
function make_album(artist_name: string, album_title:string, trackes?){
    let album:{artist: string, title: string, trackes?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(trackes !== undefined){
    album.trackes = trackes    
    }

    return album;
}

//calling three function with different values

let album1 = make_album("Kiran" , "Album title 1");

let album2 = make_album("Gohar" , "Album title 2");

let album3 = make_album("Hina" , "Album title 3" , 10);

// print values of our objects created my function

console.log(album1);
console.log(album2);
console.log(album3);

