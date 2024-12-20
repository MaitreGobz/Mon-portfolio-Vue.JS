<template>
    <section id="contactForm">

        <!-- Contact Form -->
         <section class="contact-form">
            <h1 class="contact-title">N'hésitez pas à me contatcer!</h1>
                <hr>
            <form @submit.prevent="sendEmail">                               
                    <div class="form-group">
                        <label for="firstName">Nom :</label>
                        <input v-model="form.firstName" id="firstName" type="text" placeholder="Votre nom" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Prénom :</label>
                        <input v-model="form.lastName" id="lastName" type="text" placeholder="Votre prénom" required>
                    </div>
                    <div class="form-group">                           
                        <label for="email">Adresse e-mail :</label>
                        <input v-model="form.email" id="email" type="email" placeholder="Votre adresse e-mail" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Objet :</label>
                        <input v-model="form.subject" id="subject" type="text" placeholder="L'objet de votre message" required>                             
                    </div>
                    <div class="form-group">
                        <label for="message">Message :</label>
                        <textarea v-model="form.message" id="message" placeholder="Votre message..." resquired></textarea>
                    </div>
                <div class="send-btn">
                        <button type="submit" class="send-btn">Envoyer</button>                   
                </div>
                <!-- Response of success of sent -->
                <div v-if="responseMessage" class="response-message">
                    {{ responseMessage }}
                </div>
            </form>
        </section>

    </section>
</template>

<script setup>

import { reactive, ref } from 'vue';

// Reactive object for the form data
const form = reactive({
    firstName: '',
    lastName:'',
    email:'',
    subject:'',
    message:'',
});

// Error/Success message
const responseMessage= ref('');

// Predefined recipient email address
const predefinedEmail= 'nayetlucas@hotmail.fr';

// Function to send email
function sendEmail() {

    // Content of the mail
    const mailBody=`
    Nom: ${form.firstName} ${form.lastName} 
    Email: ${form.email} 
    Message: ${form.message}`;
    
    // Link 'mailto:'
    const mailtoLink = `mailto:${predefinedEmail}?subject=${encodeURIComponent(
    form.subject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Open mailto link in browser
    window.location.href= mailtoLink;

    // Confirmation message
    responseMessage.value= 'Votre message est prêt à être envoyer';

    // Form reinitialisation
    form.firstName='';
    form.lastName='';
    form.email='';
    form.subject='';
    form.message='';
}


</script>

<style scoped>

/* Contact form style */
section#contactForm {
    background-image: url(/src/assets/Images/bck-contact.jpg);
    text-shadow: none;
    font-size: 1.4rem;
}

section.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: var(--wht);
  border-radius: 10px;
  box-shadow: 0px 0px 5px var(--blk);
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  font-family: "Inter", serif;
  font-size: 2rem;
  
}

div.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--gry);
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  width: 100%;
  padding: 10px 15px;
  background: var(--red2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

button:hover {
  background: var(--red);
}

.response-message {
  margin-top: 20px;
  font-size: 14px;
  color: var(--red);
  text-align: center;
}

</style>