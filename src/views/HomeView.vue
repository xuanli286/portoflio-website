<template>
  <div class="bg-beige w-full min-h-screen flex justify-center items-center" v-if="isLoading">
    <div class="panda"></div>
  </div>
  <div 
    v-else
    class="bg-container"
    :class="{'bg-black': isDarkMode}"
  >
    <div 
      class="mx-auto max-w-screen-sm py-20 md:px-10 px-5 md:text-justify text-sm leading-relaxed"
      :class="[isDarkMode ? 'text-beige' : 'text-grey']"
    >
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
          <p>Aspiring Data/Infrastructure Engineer</p>
          <div class="flex mt-6">
            <a href="/Resume_Low_Xuanli.pdf" target="_blank" class="rounded-full border-pink border-2 p-1 mr-2 w-24 flex items-center justify-center shadow-lg hover:shadow-pink transition-transform hover:scale-105 cursor-pointer" @mouseenter="isResume=true" @mouseleave="isResume=false">
              <p class="mr-1 font-medium">Resume</p>
              <img v-if="!isDarkMode" class="w-2" :style="{ transform: isResume ? 'translateY(-2px)' : 'translateY(0)' }" src="@/assets/icons/window.svg" alt="">
              <img v-else class="w-2" :style="{ transform: isResume ? 'translateY(-2px)' : 'translateY(0)' }" src="@/assets/icons/window_white.svg" alt="">
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
          A fresh graduate from SMU, holding a degree in Information Systems with a dual track in Business Analytics and Digitalisation & Cloud Solutions. 
        </p>
        <p class="mt-3">
          Eager to take on roles in <span :class="{'text-blue font-semibold': true}">data/infrastructure engineering</span>, I'm committed to advancing my skills, and building scalable and fault tolerant systems.
          Infrastructure isn't just backend to me — it's the backbone that makes great products possible!
        </p>
      </div>
      <div class="mt-10">
        <p class="text-purple text-xl font-medium mb-3">Experience</p>
        <div 
          class="grid grid-cols-3 gap-2 p-1 rounded-md"
          :class="[isDarkMode ? 'hover:bg-black-50' : 'hover:bg-yellow']"
        >
          <div class="col-span-1">
            <p class="text-grey-50">Jan 2025 - Jan 2026</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
                <a href="https://www.bankofsingapore.com/">
                  <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/bos_logo.png" alt="">
                </a>
              <div>
                <p class="font-semibold">HR Data Engineer</p>
                <a href="https://www.bankofsingapore.com/" class="font-medium">Bank of Singapore</a>
              </div>
            </div>
            <ul class="custom-list mt-5 ml-5">
              <li class="mb-1">Implemented data pipelines using SQL, VBS, and Blue Prism to streamline extraction and transformation of data from MyHR and Enterprise Big Data Platform (EBP), delivering timely headcount reports to stakeholders</li>
              <li>Developed and deployed a Streamlit dashboard in a collaboration with Data Hub, implementing role-based access controls to PII data and eliminating 3 hours per month in manual reporting for department coordinators</li>
            </ul>
            <div class="flex items-center mt-5">
              <img class="w-9 mr-1" src="@/assets/icons/sql.svg" alt="SQL">
              <img class="w-20 mr-1" src="@/assets/icons/python.svg" alt="Python">
              <img class="w-20 mr-1" src="@/assets/icons/blueprism.svg" alt="Blue Prism">
              <img class="w-20" src="@/assets/icons/bitbucket.svg" alt="Bitbucket">
            </div>
          </div>
        </div>
        <div 
          class="grid grid-cols-3 gap-2 p-1 rounded-md mt-3"
          :class="[isDarkMode ? 'hover:bg-black-50' : 'hover:bg-yellow']"
        >
          <div class="col-span-1">
            <p class="text-grey-50">May 2023 - Aug 2023</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
                <a href="https://www.hdb.gov.sg/">
                  <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/hdb_logo.png" alt="">
                </a>
              <div>
                <p class="font-semibold">Data Analyst Intern</p>
                <a href="https://www.hdb.gov.sg/" class="font-medium">Housing & Development Board</a>
              </div>
            </div>
            <ul class="custom-list mt-5 ml-5">
              <li class="mb-1">Automated the Town Council Management Report (TCMR) process from manual Excel reporting to dashboards in PowerBI, reducing the overall time taken for report generation from approximately 2 hours to 30 minutes</li>
              <li>Utilised Python to extract and clean data from PDF and Excel for trend analysis in Power BI, employing Power Query and DAX measures to identify prominent issues requiring closer monitoring based on indicators like estate cleanliness, maintenance, etc.</li>
            </ul>
            <div class="flex items-center mt-5">
              <img class="w-20 mr-1" src="@/assets/icons/python.svg" alt="Python">
              <img class="w-20" src="@/assets/icons/powerbi.svg" alt="Power BI">
            </div>
          </div>
        </div>
        <div 
          class="grid grid-cols-3 gap-2 p-1 rounded-md mt-3"
          :class="[isDarkMode ? 'hover:bg-black-50' : 'hover:bg-yellow']"
        >
          <div class="col-span-1">
            <p class="text-grey-50">May 2023 - Aug 2023</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
                <a href="https://www.marinachain.io/">
                  <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/marinachain_logo.png" alt="">
                </a>
              <div>
                <p class="font-semibold">Full Stack Software Engineer Intern</p>
                <a href="https://www.marinachain.io/" class="font-medium">MarinaChain</a>
              </div>
            </div>
            <ul class="custom-list mt-5 ml-5">
              <li class="mb-1">Implemented vessel management feature with Django REST Framework and Vue to streamline operations</li>
              <li>Enhanced user authentication through Auth0 embedded login to ensure a secure login and leveraged Management API
