<template>
    <section class="section1" id="about">
      <div class=" flex container sectionTitle my-10 text-2xl text-white"><span>______</span>About</div>
    <div class="container flex flex-col flex-wrap gap-x-8 lg:flex-row">
        <div class="basis-3/12 object-top">
            <img class="aboutImg object-scale-down" src="@/assets/board-g878d7426a_1920.jpg" alt="board">
        </div>
     <div class="basis-8/12">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer" v-on:click="switchTab(1)" v-bind:class="{'text-white bg-blue-600': currentTab !== 1, 'text-white bg-blue-900': currentTab === 1}">
            Profile
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer" v-on:click="switchTab(2)" v-bind:class="{'text-white bg-blue-600': currentTab !== 2, 'text-white bg-blue-900': currentTab === 2}">
            Employed
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer" v-on:click="switchTab(3)" v-bind:class="{'text-white bg-blue-600': currentTab !== 3, 'text-white bg-blue-900': currentTab === 3}">
            Education
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': currentTab !== 1, 'block': currentTab === 1}">
              <p>
                I'm a person who is fascinated in web development. I like to take a challenges and learn new technologies. I am able to effectively self-manage during independent projects, as well as collaborate in a team setting. I'm looking for company which help me incrase my level of knowlage to become a Senior. I'm positive and well-organised, self-learning person.
              </p>
            </div>
            <div v-bind:class="{'hidden': currentTab !== 2, 'block': currentTab === 2}">
             
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Marshaller at Kraków Airport im. Jana Pawła II, Kraków <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2016 - August 2022</time>
       <ul class="list-disc "> 
        <li>Provided high quality patient care during critical-care ground and air transports.</li>
        <li>Preventing collisions between aircraft.</li>
        <li>Airport apron management.</li>
    </ul>
    </li>
    <li class="mb-10 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Front-End Developer at Grupa AdWeb</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2016 - March 2016</time>
       <ul class="list-disc "> 
        <li>Website design</li>
        <li>Web programming in HTML, CSS, JavaScript, PHP, j Query</li>
        <li>Implementation websites based on CMS WordPress</li>
        <li>Cutting graphics for the needs of implementation on websites</li>
    </ul>
    </li>
    <li class="mb-10 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer, Junior Specialist SEO/SEM Google Adwords Department at BRADEN SP. Z O.O. - OXIDE EFFECTIVE AGENCY</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2015 - April 2015</time>
       <ul class="list-disc "> 
        <li>Website design</li>
        <li>Web programming in HTML, CSS</li>
        <li>Implementation websites based on CMS WordPress</li>
        <li>Service and repairs incorrect of websites</li>
        <li>Modifications and preparation of campaign audits Google Adwords</li>
    </ul>
    </li>
</ol>

            </div>
            <div v-bind:class="{'hidden': currentTab !== 3, 'block': currentTab === 3}">
          
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2013 - July 2019</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Engineer at AGH University of Science and Technology</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Studies at the Faculty of Computer Science, Electronics and Telecommunications, education completed with a diploma of an IT Engineer. High grades with cybersecurity, cryptography, system administration and network engineer</p>
       
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2008 - June 2012</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">IT specialist at Zespół Szkół Energetycznych</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Graduated with a diploma in Information Technology</p>
    </li>
</ol>

        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
    data() {
      return{
        currentTab: 1
      }  
    },
    methods: {
        switchTab(tabNumber){
            this.currentTab = tabNumber;
        },
    }
}
</script>

<style>
.section1{
    background-color: rgb(9, 129, 149);
    padding: 2rem 0;
}
.aboutImg{
    width: 100%;;
    height: auto;
    opacity: 0.7;
    padding-top: 11px;
}
.sectionTitle{
  padding: 0 1rem;

}
.sectionTitle span{
  color:rgb(177, 22, 22);
  
}
</style>