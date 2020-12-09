const toFixed = (num: number, digits: number) => {
    if (num) return Number(num.toFixed(digits));
    else return 0;
};

export default toFixed;
