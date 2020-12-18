<template>
  <div id="app" class="py-8 z-40 relative min-h-screen">

    <header>
      <div class="container mx-auto px-8">
        <h1 class="text-center font-title text-4xl md:text-5xl text-primary flex justify-center items-center mb-8"><img
            src="@/assets/globe.svg" class="mr-2" alt=""> HEGIC </h1>
        <p class="text-center text-lg text-secondary font-medium font-body"> A curated collection of resources from the
          <a href="https://hegic.co" class="uppercase font-title font-medium text-primary" target="_blank">Hegic</a> ecosystem.</p>
      </div>
    </header>
    <main class="">
      <div class="container mx-auto px-8">
        <category v-for="category in categories" :category="category" :key="category.title"/>
      </div>
      <div class="container mx-auto px-8 py-8 md:py-12">
        <div class="flex flex-wrap -mx-8">
          <div class="w-full lg:w-1/2 px-8">
            <category-title>Documents</category-title>
            <div class="flex grid gap-8 grid-cols-1 sm:grid-cols-2">
              <document v-for="document in documents" :title="document.title" :url="document.url" :key="document.title"/>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-8">
            <category-title>Join the community</category-title>
            <div class="flex -mx-2">
              <social-item :name="social.name" :url="social.url" :icon="social.icon" v-for="social in socials" :key="social.name"/>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mx-auto px-8 pt-12">
        <p class="text-center text-sm mb-2">Made by<a href="https://twitter.com/CryptoSamurai" target="_blank"
                                                      class="ml-1 text-primary">🧙‍♂ CryptoSamurai</a>.
          <a href="https://etherscan.io/address/0x11Ac41eF94D95197525620275e11a5Cb8c32363C" target="_blank"> Buy me 🍪</a>. <a href="https://github.com/" class="underline" target="_blank"> Contribute</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import categories from '@/data/ecosystem.json'
import documents from '@/data/documents.json'
import socials from '@/data/socials.json'
import Category from "@/components/Category";
import CategoryTitle from "@/components/CategoryTitle";
import SocialItem from "@/components/SocialItem";
import Document from "@/components/Document";

export default {
  name: 'App',
  components: {Document, SocialItem, CategoryTitle, Category},
  data() {
    return {
      categories,
      documents,
      socials
    }
  },
  metaInfo: {
    title: 'HEGIC WORLD | all things HEGIC',
    titleTemplate: null
  }
}
</script>

<style lang="scss">
#app {
  color: #ddd
}

html, body {
  min-height: 100vh;
  position: relative;
  background-color: #121c36;
  font-family: 'Jura', sans-serif;
  font-size: 1rem;

  &:before {
    content: '';
    position: absolute;
    background: url("assets/bg-pattern.svg");
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    z-index: 0;
    left: 0;
  }
}

header {
  img {
    width: 40px;
    height: auto;
    @screen md {
      width: 60px;
    }
  }
}

main {
  min-height: calc(100vh - 184px);
}
</style>
