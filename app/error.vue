<script setup lang="ts">
const error = useError();
import type {NuxtError} from '#app'

const props = defineProps<{ error: NuxtError }>()

const errorCode = computed(() => props.error.statusCode ?? 500)
const errorMessage = computed(() => props.error.statusMessage ?? 'Something went wrong')

const handleError = () => {
  clearError({redirect: "/"});
};
</script>

<template>
  <div class="flex grow flex-col text-center">
    <section class="flex items-center h-full p-16">
      <div
          class="container flex flex-col items-center justify-center px-5 mx-auto my-8 p-12"
      >
        <div class="max-w-md text-center">
          <h2 class="font-heading text-8xl dark:text-gray-600">
            <span class="sr-only">Error</span>{{ errorCode }}
          </h2>
          <p class="text-2xl md:text-3xl message">{{ errorMessage }}</p>
          <Btn
              class="btn btn-primary btn-sm md:btn-md"
              @click="handleError"
              btn-text="Back to homepage"
              icon="ion:home-outline"
              icon-position="left"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  display: flex;
  background-color: var(--color-neutral-100);
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
}
</style>
