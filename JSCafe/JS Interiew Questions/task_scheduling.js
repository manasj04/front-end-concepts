const data = [
    { "id" : "a", "dependencies" : ["b", "c"]},
    { "id" : "b", "dependencies" : ["d"]},
    { "id" : "c", "dependencies" : ["e"]},
    { "id" : "d", "dependencies" : []},
    { "id" : "e", "dependencies" : ["c"]},
    { "id" : "f", "dependencies" : []},
];

const removeTaskFromDependencies = (id, schedules) => {
    schedules.forEach(element => {
        const index = element.dependencies.indexOf(id);
        if(index!==-1){
            element.dependencies.splice(index, 1);
        }
    });
}

const executeTasks = (schedules) => {
    const totalTasks = schedules.length;
    let tasksExecuted = 0;
    let i = 0;
    while(tasksExecuted<totalTasks){
        const currTask = schedules[i];
        if(!currTask.dependencies.length && !currTask.execute){
            console.log(currTask.id);
            currTask.execute = true;
            tasksExecuted += 1;
            removeTaskFromDependencies(currTask.id, schedules);
        } else if(!currTask.visited){
            currTask.visited = 1;
        } else if(currTask.visited > totalTasks){
            console.log("Cycle detected");
            break;
        } else {
            currTask.visited += 1;
        }

        i = (i+1)%totalTasks;
    }
};

executeTasks(data);
