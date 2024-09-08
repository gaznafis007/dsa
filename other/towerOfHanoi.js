const towerOfHanoi = (n, from, to, using) =>{
    if(n === 1){
        console.log(`Moving disk ${1} from ${from} rod to ${to} rod`)
        return ;
    }
    towerOfHanoi((n-1), from, to, using)
    console.log(`Moving disk ${n} from ${from} rod to ${to} rod using ${using} rod`)
    towerOfHanoi(n-1, using, to, from)
}

towerOfHanoi(2, 'A', 'B', 'C')