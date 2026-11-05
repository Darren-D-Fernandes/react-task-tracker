package edu.example.tasktracker;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record TaskRequest (
    @NotBlank @Size(max = 88) String title,
    @Size(max = 30) String priority // because priority can be optional
){}
