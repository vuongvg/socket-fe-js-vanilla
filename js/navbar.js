const handleClick = (page) => {
   const urlSearchParams = new URLSearchParams(window.location.search);
   const params = Object.fromEntries(urlSearchParams.entries());
};

// const route=(event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     console.log(` event.target.href`, event.target.href)
//     handleLocation();
//     }

//     const routes = {
//         404: "../page/404.html",
//         "/": "../page/index.html",
//         "/auth": "../page/auth.html",
//         "/main": "../page/main.html",
//         "/joinroom": "../page/createRoom.html",
//     };

//     const handleLocation = async () => {
//         const path = window.location.pathname;
//         const route = routes[path] || routes[404];
//         const html = await fetch(route).then((data) => data.text());
//         document.getElementById("main-page").innerHTML = html;
//     };

//     window.onpopstate = handleLocation;
//     window.route = route;

//     handleLocation();
