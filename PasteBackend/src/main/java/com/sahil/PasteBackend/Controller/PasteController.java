package com.sahil.PasteBackend.Controller;


import com.sahil.PasteBackend.Model.Paste;
import com.sahil.PasteBackend.Service.PasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pasteApi")
@CrossOrigin(origins = "http://localhost:5173")
public class PasteController {


    @Autowired
    private PasteService pasteService;

    @PostMapping
    public boolean createPaste(@RequestBody Paste paste){
        pasteService.createAPaste(paste);
        return true;
    }

    @GetMapping
    public List<Paste> getPastes(){
        return pasteService.getAllPaste();
    }

    @DeleteMapping
    public boolean deleteAll(){
        pasteService.deleteAll();
        return true;
    }

    @GetMapping("/id/{myId}")
    public Optional<Paste> getPaste(@PathVariable int myId){
        return pasteService.getPaste(myId);
    }

    @DeleteMapping("/id/{myId}")
    public boolean deletePaste(@PathVariable int myId){
        pasteService.deletePaste(myId);
        return true;
    }

    @PutMapping("/id/{myId}")
    public boolean updatePaste(@PathVariable int myId, @RequestBody Paste paste){
        pasteService.updatePaste(myId, paste);
        return true;
    }
}
