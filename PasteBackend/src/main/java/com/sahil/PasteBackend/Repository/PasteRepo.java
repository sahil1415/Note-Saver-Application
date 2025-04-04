package com.sahil.PasteBackend.Repository;

import com.sahil.PasteBackend.Model.Paste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface PasteRepo extends JpaRepository<Paste, Integer>{
}