for a robust password reset mechanism</li>
              <li>Integrated Stripe API to optimise real-time payment processing with webhook for a seamless user experience</li>
            </ul>
            <div class="flex items-center mt-5">
              <img class="w-20 mr-1" src="@/assets/icons/django.svg" alt="Django">
              <img class="w-14 mr-1" src="@/assets/icons/vue.svg" alt="Vue">
              <img class="w-[88px] mr-1" src="@/assets/icons/postgre.svg" alt="PostgreSQL">
              <img class="w-20" src="@/assets/icons/bitbucket.svg" alt="Bitbucket">
            </div>
          </div>
        </div>
        <div 
          class="grid grid-cols-3 gap-2 p-1 rounded-md mt-3"
          :class="[isDarkMode ? 'hover:bg-black-50' : 'hover:bg-yellow']"
        >
          <div class="col-span-1">
            <p class="text-grey-50">Sep 2020 - Feb 2021</p>
          </div>
          <div class="col-span-2">
              <div class="flex items-center">
                <a href="https://www.hsbc.com/">
                  <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/logos/hsbc_logo.png" alt="">
                </a>
              <div>
                <p class="font-semibold">Intern under Digital Business Services</p>
                <a href="https://www.hsbc.com/">
                  <p class="font-medium">HSBC</p>
                </a>
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
        </div>
      </div>
      <div class="mt-10">
        <p class="text-purple text-xl font-medium mb-3">Projects</p>
        <div class="flex border-b-2 border-purple-25">
          <div
            class="mr-5 hover:border-b-2 hover:font-medium pb-2 cursor-pointer"
            :class="{'border-b-2 font-medium' : isMachine, 'border-beige hover:border-beige' : isMachine && isDarkMode, 'border-grey hover:border-grey' : isMachine && !isDarkMode}"
            @click="selectProject"
          >
            Data Analytics
          </div>
          <div
            class="mr-5 hover:border-b-2 hover:font-medium pb-2 cursor-pointer"
            :class="{'border-b-2 font-medium' : !isMachine, 'border-beige hover:border-beige' : !isMachine && isDarkMode, 'border-grey hover:border-grey' : !isMachine && !isDarkMode}"
            @click="selectProject"
          >
            Web Development
          </div>
        </div>
        <div v-if="isMachine" class="mt-3">
          <div 
            class="w-full rounded-md px-1 py-4 mb-3"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isSentiment=true" @mouseleave="isSentiment=false"
          >
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink' : isSentiment, 'text-beige' : isDarkMode}">Sentiment Tunes</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/xuanli286/sentiment-tunes" target="_blank" @mouseenter="isSentimentGithub=true" @mouseleave="isSentimentGithub=false">
                  <img v-if="isSentiment && isSentimentGithub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else-if="isDarkMode" class="w-6" src="@/assets/icons/github-alt_white.svg" alt="Github">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="Github">
                </a>
                <a class="transition-transform hover:scale-110" href="https://www.canva.com/design/DAFyEai2m0s/FjI05Y6sdGNaUoChKTdPaA/view?utm_content=DAFyEai2m0s&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" @mouseenter="isSentimentSlide=true" @mouseleave="isSentimentSlide=false">
                  <img v-if="isSentiment && isSentimentSlide" class="w-7" src="@/assets/icons/slides_hover.svg" alt="">
                  <img v-else-if="isDarkMode" class="w-7" src="@/assets/icons/slides_white.svg" alt="Slidedeck">
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
          <div class="w-full rounded-md px-1 py-4 mb-3"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isWorld=true" @mouseleave="isWorld=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isWorld}">World Happiness Dashboard</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://va-t3-world-happiness-d3-dashboard.netlify.app/" target="_blank" @mouseenter="isWorldRedirect=true" @mouseleave="isWorldRedirect=false">
                  <img v-if="isWorld && isWorldRedirect" class="w-5" src="@/assets/icons/redirect_hover.svg" alt="">
                  <img v-else-if="isDarkMode" class="w-5" src="@/assets/icons/redirect_white.svg" alt="">
                  <img v-else class="w-5" src="@/assets/icons/redirect.svg" alt="">
                </a>
                <a class="transition-transform hover:scale-110" href="/World Happiness Report.pdf" target="_blank" @mouseenter="isWorldPdf=true" @mouseleave="isWorldPdf=false">
                  <img v-if="isWorld && isWorldPdf" class="w-[18px]" src="@/assets/icons/pdf_hover.svg" alt="PDF">
                  <img v-else-if="isDarkMode" class="w-[18px]" src="@/assets/icons/pdf_white.svg" alt="PDF">
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
          <div 
            class="w-full rounded-md px-1 py-4"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isBeer=true" @mouseleave="isBeer=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isBeer}">BeerAdvocates</p>
              <div class="ml-auto flex items-center">
                <a class="transition-transform hover:scale-110" href="https://www.canva.com/design/DAFyaJ53H18/EepiHl9XqJ56PStQxXzd8Q/view?utm_content=DAFyaJ53H18&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" @mouseenter="isBeerSlide=true" @mouseleave="isBeerSlide=false">
                  <img v-if="isBeer && isBeerSlide" class="w-7" src="@/assets/icons/slides_hover.svg" alt="Slidedeck">
                  <img v-else-if="isDarkMode" class="w-7" src="@/assets/icons/slides_white.svg" alt="Slidedeck">
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
          <div class="w-full rounded-md px-1 py-4 mb-3"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isIqma=true" @mouseleave="isIqma=false"
          >
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isIqma}">iQMA Skills Builder</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/FYP-2024-IQMA/fyp2024" target="_blank" @mouseenter="isIqmaGitHub=true" @mouseleave="isIqmaGitHub=false">
                  <img v-if="isIqma && isIqmaGitHub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else-if="isDarkMode" src="@/assets/icons/github-alt_white.svg" alt="Github">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="Github">
                </a>
                <a class="transition-transform hover:scale-110" href="https://youtu.be/qiESkFuMMOc?feature=shared" target="_blank" @mouseenter="isIqmaVideo=true" @mouseleave="isIqmaVideo=false">
                  <img v-if="isIqma && isIqmaVideo" class="w-7" src="@/assets/icons/youtube_hover.svg" alt="Youtube">
                  <img v-else-if="isDarkMode" class="w-7" src="@/assets/icons/youtube_white.svg" alt="Youtube">
                  <img v-else class="w-7" src="@/assets/icons/youtube.svg" alt="Youtube">
                </a>
              </div>
            </div>
            <div class="flex flex-wrap items-center mb-1">
              <img class="w-5" src="@/assets/projects/iqma/medal.svg" alt="">
              <p class="ml-2 font-medium text-pink">1st Runner-up for DELL Technologies Academy Cloud Native Award</p>
            </div>
            <p class="mb-1">
              A mobile application that equips employees with soft skills through gamification, a personal chatbot, and bite-sized lessons to boost performance and leadership potential.
              A near real-time clickstream analytics pipeline publishes 30+ daily events to RabbitMQ, enabling user insights in Tableau to drive data-informed improvements for its application.
            </p>
            <div class="flex flex-wrap items-center mb-2">
              <img class="w-[68px] mr-1" src="@/assets/icons/react_native.svg" alt="React Native">
              <img class="w-[66px] mr-1" src="@/assets/icons/type_script.svg" alt="Type Script">
              <img class="w-24 mr-1" src="@/assets/icons/supabase.png" alt="Type Script">
              <img class="w-[39px] mr-1" src="@/assets/icons/aws.svg" alt="AWS">
              <img class="w-[110px] mr-1" src="@/assets/icons/terraform.png" alt="Terraform">
              <img class="w-24 mr-1" src="@/assets/icons/tableau.png" alt="Tableau">
            </div>
            <div class="px-2 w-full h-60 rounded-md bg-yellow hidden md:flex items-center justify-center transition duration-1500">
              <img v-if="!isIqma" class="h-60" src="@/assets/projects/iqma/mobile.png" alt="">
              <img v-else class="h-60" src="@/assets/projects/iqma/architecture.png" alt="">
            </div>
          </div>
          <div class="w-full rounded-md px-1 py-4 mb-3"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isGoldman=true" @mouseleave="isGoldman=false"
          >
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isGoldman}">Goldman Sachs Portfolio Analyser</p>
              <div class="ml-auto flex items-center">
                <a class="mr-3 transition-transform hover:scale-110" href="https://github.com/xuanli286/IS442-FRONTEND" target="_blank" @mouseenter="isGoldmanGitHub=true" @mouseleave="isGoldmanGitHub=false">
                  <img v-if="isGoldman && isGoldmanGitHub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else-if="isDarkMode" src="@/assets/icons/github-alt_white.svg" alt="Github">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="Github">
                </a>
                <a class="transition-transform hover:scale-110" href="https://youtu.be/0lhDVV1ZNJc?si=joPOfVlIp_qPtsR7" target="_blank" @mouseenter="isGoldmanVideo=true" @mouseleave="isGoldmanVideo=false">
                  <img v-if="isGoldman && isGoldmanVideo" class="w-7" src="@/assets/icons/youtube_hover.svg" alt="Youtube">
                  <img v-else-if="isDarkMode" class="w-7" src="@/assets/icons/youtube_white.svg" alt="Youtube">
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
          <div class="w-full rounded-md px-1 py-4 mb-3"
            :class="[isDarkMode ? 'bg-black-50 hover:bg-black-25' : 'bg-yellow hover:bg-yellow-50']"
            @mouseenter="isSbrp=true" @mouseleave="isSbrp=false">
            <div class="flex items-center mb-2">
              <p class="font-semibold text-base" :class="{'text-pink':isSbrp}">Skill Based Role Portal (SBRP)</p>
              <div class="ml-auto flex items-center">
                <a class="transition-transform hover:scale-110" href="https://github.com/xuanli286/IS212-g4t1" target="_blank" @mouseenter="isSbrpGithub=true" @mouseleave="isSbrpGithub=false">
                  <img v-if="isSbrp && isSbrpGithub" class="w-6" src="@/assets/icons/github-alt_hover.svg" alt="">
                  <img v-else-if="isDarkMode" class="w-6" src="@/assets/icons/github-alt_white.svg" alt="Github">
                  <img v-else class="w-6" src="@/assets/icons/github-alt.svg" alt="Github">
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
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const isDarkMode = ref(false);
const isAbout = ref(false);
const isResume = ref(false);
const isMachine = ref(false);
const isSentiment = ref(false);
const isSentimentGithub = ref(false);
const isSentimentSlide = ref(false);
const isWorld = ref(false);
const isWorldRedirect = ref(false);
const isWorldPdf = ref(false);
const isBeer = ref(false);
const isBeerSlide = ref(false);
const isIqma = ref(false);
const isIqmaGitHub = ref(false);
const isIqmaVideo = ref(false);
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

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style>
.panda {
  background: url(@/assets/panda.png);
  width: 80px;
  height: 113px;
  animation: walk 1s steps(12) infinite,
              forward 6s linear infinite;
}
@keyframes walk {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 960px;
  }
}
@keyframes forward {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(1200px);
  }
}

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