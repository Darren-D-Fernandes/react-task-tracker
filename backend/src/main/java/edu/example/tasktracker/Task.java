package edu.example.tasktracker;

//record holds data and spring converts it to JSON
public record Task (long id, String title, boolean completed, String priority) {}
    

