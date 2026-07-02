function sam(){
    var a = 10;
    let b = 20;
    const c = 30;
    function mav(){
        console.log(a);
        console.log(b);
    }
    return mav;  // isme function return hoga , execute nhi hoga

    // return mav(); // isme execute ho rha h
}

sam();