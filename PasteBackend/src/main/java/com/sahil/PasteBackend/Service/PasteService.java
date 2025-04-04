package com.sahil.PasteBackend.Service;

import com.sahil.PasteBackend.Model.Paste;
import com.sahil.PasteBackend.Repository.PasteRepo;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Data
public class PasteService {

    @Autowired
    private PasteRepo pasteRepo;

    public void createAPaste(Paste paste){
        pasteRepo.save(paste);
    }

    public List<Paste> getAllPaste(){
        return pasteRepo.findAll();
    }

    public Optional<Paste> getPaste(int id){
        return pasteRepo.findById(id);
    }
    public void deletePaste(int id){
        pasteRepo.deleteById(id);
    }

    public void updatePaste(int id, Paste paste){
        paste.setId(id);
        pasteRepo.save(paste);
    }

    public void deleteAll(){
        pasteRepo.deleteAll();
    }

}
