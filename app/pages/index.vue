<script setup lang="ts">
useSeoMeta({ title: 'CVLab - Crear tu CV', description: 'Builder de CV estilo cvmaker' })

const cv = useCvStore()
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto p-4 md:p-8 max-w-3xl">
      <h1 class="font-heading text-2xl text-primary mb-6">CVLab</h1>

      <CvProgressBar :percentage="cv.progressPercentage" />

      <form class="cv-form mt-6 space-y-6">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label for="firstName" class="block text-sm font-medium text-secondary mb-1">Nombre(s)</label>
            <input
              id="firstName"
              type="text"
              class="w-full rounded-lg border border-gray-300 p-2"
              :value="cv.firstName"
              @input="cv.setFirstName(($event.target as HTMLInputElement).value)"
            >
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-secondary mb-1">Apellido(s)</label>
            <input
              id="lastName"
              type="text"
              class="w-full rounded-lg border border-gray-300 p-2"
              :value="cv.lastName"
              @input="cv.setLastName(($event.target as HTMLInputElement).value)"
            >
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-secondary mb-1">Foto</label>
          <CvPhotoUpload @change="cv.setPhotoFile" />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-secondary mb-1">Correo electrónico</label>
          <input
            id="email"
            type="email"
            class="w-full rounded-lg border border-gray-300 p-2"
            :value="cv.email"
            @input="cv.setEmail(($event.target as HTMLInputElement).value)"
          >
        </div>

        <div>
          <label for="position" class="block text-sm font-medium text-secondary mb-1">Cargo/posición</label>
          <input
            id="position"
            type="text"
            class="w-full rounded-lg border border-gray-300 p-2"
            :value="cv.position"
            @input="cv.setPosition(($event.target as HTMLInputElement).value)"
          >
        </div>

        <div>
          <button
            type="button"
            class="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-100"
            @click="cv.toggleExtraFields"
          >
            {{ cv.showExtraFields ? 'Ocultar' : 'Mostrar' }} campos adicionales
          </button>
        </div>

        <CvProfileBlock
          :model-value="cv.profileSummary"
          @update:model-value="cv.setProfileSummary"
        />

        <CvRepeatableSection
          title="Experiencia laboral"
          add-button-label="Agregar experiencia laboral"
          @add="cv.addExperience"
        >
          <p class="text-sm text-gray-600 mb-2">
            Muestra lo que has hecho frente a lo que has conseguido: 4-6 líneas y dos o más logros.
          </p>
          <ul class="space-y-2">
            <li
              v-for="exp in cv.experiences"
              :key="exp.id"
              class="rounded bg-gray-50 p-2 text-sm"
            >
              <strong>{{ exp.title }}</strong>
              — {{ exp.company }} ({{ exp.period }})
              <p class="mt-1 text-gray-600">{{ exp.description }}</p>
            </li>
          </ul>
        </CvRepeatableSection>

        <CvRepeatableSection
          title="Habilidades"
          add-button-label="Agregar habilidad"
          @add="cv.addSkill"
        >
          <p class="text-sm text-gray-600 mb-2">
            Amplía tus áreas de conocimiento centrándote en habilidades duras relevantes.
          </p>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="sk in cv.skills"
              :key="sk.id"
              class="rounded bg-gray-100 px-2 py-1 text-sm"
            >
              {{ sk.name }}
            </li>
          </ul>
        </CvRepeatableSection>

        <CvRepeatableSection
          title="Educación"
          add-button-label="Agregar educación"
          @add="cv.addEducation"
        >
          <p class="text-sm text-gray-600 mb-2">
            Incluye tu educación (secundaria o terciaria), cursos o proyectos relevantes.
          </p>
          <ul class="space-y-2">
            <li
              v-for="edu in cv.educations"
              :key="edu.id"
              class="rounded bg-gray-50 p-2 text-sm"
            >
              <strong>{{ edu.degree }}</strong>
              — {{ edu.institution }} ({{ edu.period }})
            </li>
          </ul>
        </CvRepeatableSection>

        <CvSectionLibrary />
      </form>
    </div>
  </div>
</template>
