<template>
  <header id="header">


<!-- navbar menu -->

    <div class="nav-menu" :class="{ 'scrolled-nav': scrolledNav }">
      <nav class="nav bg-white">
        <div class="branding container flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
            />
          </svg>
          <span class="self-center text-xl whitespace-nowrap dark:text-white"
            >Sebastian</span
          >
        </div>
        <ul v-show="!mobile" class="navigation flex flex-row">
          <li>
            <a
              href="#" v-scroll-to="'#header'"
              class="block py-2 pl-3 pr-4 text-black hover:text-gray-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#" v-scroll-to="'#about'"
              class="block py-2 pl-3 pr-4 text-black hover:text-gray-500"
              aria-current="page"
              >About</a
            >
          </li>
          <li>
            <a
              href="#" v-scroll-to="'#skills'"
              class="block py-2 pl-3 pr-4 text-black hover:text-gray-500"
              aria-current="page"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#" v-scroll-to="'#portfolio'"
              class="block py-2 pl-3 pr-4 text-black hover:text-gray-500"
              aria-current="page"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="#" v-scroll-to="'#contact'"
              class="block py-2 pl-3 pr-4 text-black hover:text-gray-500"
              aria-current="page"
              >Contact</a
            >
          </li>
        </ul>
        <div class="icon">
          <svg
            @click="toggleMobileNav"
            v-show="mobile"
            :class="{ 'icon-active': mobileNav }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
          </svg>
        </div>
        <transition name="slide-fade">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li class="">
              <a href="#" v-scroll-to="'#header'" class="hover:text-gray-500" aria-current="page"
                >Home</a
              >
            </li>
            <li class="">
              <a href="#" v-scroll-to="'#about'" class="hover:text-gray-500" aria-current="page"
                >About</a
              >
            </li>
            <li class="">
              <a href="#" v-scroll-to="'#skills'" class="hover:text-gray-500" aria-current="page"
                >Skills</a
              >
            </li>
            <li class="">
              <a href="#" v-scroll-to="'#portfolio'" class="hover:text-gray-500" aria-current="page"
                >Portfolio</a
              >
            </li>
            <li class="">
              <a href="#" v-scroll-to="'#contact'" class="hover:text-gray-500" aria-current="page"
                >Contact</a
              >
            </li>
          </ul>
        </transition>
      </nav>
    </div>


<!-- header - content + waves -->

    <div class="header">
      
      <div class="inner-header flex-for-animation">
        <div class="container ">
         
          <h1 class="text-left mb-4 text-6xl uppercase font-extrabold tracking-tight leading-none text-white nekoFont ">web developer <br/>and designer</h1>
          <p class="text-left mb-3 font-light text-white">Hi Im Sebastian, find out more below about me </p>

        
        </div>
        
        
       
       </div>

     
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
     
    </div>
    


    <div class="content flex-for-animation headerText">
      <h2 class="">More about me</h2>
      <svg v-scroll-to="'#about'" class="shake cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8h3l-4 4-4-4h3V8h2v4z"/></svg>

    </div>
  
  </header>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
/* css reset */
body {
  margin: 0;
}

/* navbar css */

.nav-menu {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s case all;
}
nav {
  position: relative;
  display: flex;
  flex-direction: row;

  transition: 0.5s case all;
}

.nav ul,
.link {
  font-weight: 500;
  list-style: none;
  text-decoration: none;
}
.nav li {
  padding: 0.75rem;
}
.link {
  font-size: 0.75rem;
  transition: 0.5s case all;
  border-bottom: 1px solid transparent;
}
.icon {
  display: flex;
  height: 100%;
  padding: 1rem;
}

.icon svg {
  cursor: pointer;
  font-size: 2 rem;
  transition: 0.8s case all;
}
.icon-active {
  transform: rotate(180deg);
}
.branding {
  display: flex;
  align-items: center;
  text-align: center;
}
.branding span {
  margin: 0 1rem;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
}
.dropdown-nav li {
  margin-left: 0;
}

.dropdown-nav li .link {
  color: black;
}
.scrolled-nav {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.05);
}

.scrolled-nav nav {
  widows: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.05);
}

/* transition of mobile menu */

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* header styles */
.headerText{
  display: flex;
  flex-direction: column;
  margin:10px;
  text-align: left;

}
.nekoFont{
  font-family: 'Nerko One', cursive;
  font-size: 5.75rem;
}

.header-Title {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}
p {
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient( 60deg, rgb(9, 129, 149) 0%, rgb(67, 146, 155) 100% );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex-for-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*media for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}

.shake:hover{
  animation: shake 0.5s;
  animation-iteration-count: infinite; 
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
