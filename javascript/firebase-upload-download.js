function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child(name).put(file, metadata); task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
            alert('image uploaded successfully');
            //document.querySelector("#firebase-image").src = url;
        })
        .catch(console.error);
}
const errorMsgElement = document.querySelector('span#errorMsg');



function downloadViaUrl() {
    const storageRef = firebase.storage().ref();
  
    // [START storage_download_via_url]
    storageRef.child('1702043399318-image.jpg').getDownloadURL()
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
      
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      
        // Or inserted into an <img> element
        var img = document.getElementById('firebase-image');
        img.setAttribute('src', url);
      })
      .catch((error) => {
        // Handle any errors
      });
    // [END storage_download_via_url]
  }