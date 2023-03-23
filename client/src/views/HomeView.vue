<script>
import axios from "axios";

export default {
  data(){
    return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
    }
  },
  methods: {
    async handleFormSumbit(){
      try{
        await axios.post('http://localhost:4848/api/send-email', this.formData)
        window.alert("Merci de votre message ! Je vous réponds dans les plus brefs délais !")
      }catch(err){
        console.log(err);
        window.alert("Une erreur est survenue lors de l'envoie du formulaire. Veuillez réessayer ultérieurement.")
      }
    }
  }
}

</script>

<template>
  <main>
    <section id="hero">
      <div class="left">
        <div class="text-wraper">
          <h1 class="website-title">Théo Lesage</h1>
          <h2 class="sub-title">Développeur & Graphiste</h2>
          <p class="description">Spécialisation de la création digital. Je réponds à vos besoins<br> en web et création graphique.</p>
        </div>
        <div class="cta-wraper">
          <button class="cta large">Me contacter</button>
        </div>
      </div>
      <div class="right">
        <div class="illustration-wraper">
          <img src="@/assets/images/illustration.svg" alt="Illustration de montagne avec une tente au couché du soleil dans une flamme">
        </div>
      </div>
    </section>
    <section id="a-propos">
      <span class="sep"></span>
      <h3 class="section-title">À propos</h3>
      <div class="lr-container">
        <div class="left">
          <div class="img-wraper profile-image">
          </div>
        </div>
        <div class="right">
          <div class="text-section-wraper">
            <h4 class="paragraph-title">Qui suis-je ?</h4>
            <p>Développeur créatif passionné de montage, je mènes mes projets à bien tous en relevant tous les défis technique. Je m’appuis toujours sur la stratégie marketing en place afin de répondre au mieux au besoin ainsi qu’au contexte dans lequel mes réalisation seront utiliser.</p>
          </div>
          <div class="text-section-wraper">
            <h4 class="paragraph-title">Mes réseaux</h4>
            <ul class="social-networks-container">
              <li class="social-line"><img src="@/assets/images/github-sign.png" alt="github logo" class="social-icon"> @theolesage</li>
              <li class="social-line"><img src="@/assets/images/linkedin.png" alt="github logo" class="social-icon">Théo Lesage</li>
              <li class="social-line"><img src="@/assets/images/instagram.png" alt="github logo" class="social-icon"> @theolesagedeveloppeur</li>
              <li class="social-line"><img src="@/assets/images/pinterest.png" alt="github logo" class="social-icon"> @theolesagedeveloppeur</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="mes-projets">
      <span class="sep"></span>
      <h3 class="section-title">Mes projets</h3>
      <div class="carrousel-container">
        <div class="carrousel">
          <div class="carrousel-item">
            <img src="@/assets/images/logo-saintex.png" alt="Logo de l'entreprise Saintex" class="carrousel-item-image">
            <div class="infos-wraper">
              <h4 class="infos-title">Saintex</h4>
              <p class="skills-list-title">Missions :</p>
              <ul class="skills-list">
                <li>Audit UI/UX</li>
                <li>Graphisme</li>
                <li>Design d'interface logiciel</li>
              </ul>
              <a href=""><button class="cta">En savoir plus...</button></a>
            </div>
          </div>
          <div class="carrousel-item">
            <img src="@/assets/images/logo-pves.png" alt="Logo du concours de chant l'envol des voix" class="carrousel-item-image">
            <div class="infos-wraper">
              <h4 class="infos-title">Pays Voironnais En Scène</h4>
              <p class="skills-list-title">Missions :</p>
              <ul class="skills-list">
                <li>Identité visuelle</li>
                <li>Graphisme</li>
                <li>Création d'application web</li>
                <li>Gestion d'E-commerce</li>
                <li>SEO</li>
              </ul>
              <a href="https://envoldesvoix.fr"><button class="cta">En savoir plus...</button></a>
            </div>
          </div>
          <div class="carrousel-item">
            <img src="@/assets/images/logo-fimurex.svg" alt="Logo de l'entreprise Fimurex" class="carrousel-item-image">
            <div class="infos-wraper">
              <h4 class="infos-title">Fimurex</h4>
              <p class="skills-list-title">Missions :</p>
              <ul class="skills-list">
                <li>Graphisme</li>
                <li>Design d'interface logiciel</li>
                <li>Community managment</li>
              </ul>
              <a href=""><button class="cta">En savoir plus...</button></a>
            </div>
          </div>
          <div class="carrousel-item">
            <img src="@/assets/images/wizamec-logo.png" alt="Logo du logiciel Wizamec 400" class="carrousel-item-image">
            <div class="infos-wraper">
              <h4 class="infos-title">Wizamec 400</h4>
              <p class="skills-list-title">Missions :</p>
              <ul class="skills-list">
                <li>Graphisme</li>
                <li>Design d'interface logiciel</li>
                <li>Developpement windev</li>
              </ul>
              <a href=""><button class="cta">En savoir plus...</button></a>
            </div>
          </div>
        </div>        
      </div>
    </section>
    <section id="me-contacter">
      <span class="sep"></span>
      <h3 class="section-title">Me contacter</h3>
      <div class="contact-form-container">
        <form @submit.prevent="handleFormSumbit" class="contact-form">
          <div class="field-wraper">
            <label for="email">Nom</label>
            <input type="text" id="name" required placeholder="Mr Dupond" min="1" max="1024" v-model="formData.name">
          </div>
          <div class="field-wraper">
            <label for="name">Email</label>
            <input type="email" id="email" required placeholder="m.dupond@exemple.fr" min="1" max="1024" v-model="formData.email">
          </div>
          <div class="field-wraper">
            <label for="object">Objet</label>
            <input type="text" id="object" required placeholder="Objet" min="1" max="1024" v-model="formData.subject">
          </div>
          <div class="field-wraper">
            <label for="message">Message</label>
            <textarea name="message" id="message" required placeholder="Bonjour... " minlength="1" maxlength="1024" v-model="formData.message"></textarea>
          </div>
          <button class="cta">Envoyer</button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>

