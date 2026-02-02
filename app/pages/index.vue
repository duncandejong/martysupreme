<template xmlns="http://www.w3.org/1999/html">

  <!--
    <Navigation
        :menuItems="[
            { link: '#synopsis', label: 'Verhaal' },
            { link: '#videos', label: 'Video\'s' },
            { link: '#tickets', label: 'Tickets' },
            { link: '#kleurplaat', label: 'Kleurplaat' },
            { link: '#gallery', label: 'Foto\'s' },
          ]"
        :useScrollSpy="true"
        :scrollSpyOffset="100"
    />
  -->

  <Hero vimeo-id="1152231167">
    <ClientOnly>
      <div
          class="label self-end hidden sm:flex uppercase absolute mt-0  flex-col gap-2 items-end">
        <div class="bg-white whitespace-nowrap px-2 text-sm md:text-base lg:text-lg ">
          <span v-if="isAfterRelease" class="text-primary-dark font-bold">Nu</span><span v-else
                                                                                         class="text-primary-dark font-bold">{{
            formatDate(movie.releaseDate, 'dayMonth')
          }}</span> in de bioscoop
        </div>
        <!-- show this label only before premiere date -->
        <div
            v-if="!isBeforePremiere"
            class="bg-primary-darker text-white whitespace-nowrap px-2 text-sm md:text-base lg:text-lg">
          <span class="text-yellow-200 font-bold">13</span>, <span class="text-yellow-200 font-bold">14</span>
          en
          <span
              class="text-yellow-200 font-bold">15 januari</span> in voorpremi&egrave;re
        </div>
      </div>

    </ClientOnly>
    <div
        class="w-full flex flex-col justify-center items-center grow gap-4 md:gap-6 pb-4 md:pb-6"
    >
      <NuxtImg
          :alt="movie.title"
          :src="movie.titleImage"
          sizes="sm:500px lg:1000px"
          class="mt-12 w-[90%] sm:w-[80%] flex justify-center object-contain flex-col items-center max-h-[50vh] min-h-[200px]"
          format="avif,webp"
          loading="lazy"
      />

      <Btn
          btn-text="Bekijk trailer"
          class="btn-primary btn-lg md:btn-xl lg:btn-2xl shadow-sm"
          icon="ion:play"
          @click="vfm.open('trailer'); $gtm.push({ event:'cta_click',
          cta_id: 'trailer-button',
          cta_text: 'Trailer' })"
      />

      <div class="text-white flex text-4xl md:text-5xl gap-5 md:gap-6 leading-3 justify-center items-center">
        <!--              <a-->
        <!--                  href="https://www.facebook.com/detattasfilm/"-->
        <!--                  target="_blank"-->
        <!--                  rel="noopener"-->
        <!--                  aria-label="Facebook"-->
        <!--                  class="hover:opacity-80"-->
        <!--                  @click="gtm.push({ event:'social_click', platform_name: 'Facebook' })"-->
        <!--              >-->
        <!--                <Icon name="ion:logo-facebook"/>-->
        <!--              </a>-->
        <a
            href="https://www.instagram.com/martysupreme/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="hover:opacity-80"
            @click="gtm.push({ event:'social_click', platform_name: 'Instagram' })"
        >
          <Icon name="ion:logo-instagram"/>
        </a>
        <!--              <a-->
        <!--                  href="https://www.tiktok.com/@detattasfilm"-->
        <!--                  target="_blank"-->
        <!--                  rel="noopener"-->
        <!--                  aria-label="TikTok"-->
        <!--                  class="hover:opacity-80"-->
        <!--                  @click="gtm.push({ event:'social_click', platform_name: 'TikTok' })"-->
        <!--              >-->
        <!--                <Icon name="ion:logo-tiktok"/>-->
        <!--              </a>-->
        <!--                      <a-->
        <!--                          href="https://open.spotify.com/track/3un2WIIEbZ1gUUQVTdXPmt?si=4fa797400b6b4d4b&nd=1&dlsi=271a059340a84e97"-->
        <!--                          target="_blank"-->
        <!--                          rel="noopener"-->
        <!--                          aria-label="Spotify"-->
        <!--                          class="hover:opacity-80"-->
        <!--                          @click="gtm.push({ event:'social_click', platform_name: 'Spotify' })">-->
        <!--                        <Icon name="mdi:spotify"/>-->
        <!--                      </a>-->
        <!--                                  <a-->
        <!--                                      href="https://www.linkedin.com/showcase/planet-soil-movie/"-->
        <!--                                      target="_blank"-->
        <!--                                      rel="noopener"-->
        <!--                                      aria-label="Linkedin"-->
        <!--                                      class="hover:opacity-80"-->
        <!--                                      @click="gtm.push({ event:'social_click', platform_name: 'LinkedIn' })"-->
        <!--                                  >-->
        <!--                                    <Icon name="ion:logo-linkedin"/>-->
        <!--                                  </a>-->
        <!--                          <a-->
        <!--                              href="https://www.youtube.com/@PlanetSoilMovie"-->
        <!--                              target="_blank"-->
        <!--                              rel="noopener"-->
        <!--                              aria-label="YouTube"-->
        <!--                              class="hover:opacity-80"-->
        <!--                              @click="gtm.push({ event:'social_click', platform_name: 'YouTube' })"-->
        <!--                          >-->
        <!--                            <Icon name="ion:logo-youtube"/>-->
        <!--                          </a>-->
      </div>
    </div>
  </Hero>


  <section
      class="text-center px-3 py-2 md:px-4 md:py-2.5 bg-linear-to-r from-tertiary to to-tertiary-lighter bg-silver ">
    <div class="site-width">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight uppercase">
        Dream Big</h2>
    </div>
  </section>

  <section
      class="section-padding synopsis clear-both bg-tertiary-lightest"
      id="synopsis">
    <div class="site-width relative">
      <div
          class="grid md:grid-cols-3 justify-center gap-6 items-center"
      >

        <NuxtImg
            alt="Poster"
            v-bind:src="movie.poster"
            sizes="sm:400px md:750px"
            format="avif,webp"
            placeholder
            class="max-h-87.5 md:max-h-162.5 mx-auto object-contain rounded md:rounded-lg select-none pointer-events-none shadow md:shadow-lg shadow-neutral-200"
            loading="lazy"
        />

        <div class="md:order-2 md:col-span-2 p-4 md:p-0">
          <!--          <h3 class="text-xl md:text-2xl font-semibold text-secondary">-->
          <!--            Een meedogenloze jacht op succes.</h3>-->
          <div class="prose lg:text-lg">
            <p class="lead">
              Marty Mauser (Timothée Chalamet) is een slimme maar eigenwijze jongen met een droom waar niemand in
              gelooft. In zijn zoektocht naar succes gaat hij tot het uiterste en belandt in een wereld vol verleiding,
              risico’s en uitdagingen. Terwijl hij alles op alles zet om zijn droom waar te maken, ontdekt hij hoe hoog
              de prijs van succes echt is.
            </p>
          </div>
          <div class="credits flex flex-row gap-1">
            <LazySvgoKijkwijzerLeeftijd16 class="kijkwijzer"/>
            <LazySvgoKijkwijzerGeweld class="kijkwijzer"/>
            <LazySvgoKijkwijzerGrofTaalgebruik class="kijkwijzer"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
      class="text-center flex flex-col justify-center items-center px-3 py-2 md:px-4 md:py-3 bg-linear-to-r from-tertiary-darker to-tertiary-dark  text-tertiary-lightest">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading leading-tight uppercase">
      <ClientOnly>
        <span v-if="isAfterRelease">Nu</span><span v-else>{{ formatDate(movie.releaseDate, 'dayMonth') }}</span>
        in de bioscoop

      </ClientOnly>
    </h2>
    <div
        v-if="!isBeforePremiere"
        class="bg-yellow-200 text-tertiary-dark uppercase whitespace-nowrap px-2 text-lg md:text-xl lg:text-2xl shadow">
      <span class="text-primary-dark font-bold">13</span>, <span class="text-primary-dark font-bold">14</span> en <span
        class="text-primary-dark font-bold">15 januari</span> in voorpremi&egrave;re
    </div>
  </section>

  <section id="tickets"
           class="section-padding bg-linear-to-b to-tertiary-lighter from-tertiary-lightest">
    <ClientOnly>
      <FloatingButton/>
    </ClientOnly>
    <div class="max-w-3xl mx-auto z-10 relative">
      <h3 class="section-heading flex text-tertiary-dark items-center gap-3 uppercase">
        Tickets
        <Icon name="ion:ticket" class="icon"/>
      </h3>
      <div class=" sm:text-base md:text-lg lg:text-lg relative z-10">
        <ClientOnly>
          <MooveeTickets
              ref="mooveeContainer"
              :moovee-key="mooveeApiKey"
              :initial-cinemas="5"
              :load-more-cinemas="10"
              :data-layer-events="true"
              logos="light"
          />
        </ClientOnly>
      </div>
    </div>

  </section>
  <section id="gallery" class="section-padding section-gallery relative bg-white">
    <div class="site-width">
      <h3 class="section-heading inline-flex text-tertiary-lighter">
        Foto's</h3>
    </div>
    <div class="site-width">
      <Gallery class="ring-2 md:ring-4 ring-tertiary bg-secondary-darkest" :images="galleryImages"/>
    </div>
    <div class="pt-4 md:pt-6" v-if="footerLogos">
      <FooterImages :images="footerLogos"/>
    </div>
    <div class="site-width">
      <div class="flex justify-end items-center w-full mt-3 md:mt-5 gap-4">
        <NuxtLink to="https://independentfilms.nl/disclaimer-privacy-verklaring/" target="_blank" external
                  class="text-sm md:text-base underline hover:no-underline text-center text-tertiary-lighter px-1 rounded-sm">
          Privacyverklaring
        </NuxtLink>
        <NuxtLink v-if="cookieBot" to="/cookieverklaring" target="_blank"
                  class="text-sm md:text-base underline hover:no-underline text-center text-tertiary-lighter px-1 rounded-sm">
          Cookieverklaring
        </NuxtLink>
      </div>
    </div>
  </section>
  <Modal id="trailer" :embed-aspect-width="16" :embed-aspect-height="9">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Sz17YJrah-E"
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
    ></iframe>
  </Modal>

