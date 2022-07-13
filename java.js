function trad(palabra) {
    let a = palabra.toLowerCase()
    let b = a
    b = b.replace(/[a]/gi,'apa')
    b = b.replace(/[e]/gi,'epe')
    b = b.replace(/[i]/gi,'ipi')
    b = b.replace(/[o]/gi,'opo')
    b = b.replace(/[u]/gi,'upu')
    document.getElementById("traductor").innerHTML = b;
    
}
function copy() {
    b.select();
    b.setSelectionRange(0, 99999);
    document
}