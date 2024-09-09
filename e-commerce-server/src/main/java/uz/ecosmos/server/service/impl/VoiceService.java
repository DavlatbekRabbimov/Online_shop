package uz.ecosmos.server.service.impl;

import com.vonage.client.VonageClient;
import com.vonage.client.voice.Call;
import com.vonage.client.voice.CallEvent;
import org.springframework.stereotype.Service;

@Service
public class VoiceService {
    private final VonageClient vonageClient;

    public VoiceService(VonageClient vonageClient) {
        this.vonageClient = vonageClient;
    }

    public void makeCall(String toNumber, String fromNumber, String answerUrl) throws Exception {
        CallEvent event = vonageClient.getVoiceClient().createCall(new Call(toNumber, fromNumber, answerUrl));
        System.out.println("Call event: " + event.getUuid());
    }

    public void handleIncomingCall(String fromNumber, String toNumber, String conversationUuid) throws Exception {
        System.out.println("Incoming call from: " + fromNumber + " to: " + toNumber + " with conversation UUID: " + conversationUuid);
    }
}