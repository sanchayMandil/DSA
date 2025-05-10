function eatBanana(piles, h) {
    let l = 1; 
    let r = Math.max(...piles); 
    let res = r;

    function check(mid) {
        let count = 0;
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid); 
        }
        return count <= h; 
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (check(mid)) {
            res = mid; 
            r = mid - 1; 
        } else {
            l = mid + 1;
        }
    }
    return res;
}

let piles = [3, 6, 7, 11], h = 8;
console.log(eatBanana(piles, h)); // Output: 4