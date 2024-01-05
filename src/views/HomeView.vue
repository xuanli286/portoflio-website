<template>
  <div class="mx-auto max-w-screen-sm pt-20 px-10 text-grey text-justify text-sm leading-relaxed">
    <div class="flex">
      <img class="rounded-full w-36 border-3 border-grey-25" src="@/assets/me.jpg" alt="">
      <div class="my-auto pl-10">
        <p class="text-xl font-semibold text-blue">Low Xuanli</p>
        <p>Aspiring Business Analyst</p>
        <div class="flex mt-6">
          <a href="/Resume_Low_Xuanli.pdf" target="_blank" class="rounded-full border-pink border-2 p-1 mr-2 w-24 flex items-center justify-center shadow-lg hover:shadow-pink transition-transform hover:scale-105 cursor-pointer" @mouseenter="isResume=true" @mouseleave="isResume=false">
            <p class="mr-1 font-medium">Resume</p>
            <img class="w-2" :style="{ transform: isResume ? 'translateY(-5px)' : 'translateY(0)' }" src="@/assets/icons/window.svg" alt="">
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
      <p class="text-purple text-xl font-medium mb-2">Experience</p>
      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
          hi
        </div>
        <div class="col-span-2">
          hi
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isAbout = ref(false);
const isResume = ref(false);
</script>