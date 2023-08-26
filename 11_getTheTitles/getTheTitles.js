const getTheTitles = function(n) {
    titles = []
    for (let i = 0; i < n.length; i++) {
        titles[i] = n[i].title;
    } 
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
