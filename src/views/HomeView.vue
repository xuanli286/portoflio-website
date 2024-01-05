<template>
  <div class="mx-auto max-w-screen-sm py-20 px-10 text-grey text-justify text-sm leading-relaxed">
    <div class="flex">
      <img class="rounded-full w-36 border-3 border-grey-25" src="@/assets/me.jpg" alt="">
      <div class="my-auto pl-10">
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

    <div class="mt-10" @mouseenter="isAbout=true" @mouseleave="isAbout=false">
      <p class="text-purple text-xl font-medium mb-5">About</p>
      <p :class="{'animate-pulse': isAbout}">Hi, I'm Xuanli.</p> 
      <p class="mt-5">
        A third-year student in SMU, pursuing a degree in Information Systems with a dual track in Business Analytics and Digitalisation & Cloud Solutions. I'm fueled by a strong passion for data, actively seeking opportunities to expand my experience in the field. 
      </p>
      <p class="mt-5">
        Eager to take on roles in data or business analysis, I'm committed to advancing my skills and contributing to impactful projects.
      </p>
    </div>

    <div class="mt-10">
      <p class="text-purple text-xl font-medium mb-3">Experience</p>
      <a href="https://www.marinachain.io/" class="grid grid-cols-3 gap-2 py-1 hover:bg-yellow">
        <div class="col-span-1">
          <p class="text-grey-50">May 2023 - Aug 2023</p>
        </div>
        <div class="col-span-2">
            <div class="flex items-center">
            <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/icons/marinachain_logo.png" alt="">
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
            <img class="w-20 mr-1" src="@/assets/icons/django.svg" alt="">
            <img class="w-14 mr-1" src="@/assets/icons/vue.svg" alt="">
            <img class="w-[88px]" src="@/assets/icons/postgre.svg" alt="">
          </div>
        </div>
      </a>
      <a href="https://www.hsbc.com/" class="grid grid-cols-3 gap-2 py-1 hover:bg-yellow mt-3">
        <div class="col-span-1">
          <p class="text-grey-50">Sep 2020 - Feb 2021</p>
        </div>
        <div class="col-span-2">
            <div class="flex items-center">
            <img class="w-12 mr-2 border-2 border-purple rounded-full p-1 shadow-lg shadow-purple" src="@/assets/icons/hsbc_logo.png" alt="">
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
            <img class="w-[49px] mr-1" src="@/assets/icons/jira.svg" alt="">
            <img class="w-24" src="@/assets/icons/confluence.svg" alt="">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isAbout = ref(false);
const isResume = ref(false);
</script>

<style>
  .custom-list {
    list-style-image: url('@/assets/icons/bullet.svg');
  }
</style>