<template>
  <div class="my-skills2">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <h6 class="sub-title main-color mb-15">Our Portfolio</h6>
        <h2>Mis habilidades <span class="fw-200">destacadas</span></h2>
      </div>
      <div v-if="!IsLoading" class="row md-marg">
        <div v-for="(skill, index) in skills" class="col-lg-2 col-md-4 col-6">
          <div class="item mb-30">
            <div class="box-bord main-bg">
              <div class="img skill-icon">
                <!-- <img v-if="index" :src="skill.img" alt=""> -->
                <Icon :name="skill.icon" size="55"></Icon>
              </div>
             <!--  <span class="value" >{{ skill.percentage }}</span> -->
            <h6 class="fz-18">{{ skill.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus, NuxtError, AsyncData } from '#app';


const { data: skills, status } = await useFetch<Skill[]>('/api/skills', {
  key: 'skills',  
  server: true,
  immediate: true,
});

const IsLoading = computed(() => status.value === 'pending');


</script>

<style scoped>

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>