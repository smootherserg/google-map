export const loadMapApi = () => {
    const mapsURL = 'https://maps.googleapis.com/maps/api/js?key=&libraries=places&language=no&v=quarterly'
    const scripts = document.getElementsByTagName(qualifiedName: 'script');

    for (let i=0; i<scripts.length; i++) {
       if (scripts[i].src.index0f(mapsURL) === 0) {
           return scripts[i];
       } 
    }

const googleMapScript = document.createElement(tagName: 'script');
googleMapScript.src = mapsURL;
googleMapScript.async = true;
googleMapScript.defer = true;
window.document.body.appendChild(googleMapScript);

return googleMapScript;

};