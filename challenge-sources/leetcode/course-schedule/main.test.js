const mainFunk = require("./main");

test('a', () => {
    numCourses = 2;
    prerequisites = [[1,0]];
    expect(mainFunk(numCourses, prerequisites)).toEqual(true);
});

test('b', () => {
    numCourses = 2;
    prerequisites = [[1,0],[0,1]];
    expect(mainFunk(numCourses, prerequisites)).toEqual(false);
});

test('c', () => {
    numCourses = 3;
    prerequisites = [[0,1],[1,2],[2,0]];
    expect(mainFunk(numCourses, prerequisites)).toEqual(false);
});