package edu.example.tasktracker;

import java.util.List;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin (
    origins = "http://localhost:5173",
    methods = {RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT, RequestMethod.DELETE},
    allowedHeaders = "Content-Type"
)

@RestController 
@RequestMapping ("/api/tasks")
public class TaskController {
    
    private final TaskStore store;

    public TaskController(TaskStore store){
        this.store = store;
    }

    //Read all tasks
    @GetMapping 
    public List<Task> getTasks(){
        return store.findAll();
    }

    //create a task
    @PostMapping 
    public ResponseEntity<Task> createTask(@Valid @RequestBody TaskRequest request){
        Task savedTask = store.add(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }


    //toggle completed state
    @PutMapping  ("/{id}")
    public ResponseEntity<Task> toggleTask(@PathVariable long id){
        return store.findById(id)
            .map(task -> {

                Task updatedTask = new Task(task.id(), task.title(), !task.completed(), task.priority());
                store.update(updatedTask);
                return ResponseEntity.ok(updatedTask);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    //delete a task
    @DeleteMapping ("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable long id){
        if (store.existsById(id)){
            store.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

