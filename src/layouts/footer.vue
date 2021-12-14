<template>
  <footer class="pt-32 relative overflow-x-hidden">
    <img src="../../public/shape__white2.png" class="opacity-20 absolute z-20
            h-32 -left-16 top-36" alt="vwhite-7">
    <img src="../../public/shape__white2.png" class="opacity-20 absolute z-20
            h-10 left-10 top-72" alt="vwhite-7">
    <img src="../../public/shape__white2.png" class="opacity-20 absolute z-20
            h-14 -right-6 top-28" alt="vwhite-7">
    <img src="../../public/shape__white2.png" class="opacity-20 absolute z-20
            h-5 right-10 top-52" alt="vwhite-7">
    <div class="w-8/12 mx-auto">
      <div class="lg:flex">
        <div class="flex-1 md:flex">
          <div class="flex-1 mb-10 md:mb-0" style="flex-basis: 25%;">
            <a class="text-2xl font-bold leading-relaxed inline-block
            mr-4 py-2 whitespace-nowrap uppercase text-white " href="#pablo">
              Red<span class="text-red-500">covid</span>
            </a>
            <p class="text-white leading-relaxed">
              Coronavirus disease (COVID-19) is <br>
              an infectious disease caused by <br> a
              new virus. The disease causes.
            </p>
          </div>
          <div class="flex-1 mb-10 md:mb-0" style="flex-basis: 10%;">
            <h3 class="text-white font-bold text-2xl py-2 mb-3">About Us</h3>
            <ul>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Home</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">About</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Service</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Portofolio</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">News Feeds</a> </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 md:flex">
          <div class="flex-1 mb-10 md:mb-0" style="flex-basis: 15%;">
            <h3 class="text-white font-bold text-2xl py-2 mb-3">Usefull Links</h3>
            <ul>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">WHO Information</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Covid-19 Wikipedia</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Service</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">CNN News</a> </li>
              <li class="mb-2"> <a href="#" class="text-white transition duration-500
              ease-in-out hover:text-red-500 font-bold">Worldometer Info</a> </li>
            </ul>
          </div>
          <div class="flex-1 mb-10 md:mb-0" style="flex-basis: 20%;">
            <h3 class="text-white font-bold text-2xl py-2 mb-3">Contact Us</h3>
            <div class="flex pl-2 mb-5">
              <div class="bg-gray-500 p-2 rounded-full flex items-center justify-center w-9 h-9">
                <font-awesome-icon :icon="['fas', 'phone-alt']"
                class="text-white" />
              </div>
              <div class="pl-4">
                <p class="font-bold text-white">+880-2-9898796</p>
                <p class="font-bold text-white">+880-2-9880440</p>
              </div>
            </div>
            <div class="flex pl-2 mb-5">
              <div class="bg-gray-500 p-2 rounded-full flex items-center justify-center w-9 h-9">
                <font-awesome-icon :icon="['fa', 'map-marked-alt']"
                class="text-white" />
              </div>
              <div class="pl-4">
                <p class="font-bold text-white">Institute of Epidemiology,
                  Disease Control & Research (IEDCR) Mohakhali, Dhaka-1212</p>
              </div>
            </div>
            <div class="flex pl-2 mb-5">
              <div class="bg-gray-500 p-2 rounded-full flex items-center justify-center w-9 h-9">
                <font-awesome-icon :icon="['fa', 'envelope']"
                class="text-white" />
              </div>
              <div class="pl-4">
                <p class="font-bold text-white">director@iedcr.gov.bd <br> iedcrit@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-500 my-12" style="height: 1px"></div>
    <div class="w-8/12 mx-auto pb-12 copyr flex justify-between">
      <p class="text-white text-xs md:text-base
       font-bold"> © 2020 Ncov Ltd. All Rights Reserved.</p>
      <p class="text-white text-xs md:text-base
       font-bold">Help Desk 16247</p>
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faPhoneAlt, faMapMarkedAlt, faEnvelope);

export default {
  name: 'Footer',
};

</script>

<style>
footer{
    background-color: #151D41;
}
.copyr {
  background-color: #151D41;
}
</style>
