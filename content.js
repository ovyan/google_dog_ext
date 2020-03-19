function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
async function getPhotos(images) {
    let corgi_url = "https://dog.ceo/api/breed/corgi/cardigan/images/random";
    let west_url = "https://dog.ceo/api/breed/terrier/westhighland/images/random";
    for (var i = 0; i < images.length; i++) {
        let response = (Math.random() > 0.5) ? await fetch(corgi_url) : await fetch(west_url);
        let data = await response.json();
        let url = data.message
        images[i].setAttribute("src", url);
    }
}


console.log("start");
wait(3000); // wait 3 seconds for images to load up
images = document.getElementsByTagName("img");
getPhotos(images).finally(console.log("finally"));
