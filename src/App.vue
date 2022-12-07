<template>

  <NavBar />
  <AboutMe/>
  <MySkills/>
  <PortfolioProjects/>
  <ContactMe/>
  <FooterBot/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import FooterBot from "./components/FooterBot.vue";
import MySkills from "./components/MySkills.vue";
import PortfolioProjects from "./components/PortfolioProjects.vue";
import ContactMe from "./components/ContactMe.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AboutMe,
    FooterBot,
    MySkills,
    PortfolioProjects,
    ContactMe
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
