package edu.example.tasktracker;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

//Data resets when the application restarts 
@Service 
public class TaskStore {
    private final List<Task> tasks = new ArrayList<>();
    private long nextId = 1;

    //Constructor for the defualt values
    public TaskStore(){
        tasks.add(new Task(nextId++, "Read the Module 2 lesson", false, "High"));
        tasks.add(new Task(nextId++, "Create a React component",true,"Medium"));
        tasks.add(new Task(nextId++, "Practice events", false,"Low"));
    }

    //Read all tasks
    public synchronized List<Task> findAll(){
        return List.copyOf(tasks);
    }

    //Create a new task 
    public synchronized Task add(TaskRequest request){
        String priotiry = (request.priority() == null || request.priority().trim().isEmpty()) ? "Medium" : request.priority().trim();
        Task task = new Task(nextId++, request.title().trim(), false, priotiry);
        tasks.add(task);
        return task;
    }

    //find a task by id
    public synchronized Optional<Task> findById(long id){
        return tasks.stream()
                    .filter(t -> t.id() == id)
                    .findFirst();
    }

    //update an immutable record
    public synchronized void update(Task updatedTask){
        for(int i = 0; i < tasks.size(); i++){
            if(tasks.get(i).id() == updatedTask.id()){
                tasks.set(i, updatedTask);
                break;
            }
        }
    }

    //check if tasks exists for safty
    public synchronized boolean existsById(long id){
        return tasks.stream().anyMatch(t -> t.id() == id);
    }

    //deleting a task
    public synchronized void deleteById(long id){
        tasks.removeIf(t -> t.id() == id);
    }

}
