class Condition {
     constructor(id, requirements, nextTask, assignedTasks = null) {
          this.id = id;
          this.requirements = requirements;
          this.nextTask = nextTask;
          this.assignedTasks = assignedTasks;
     }
}

export default Condition;