</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useDateFormat} from "~/composables/useDateFormat";
import {useVfm} from "vue-final-modal";
import {useGtm} from "@gtm-support/vue-gtm";
import Hero from "~/components/Hero.vue";
import Btn from "~/components/Btn.vue";
import FloatingButton from "~/components/FloatingButton.vue";
import MooveeTickets from "~/components/MooveeTickets.vue";
import Gallery from "~/components/Gallery.vue";
import FooterImages from "~/components/FooterImages.vue";
import Modal from "~/components/Modal.vue";

definePageMeta({layout: "default", key: "index"});

const gtm = useGtm();

const {formatDate} = useDateFormat();

const vfm = useVfm();
const runtimeConfig = useRuntimeConfig();
const movieTitle = runtimeConfig.public.movieTitle;
const mooveeApiKey = runtimeConfig.public.mooveeApiKey;
const cookieBot = runtimeConfig.public?.cookiebotId ?? 'false';
// const cookieScript = runtimeConfig.public?.cookiescriptId ?? 'false';

const movie = {
  title: movieTitle,
  titleImage: "title.png",
  poster: "poster.jpg",
  releaseDate: new Date("2026-02-19T00:00:00+01:00"),
};

const isAfterRelease = computed(() => new Date() >= movie.releaseDate)
const isBeforePremiere = computed(() => new Date("2026-02-15T23:59:59") <= new Date());

const footerLogos = [
  {img: "/logo-belga-films.png", alt: "Belga Films"},
  {img: "/logo-central.png", alt: "Central"},
  {img: "/logo-independent-films.png", alt: "Independent Films"},
  {img: "/logo-a24.png", alt: "A24"},
];
const galleryImages = [
  {
    img: "/martysupreme-01.jpg",
    alt: "Marty Supreme",
  },
  {
    img: "/martysupreme-02.jpg",
    alt: "Marty Supreme",
  },
  {
    img: "/martysupreme-03.jpg",
    alt: "Marty Supreme",
  },
  {
    img: "/martysupreme-04.jpg",
    alt: "Marty Supreme",
  },
  {
    img: "/martysupreme-05.jpg",
    alt: "Marty Supreme",
  },
  {
    img: "/martysupreme-06.jpg",
    alt: "Marty Supreme",
  }
];


</script>

<style>
.section-gallery {
  background-color: var(--color-neutral-200);
  background-image: url("/bg-gallery.jpg");
  /* background-image: linear-gradient(103.23deg, #FEFA5A 0%, #FC6923 74%, #FC4B28 100%); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.bg-silver {
  background-image: url("/bg-silver.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
