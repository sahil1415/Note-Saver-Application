package com.sahil.PasteBackend.Model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Paste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ✅ Auto-generate ID
    private int id;
    private String title;
    private String content;
    private LocalDateTime createdAt;


    @PrePersist
    @PreUpdate
    protected void onCreate() {
        this.createdAt = LocalDateTime.now(); // ✅ Set createdAt before saving
    }

//    protected void onUpdate() {
//        this.createdAt = LocalDateTime.now(); // ✅ Set UpdatedAt before saving
//    }
}
