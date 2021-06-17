# ProjectAssistHomework

Fisierele pentru tema acasa ce trebuiesc rulate din folder-ul ContactForm sunt: 
   
    globalsqa-ContactForm-NameAndChooseFile.js
    globalsqa-ContactForm-Email.js
    globalsqa-ContactForm-Website.js
    globalsqa-ContactForm-ExperienceExpertiseEducation.js
    globalsqa-ContactForm-AlertCommentSubmit.js

La campul email am intampinat probleme in efectuarea testelor din cauza atributului "type=email" deoarece nu pot testa cu cypress daca scriu doar spatiu ' ', pentru ca va returna mereu valoare 0 ''.
Am schimbat atributul "type=email" cu "type=text" sau "type=comment" si am observat ca face verificarile campului textbox dupa atributul type


Teme optionale

Interaction
    globalsqa-sortable.js



Widgets
    globalsqa-spinner.js

        Nu inteleg de ce 1 din n teste cu nimic cod modificat, functioneaza, restul esueaza

        Eu presupun ca din cauza ca este rulat in 'iframe', si doua pagini de 'iframe' diferite folosesc acelasi input cu acelasi nume si aceeasi clasa, se intampla sa esueze. 

    globalsqa-tooltip.js

