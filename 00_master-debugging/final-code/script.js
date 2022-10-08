// function a() {
//     const x = 5
//     console.log(origin);

//     function aChild() {
//         const z = 7
//         console.log(x);
//         function aGrandChild() {
//             const q = 8
//             console.log(x, z, q);
//         }
//         aGrandChild() 
//     }
//     aChild()
// }

// function b() {
//     const y = 5
//     console.log(origin);
// }

// a()
// b()

// function recursive() {
//     console.log('hii');
//     recursive()
// }
// recursive()

document.body.addEventListener("click", function () {
    this.firstChild.remove();
});