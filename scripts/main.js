let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://d33wubrfki0l68.cloudfront.net/06185f059f69055733688518b798a0feb4c7f160/9f07a/images/product-identity-assets/firefox.png')
    {
        myImage.setAttribute('src', 'https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/MF-Doom-e1609762992943-755x619.jpg')
    }
    else
    {
        myImage.setAttribute('src', 'https://d33wubrfki0l68.cloudfront.net/06185f059f69055733688518b798a0feb4c7f160/9f07a/images/product-identity-assets/firefox.png')
    }
}