# Use cases

Use case name: ListenToAudiosAtADifferentSpeed

Participating actor instances: Initiated by: WhatsAppWebUser

Flow of events:
1. The WhatsAppWebUser activates the different playback speed function of its WhatsApp Web Extension;
2. The extension responds by highlighting the selected speed and setting the different speed for playback;
3. The WhatsAppWebUser listens to the audio at a different speed.

Entry condition: The WhatsAppWebUser is authenticated in WhatsApp Web.

Exit condition:	The WhatsAppWebUser listens to the audio at a different speed.

Quality requirements: The audio is played at the speed selected from a range that increments at .25 times until 2 times faster.

---

Use case name: AuthenticateAtWhatsAppWeb

Participating actor instances: Initiated by: WhatsAppWebUser

Flow of events	
1. The WhatsAppWebUser accesses the WhatsApp Web page;
2. The page responds by showing a QR Code for scanning and authentication;
3. The WhatsAppWebUser scans the QR Code with its cellphone camera and is authenticated.

Entry condition:	The WhatsAppWebUser has WhatsApp’s mobile app installed in its phone and registered to its number.

Exit condition:	The WhatsAppWebUser accesses the WhatsApp Web page.

# Problem statement

## The problem

Currently it is not possible to change the speed at which the audio pieces sent by contacts in WhatsApp are played. Users want to go through the audio piece faster because sometimes people recording them are making pauses or speaking slowly, which can lead to very long audio pieces with very few useful information.

## Scenarios

Lucas, a WhatsApp Web user, receives a sequence of 4 audio pieces. The shorter one is 3 minutes long and the contact that sent it speaks very slowly with a lot of pauses. Lucas doesn’t want to spend a lot of time listening to these pieces, so he selects the speed at which he wants the audio pieces to be played in a dropdown menu and listens to them faster.

He receives another audio piece but this time from a contact that already speaks very fast and doesn’t take any pauses during the recording, so Lucas selects the normal speed to play the audio pieces at the dropdown menu and listens to it.

## Requirements

The following functional requirements and non functional requirements have to be addressed in the project.

### Functional requirements
1. Change the audio playback speed: Users can select the playback speed they want the audio pieces to be played.
Non functional requirements
1. Usability: Users should be able to select the playback speed with a maximum of 3 clicks and should find the speed selector easily;
2. Target platform: The Chrome extension for use with WhatsApp Web has to be developed in Javascript and CSS.

### Constraints
1. The version control system must be Git;
2. The source code repository has to be hosted on GitHub.

### Target environment

The functionality should be demonstrated in the WhatsApp Web app running on Google Chrome.

### Deliverables
- Requirements analysis document;
- System design document;
- Source code under version control.

### Acceptance criteria

The Chrome extension has to demonstrate the following functionality: Given the user is already logged into WhatsApp Web running on Google Chrome, when the user clicks on the dropdown menu and selects the playback speed, then the audio pieces the user has received have to be played at the speed the user has just selected.

# Scenarios

Scenario name: Slow Speaker

Participating actor instances: Lucas, Elisa : WhatsApp Web user

Flow of events:
1. Lucas receives a sequence of 4 long and slow speaking audio pieces from Elisa;
2. Lucas selects a faster audio playback speed so he can listen to the audio pieces in less time than normal;
3. Lucas listens to the 4 audio pieces in half the time.

---

Scenario name: Fast Speaker

Participating actor instances: Lucas, Ana : WhatsApp Web user

Flow of events:
1. Lucas receives a sequence of 2 short and very fast speaking audio pieces from Ana;
2. Lucas selects the normal audio playback speed so he can listen to the audio pieces properly;
3. Lucas listens to the 2 audio pieces in normal time.
