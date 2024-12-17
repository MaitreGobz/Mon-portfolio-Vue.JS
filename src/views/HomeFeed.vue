<script setup>
import HomeContent from '@/components/HomeContent.vue';
import ProjectContent from '@/components/ProjectContent.vue';
import SkillSection from '@/components/SkillSection.vue';
import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <main>
    <div id="aboutMe">
      <HomeContent/>
      <SkillSection/>
    </div>
    <ProjectContent/>
    <ContactForm/>
  </main>
</template>

<style scoped>

#aboutMe {
  background-image: url(/src/assets/Images/blue-wavy-background.jpg);
  background-size: auto;
}

</style>
