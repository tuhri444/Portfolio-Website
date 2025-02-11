document.addEventListener('DOMContentLoaded', () => {
  RedirectWithLink();
});

const RedirectWithLink = () => {
    const urlParams = new URLSearchParams(window.location.search);
    var redirection = urlParams.get('redirect');
    
    if (redirection == null){
        var linkToAR = "https://192.168.1.201:8000/public/index.html?redirect=";
        const path = window.location.pathname;
        const index = path.indexOf('/');
        var pathAddition = path.substring(index + 1);
        const indexDot = path.indexOf('.');
        pathAddition = pathAddition.slice(0, indexDot-1);
        console.log(pathAddition);
        if (index !== -1) {
            linkToAR += pathAddition;
            if (pathAddition.includes("qrcodespel")){
                linkToAR += "&boardgame=true";
            }
            window.location.href = linkToAR;
        }
        console.error('Couldn\'t get path from URL');
    }
    else{
        return;
    }
}
