package uz.ecosmos.server.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uz.ecosmos.server.service.impl.VoiceService;

@CrossOrigin(origins = "http://localhost:3001")
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class VoiceController {
    private final VoiceService voiceService;


    @PostMapping("/call")
    public ResponseEntity<String> makeCall(@RequestParam String toNumber) {
        try {
            voiceService.makeCall(toNumber, "9989000000", "url");
            return ResponseEntity.ok("Call made successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error making call");
        }
    }

    @PostMapping("/incoming-call")
    public ResponseEntity<String> handleIncomingCall(@RequestParam String fromNumber, @RequestParam String toNumber, @RequestParam String conversationUuid) {
        try {
            voiceService.handleIncomingCall(fromNumber, toNumber, conversationUuid);
            return ResponseEntity.ok("Incoming call handled successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error handling incoming call");
        }
    }
}
