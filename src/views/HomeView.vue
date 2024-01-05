<template>
  <div class="mx-auto max-w-screen-sm pt-24 px-10 text-grey text-justify text-sm leading-relaxed">
    <div class="flex">
      <img class="rounded-full w-32" src="@/assets/me.jpg" alt="">
      <div class="my-auto pl-8">
        <p class="text-xl font-semibold text-blue">Low Xuanli</p>
        <p>Aspiring Business Analyst</p>
        <div class="rounded-2xl border-pink border-2 p-1 w-20 mt-5 text-xs flex items-center justify-center shadow-lg hover:shadow-pink cursor-pointer" @mouseenter="isResume=true" @mouseleave="isResume=false">
          <p class="mr-1">Resume</p>
          <img class="w-2" :class="{'animate-bounce': isResume}" src="@/assets/icons/window.svg" alt="">
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