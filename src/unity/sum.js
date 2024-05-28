const classNames = (...str) => {
    return str.filter((item)=> item !== undefined).join(' ');
};
module.exports = classNames;
