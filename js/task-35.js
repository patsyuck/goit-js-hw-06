const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b-a);