.field-wraper{
  display: grid;
}

.field-wraper input, .field-wraper textarea{
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-text);
  min-height: 2rem;
  width: 700px;
  font-size: 18px;
  font-weight: 300;
  font-family: 'Jost';
  padding: 20px;
  transition: background-color .3s ease-in-out;
}

.field-wraper textarea{
  height: 300px;
  resize: none;
}

.field-wraper input:focus-visible, .field-wraper textarea:focus-visible{
  outline: none;
}

.field-wraper input:hover, .field-wraper textarea:hover{
  background-color: var(--color-background);
}

.field-wraper label{
  font-size: 25px;
  font-weight: 300;
}

.contact-form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

#me-contacter{
  background-image: url("@/assets/images/contactform-bg.png");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding-block: 3rem;
}

.skills-list{
  font-size: 17px;
  list-style: circle;
  padding-left: 1.5rem;
  font-weight: 300;
}

.skills-list-title{
  font-size: 25px;
  font-weight: 300;
}

.infos-wraper{
  padding-left: 2rem;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  padding-bottom: 2rem;
}

.infos-title{
  font-size: 45px;
  font-weight: 300;
}

.carrousel-item-image{
  max-height: 370px;
  max-width: 370px;
  width: 100%;
  height: auto;
  /*mix-blend-mode: luminosity;*/
  aspect-ratio: preseve;
}

.carrousel-item{
  height: 400px;
  min-width: 600px;
  flex-shrink: 0;
  border: 1.5px solid var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: var(--color-background-accent);
}

.carrousel{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 100vw;
  gap: 20px;
  padding-inline: 20px;
  height: 440px;
}

.carrousel-container{
  height: fit-content;
  background-color: var(--color-background-accent);
  box-shadow: 
    inset 0 35px 30px #0002,
    inset 0 -35px 30px #0002;
  overflow: hidden;
  overflow-x: scroll;
  max-width: 99.4vw;
}

.carrousel-container::-webkit-scrollbar{
  background-color: var(--color-dark);
}

.carrousel-container::-webkit-scrollbar-thumb{
  background-color: var(--color-text);
}

#a-propos .right{
  display: flex;
  flex-direction:column;
  gap: 1rem;
  max-width: 640px;
}
.social-networks-container{
  display: grid;
  gap: 10px;
}

.social-line{
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 10px;
}

.social-icon{
  height: 50px;
}

p{
  font-size: 17px;
  font-weight: 400;
  line-height: 140%;
}

.paragraph-title{
  font-size: 30px;
  font-weight: 300;
}

.lr-container{
  max-width: 1920px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.profile-image{
  height: 500px;
  width: 720px;
  background-image: url("@/assets/images/profile-placeholder.png");
  background-size: 200%;
  background-position: center;
}

main{
  display: grid;
  gap: 4rem;
}

#a-propos{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.section-title{
  font-size: 30px;
  font-weight: 300;
  margin-block: 2.5rem;
}

#hero{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
}

#hero .left{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 5rem;
  padding-top: 4rem;
}

.text-wraper{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.website-title{
  font-size: 8rem;
  font-weight: 200;
  line-height: 9rem;
}

.sub-title{
  font-family:'Freestyle Script';
  font-size: 5rem;
  line-height: 5rem;
}

.description{
  font-size: 23px;
  font-weight: 300;
  margin-top: 1rem;
}

.cta-wraper{
  margin-top: 4rem;
}

#hero .right{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.illustration-wraper img{
  height: 70vh;
  mix-blend-mode: luminosity;
}
</style>