//https://leetcode.com/problems/course-schedule/description/

//There are faster solutions than this that use graphs. This is a good example:
//https://leetcode.com/problems/course-schedule/solutions/5746772/simple-solution-with-diagrams-in-video-javascript-c-java-python/



function mainFunk(numCourses, prerequisites) {
    aggregatedPrereqs = Array(numCourses);
    for(i=0; i < numCourses; i++) {
        aggregatedPrereqs[i] = [];
    }

    for(i=0; i < prerequisites.length; i++) {
        aggregatedPrereqs[prerequisites[i][1]].push(prerequisites[i][0])
    }

    let queue = [];
    for(i=0; i < numCourses; i++) {
        if(aggregatedPrereqs[i].length === 0) {
            queue.push(i);
        }
    }

    while( queue.length > 0) {
        let course = queue.shift();
        for(i = 0; i < numCourses; i++) {
            //If this course ALREADY has no prereqs, it has already been accounted for.
            if (aggregatedPrereqs[i].length === 0) {
                continue;
            }

            let prereqIndex = aggregatedPrereqs[i].indexOf(course);

            if( prereqIndex !== -1) {
                aggregatedPrereqs[i].splice(prereqIndex, 1);
            }

            if (aggregatedPrereqs[i].length === 0) {
                queue.push(i);
            }
        }
    }

    for(i=0; i < numCourses; i++) {
        if(aggregatedPrereqs[i].length > 0) {
            return false;
        }
    }

    return true;
}

module.exports = mainFunk;

//(someone else's) more elegant solution, with better runtime:
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map();
    let queue = [];
    let order = [];
    const indegree = Array(numCourses).fill(0);

    for (let [v, e] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        indegree[e]++;
    }

    for (let i = 0; i < indegree.length; i++) {
        indegree[i] === 0 && queue.push(i);
    }

    while (queue.length) {
        let v = queue.shift();
        if (graph.has(v)) {
            for (let e of graph.get(v)) {
                indegree[e]--;
                if (indegree[e] === 0) queue.push(e);
            }
        }
        order.push(v);
    }


    return numCourses === order.length;
};