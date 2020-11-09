const formatPtBr = (num: number) => {
    return Intl.NumberFormat('pt-BR').format(num);
};

export default formatPtBr;
