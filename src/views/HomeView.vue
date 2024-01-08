<template>
  <div 
    class="bg-container"
    :class="{'bg-black': isDarkMode}"
  >
    <div class="mx-auto max-w-screen-sm py-20 md:px-10 px-5 text-grey md:text-justify text-sm leading-relaxed">
      <div class="flex justify-end">
        <label for="switch" class="relative">
          <input type="checkbox" id="switch" name="switch" hidden class="peer" @click="isDarkMode=!isDarkMode">
          <span class="absolute inset-0 h-5 w-5 my-auto left-0.5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-6 flex items-center justify-center">
            <img v-if="isDarkMode" class="w-3.5 mx-auto" src="@/assets/icons/moon_hover.svg" alt="">
            <img v-else class="w-3.5 mx-auto" src="@/assets/icons/sun_hover.svg" alt="">
          </span>
          <span class="w-12 h-6 border flex items-center jsutify-center rounded-full bg-grey-25 transition duration-300 peer-checked:bg-pink border-pink cursor-pointer">
            <img class="w-3.5 mx-auto mr-1" src="@/assets/icons/sun.svg" alt="">
            <img  class="w-3.5 ml-auto mr-1" src="@/assets/icons/moon.svg" alt="">
          </span>
        </label>
      </div>
      <div class="flex">
        <img class="rounded-full w-36 border-3 border-grey-25" src="@/assets/me.jpg" alt="">
        <div class="my-auto md:pl-10 pl-2">
          <p class="text-2xl font-bold text-blue">Low Xuanli</p>
          <p>Aspiring Business Analyst</p>
          <div class="flex mt-6">
            <a href="/Resume_Low_Xuanli.pdf" target="_blank" class="rounded-full border-pink border-2 p-1 mr-2 w-24 flex items-center justify-center shadow-lg hover:shadow-pink transition-transform hover:scale-105 cursor-pointer" @mouseenter="isResume=true" @mouseleave="isResume=false">
              <p class="mr-1 font-medium">Resume</p>
              <img class="w-2" :style="{ transform: isResume ? 'translateY(-2px)' : 'translateY(0)' }" src="@/assets/icons/window.svg" alt="">
            </a>
            <a href="https://www.linkedin.com/in/lowxuanli" target="_blank" class="w-9 h-9 mr-2 bg-pink rounded-full flex items-center justify-center shadow-lg hover:shadow-pink cursor-pointer">
              <img class="w-4" src="@/assets/icons/linkedin.svg" alt="">
            </a>
            <a href="https://github.com/xuanli286" target="_blank" class="w-9 h-9 bg-pink rounded-full flex items-center justify-center shadow-lg hover:shadow-pink cursor-pointer">
              <img class="w-4" src="@/assets/icons/github.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="mt-10 text-justify" @mouseenter="isAbout=true" @mouseleave="isAbout=false">
        <p class="text-purple text-xl font-medium mb-5">About</p>
        <p :class="{'animate-pulse': isAbout}">Hi, I'm Xuanli.</p>
        <p class="mt-5">
          A third-year student in SMU, pursuing a degree in Information Systems with a dual track in Business Analytics and Digitalisation & Cloud Solutions. I'm fueled by a strong passion for data, actively seeking opportunities to expand my experience in the field.
        </p>
        <p class="mt-5">
          Eager to take on roles in <span :class="{'text-blue font-semibold': isAbout}">data or business analysis</span>, I'm committed to advancing my skills and contributing to impactful projects.
        </p>
      </div>
      <div class="mt-10">
        <p class="text-purple text-xl font-medium mb-3">Experience</p>
        <a href="https://www.marinachain.io/" class="grid grid-cols-3 gap-2 p-1 rounded-md hover:bg-yellow">
          <div class="col-span-1">
            <p class="text-grey-50">May 2023 - Aug 2023</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
              <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/marinachain_logo.png" alt="">
              <div>
                <p class="font-semibold">Full Stack Software Engineer Intern</p>
                <p class="font-medium">MarinaChain</p>
              </div>
            </div>
            <ul class="custom-list mt-5 ml-5">
              <li class="mb-1">Implemented vessel management feature</li>
              <li>Created Auth0 embedded login to enhance user authentication and leveraged Management API for secure password reset</li>
              <li>Integrated Stripe API to ease real-time payment processing with webhook</li>
            </ul>
            <div class="flex items-center mt-5">
              <img class="w-20 mr-1" src="@/assets/icons/django.svg" alt="Django">
              <img class="w-14 mr-1" src="@/assets/icons/vue.svg" alt="Vue">
              <img class="w-[88px]" src="@/assets/icons/postgre.svg" alt="PostgreSQL">
            </div>
          </div>
        </a>
        <a href="https://www.hsbc.com/" class="grid grid-cols-3 gap-2 p-1 rounded-md hover:bg-yellow mt-3">
          <div class="col-span-1">
            <p class="text-grey-50">Sep 2020 - Feb 2021</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
              <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/hsbc_logo.png" alt="">
              <div>
                <p class="font-semibold">Intern under HOST/COO Office</p>
                <p class="font-medium">HSBC</p>
              </div>
            </div>
            <ul class="custom-list mt-5 ml-5">
              <li class="mb-1">Analysed business requirements and tracked User Acceptance Testing (UAT) by communicating with various stakeholders through emails and Jabber to ensure timely project delivery in 3 months</li>
              <li>Eased process of weekly project status update by designing a template utilising Confluence to allow for collective and coherent updates across stakeholders and project team</li>
            </ul>
            <div class="flex items-center mt-5">
              <img class="w-[50px] mr-1" src="@/assets/icons/jira.png" alt="Jira">
              <img class="w-[99px]" src="@/assets/icons/confluence.png" alt="Confluence">
            </div>
          </div>
        </a>
      </div>
      <div class="mt-10">
        <p class="text-purple text-xl font-medium mb-3">Projects</p>
        <div class="flex border-b-2 border-purple-25">
          <div
            class="mr-5 hover:border-b-2 hover:border-grey hover:font-medium pb-2 cursor-pointer"
            :class="{'border-b-2 border-grey font-medium' : isMachine}"
            @click="selectProject"
          >
            Data Analytics
          </div>
          <div
            class="mr-5 hover:border-b-2 hover:border-grey hover:font-medium pb-2 cursor-pointer"
            :class="{'border-b-2 border-grey font-medium' : !isMachine}"
            @click="selectProject"
          >
            Web Development
          </div>
        </div>
        <div v-if="isMachine" class="mt-3">
          <div class="bg-yellow hover:bg-yellow-50 w-full rounded-md px-1 py-4 mb-3" @mouseenter="isSentiment=true" @mouseleave="isSentiment=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isSentiment}">Sentiment Tunes</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/xuanli286/sentiment-tunes" target="_blank" @mouseenter="isSentimentGithub=true" @mouseleave="isSentimentGithub=false">
                  <img v-if="isSentiment && isSentimentGithub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="GitHub">
                </a>
                <a class="transition-transform hover:scale-110" href="https://www.canva.com/design/DAFyEai2m0s/FjI05Y6sdGNaUoChKTdPaA/view?utm_content=DAFyEai2m0s&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" @mouseenter="isSentimentSlide=true" @mouseleave="isSentimentSlide=false">
                  <img v-if="isSentiment && isSentimentSlide" class="w-7" src="@/assets/icons/slides_hover.svg" alt="">
                  <img v-else class="w-7" src="@/assets/icons/slides.svg" alt="Slidedeck">
                </a>
              </div>
            </div>
            <p class="mb-1">
              A Spotify music reccomendation system using Cosine Similarity, incorporating multi-label emotion detection with Geneva Emotional Music Scales, as well as emotion extraction using Long Short-Term Memory (LSTM) networks, NRC Lexicon, and OpenAI
            </p>
            <img class="w-20 mb-2" src="@/assets/icons/python.svg" alt="">
            <div class="px-2 w-full h-60 rounded-md bg-black hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isSentiment" class="h-60" src="@/assets/projects/sentiment_tunes/login.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/sentiment_tunes/recommendation.png" alt="">
            </div>
          </div>
          <div class="bg-yellow hover:bg-yellow-50 w-full rounded-md px-1 py-4 mb-3" @mouseenter="isWorld=true" @mouseleave="isWorld=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isWorld}">World Happiness Dashboard</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://va-t3-world-happiness-d3-dashboard.netlify.app/" target="_blank" @mouseenter="isWorldRedirect=true" @mouseleave="isWorldRedirect=false">
                  <img v-if="isWorld && isWorldRedirect" class="w-5" src="@/assets/icons/redirect_hover.svg" alt="">
                  <img v-else class="w-5" src="@/assets/icons/redirect.svg" alt="">
                </a>
                <a class="transition-transform hover:scale-110" href="/World Happiness Report.pdf" target="_blank" @mouseenter="isWorldPdf=true" @mouseleave="isWorldPdf=false">
                  <img v-if="isWorld && isWorldPdf" class="w-[18px]" src="@/assets/icons/pdf_hover.svg" alt="PDF">
                  <img v-else class="w-[18px]" src="@/assets/icons/pdf.svg" alt="PDF">
                </a>
              </div>
            </div>
            <p class="mb-1">
              A dashboard for users to visualise trends of World Happiness and possible factors influencing it
            </p>
            <div class="flex items-center mb-2">
              <img class="w-24 mr-1" src="@/assets/icons/tableau.png" alt="Tableau">
              <img class="w-[30px]" src="@/assets/icons/d3.png" alt="d3.js">
            </div>
            <div class="px-2 w-full h-60 rounded-md bg-black hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isWorld" class="h-60" src="@/assets/projects/world_happiness/frontpage.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/world_happiness/dashboard.png" alt="">
            </div>
          </div>
          <div class="bg-yellow hover:bg-yellow-50 w-full rounded-md px-1 py-4" @mouseenter="isBeer=true" @mouseleave="isBeer=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isBeer}">BeerAdvocates</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://www.canva.com/design/DAFyaJ53H18/EepiHl9XqJ56PStQxXzd8Q/view?utm_content=DAFyaJ53H18&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" @mouseenter="isBeerSlide=true" @mouseleave="isBeerSlide=false">
                  <img v-if="isBeer && isBeerSlide" class="w-7" src="@/assets/icons/slides_hover.svg" alt="Slidedeck">
                  <img v-else class="w-7" src="@/assets/icons/slides.svg" alt="Slidedeck">
                </a>
              </div>
            </div>
            <p class="mb-1">
              Detect and filter biased or fraudulent reviews found on its site using tree-based algorithms, such as Decision Tree and Random Forest
            </p>
            <img class="w-[78px] mr-1 mb-2" src="@/assets/icons/sas.png" alt="SAS">
            <div class="px-2 w-full h-60 rounded-md bg-black hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isBeer" class="h-60" src="@/assets/projects/beer_advocates/frontpage.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/beer_advocates/output.png" alt="">
            </div>
          </div>
        </div>
        <div v-else class="mt-3">
          <div class="bg-yellow hover:bg-yellow-50 w-full rounded-md px-1 py-4 mb-3" @mouseenter="isGoldman=true" @mouseleave="isGoldman=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isGoldman}">Goldman Sachs Portfolio Analyser</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/xuanli286/IS442-FRONTEND" target="_blank" @mouseenter="isGoldmanGitHub=true" @mouseleave="isGoldmanGitHub=false">
                  <img v-if="isGoldman && isGoldmanGitHub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="GitHub">
                </a>
                <a class="transition-transform hover:scale-110" href="https://youtu.be/0lhDVV1ZNJc?si=joPOfVlIp_qPtsR7" target="_blank" @mouseenter="isGoldmanVideo=true" @mouseleave="isGoldmanVideo=false">
                  <img v-if="isGoldman && isGoldmanVideo" class="w-7" src="@/assets/icons/youtube_hover.svg" alt="Youtube">
                  <img v-else class="w-7" src="@/assets/icons/youtube.svg" alt="Youtube">
                </a>
              </div>
            </div>
            <p class="mb-1">
              An application that aids investment advisors and finance professionals in analysing investment portfolios' performance and making informed investment decisions.
            </p>
            <div class="flex flex-wrap items-center mb-2">
              <img class="w-[81px] mr-1" src="@/assets/icons/spring.svg" alt="SpringBoot">
              <img class="w-14 mr-1" src="@/assets/icons/vue.svg" alt="Vue">
              <img class="w-[75px] mr-1" src="@/assets/icons/firestore.svg" alt="Firebase">
              <img class="w-16" src="@/assets/icons/redis.svg" alt="Redis Cache">
            </div>
            <div class="px-2 w-full h-60 rounded-md bg-yellow hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isGoldman" class="h-60" src="@/assets/projects/goldman_sachs/login.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/goldman_sachs/analysis.png" alt="">
            </div>
          </div>
          <div class="bg-yellow hover:bg-yellow-50 w-full rounded-md px-1 py-4 mb-3" @mouseenter="isSbrp=true" @mouseleave="isSbrp=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isSbrp}">Skill Based Role Portal (SBRP)</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/xuanli286/IS212-g4t1" target="_blank" @mouseenter="isSbrpGithub=true" @mouseleave="isSbrpGithub=false">
                  <img v-if="isSbrp && isSbrpGithub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="GitHub">
                </a>
              </div>
            </div>
            <p class="mb-1">
              A website which facilitates staff applications, allowing Managers and Directors to review applicant skills, find suitable candidates, and empowering HR to create role listings and perform managerial functions.
            </p>
            <div class="flex flex-wrap items-center mb-1">
              <img class="w-[71px] mr-1 mb-1" src="@/assets/icons/flask.svg" alt="Flask">
              <img class="w-14 mr-1 mb-1" src="@/assets/icons/vue.svg" alt="Vue">
              <img class="w-[72px] mr-1 mb-1" src="@/assets/icons/mysql.svg" alt="MySQL">
              <img class="w-[39px] mr-1 mb-1" src="@/assets/icons/aws.svg" alt="AWS">
              <img class="w-20 mr-1 mb-1" src="@/assets/icons/docker.svg" alt="Docker">
              <img class="w-[88px] mr-1 mb-1" src="@/assets/icons/selenium.svg" alt="Selenium">
              <img class="w-[50px] mr-1 mb-1" src="@/assets/icons/jira.png" alt="Jira">
              <img class="w-[99px] mb-1" src="@/assets/icons/confluence.png" alt="Confluence">
            </div>
            <div class="px-2 w-full h-60 rounded-md bg-yellow hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isSbrp" class="h-60" src="@/assets/projects/sbrp/login.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/sbrp/candidates.png" alt="">
            </div>
          </div>
        </div>
        <a class="mt-3 rounded-md border-pink border-2 p-1 mr-2 flex items-center justify-center shadow-lg hover:shadow-pink transition-transform hover:scale-105" href="https://github.com/xuanli286" target="_blank" @mouseenter="isFullProjects=true" @mouseleave="isFullProjects=false">
          <p class="mr-1">Full list of projects on <span class="font-semibold">Github</span></p>
          <img class="w-2" :style="{ transform: isFullProjects ? 'translateY(-2px)' : 'translateY(0)' }" src="@/assets/icons/window.svg" alt="">
        </a>
      </div>
      <div class="mt-40">
        <img class="w-11/12 mx-auto" src="@/assets/contact.svg" alt="Contact">
        <p class="mt-4">Feel free to email me at <u>xuanli.low.2021@scis.smu.edu.sg</u> or connect on socials!</p>
        <a class="mt-4 mx-auto rounded-full shadow-lg bg-pink text-white-50 w-48 p-3 flex items-center justify-center hover:shadow-pink transition-transform hover:scale-105" href="mailto:xuanli.low.2021@scis.smu.edu.sg">
          <p class="mr-2">Drop me an email</p>
          <img class="w-4" src="@/assets/icons/mail.svg" alt="Email">
        </a>
        <a class="flex items-center mt-4 mr-auto" href="https://www.linkedin.com/in/lowxuanli" target="_blank" @mouseenter="isLinkedin=true" @mouseleave="isLinkedin=false">
          <img class="w-5 mr-2" src="@/assets/icons/linkedin_outline.svg" alt="Linkedin">
          <p :class="{'underline decoration-wavy font-medium text-pink' : isLinkedin}">Linkedin</p>
        </a>
        <a class="flex items-center mt-4 mr-auto" href="https://github.com/xuanli286" target="_blank" @mouseenter="isGithub=true" @mouseleave="isGithub=false">
          <img class="w-5 mr-2" src="@/assets/icons/github_outline.svg" alt="Github">
          <p :class="{'underline decoration-wavy font-medium text-pink' : isGithub}">Github</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);
const isAbout = ref(false);
const isResume = ref(false);
const isMachine = ref(true);
const isSentiment = ref(false);
const isSentimentGithub = ref(false);
const isSentimentSlide = ref(false);
const isWorld = ref(false);
const isWorldRedirect = ref(false);
const isWorldPdf = ref(false);
const isBeer = ref(false);
const isBeerSlide = ref(false);
const isGoldman = ref(false);
const isGoldmanGitHub = ref(false);
const isGoldmanVideo = ref(false);
const isSbrp = ref(false);
const isSbrpGithub = ref(false);
const isFullProjects = ref(false);
const isLinkedin = ref(false);
const isGithub = ref(false);

localStorage.setItem('dark_mode', isDarkMode);

function selectProject() {
  isMachine.value = !isMachine.value;
}
</script>

<style>
.bg-container {
  position: relative;
  overflow: hidden;
  background-color: #f9f3e5;
  transition: background-color 2s ease;
}

.bg-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: #231f19;
  opacity: 0;
  transition: opacity 2s ease; /* Should match the transition duration of the background-color */
  pointer-events: none;
}

.bg-black::before {
  opacity: 1;
}

.custom-list {
  list-style-image: url('@/assets/icons/bullet.svg');
}
</style>