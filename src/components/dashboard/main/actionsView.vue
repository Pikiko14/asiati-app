<template>
  <div class="row q-mt-lg">
    <div class="col-12">
      <q-markup-table class="shadow-1 round-10">
        <thead>
          <tr>
            <th class="text-left" v-for="(item, idx) in actions" :key="idx">
              {{ actionsTypes[item.action_type] }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left" v-for="(item, idx) in actions" :key="idx">
              {{ item.value }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'ActionMainComponent',
  setup() {
    // references
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actionsTypes: any = {
      onsite_web_app_view_content: "Vista de contenido",
      landing_page_view: "Vista de página de destino",
      "onsite_conversion.post_save": "Conversión onsite guardada",
      page_engagement: "Compromiso con la página",
      post_engagement: "Compromiso con la publicación",
      view_content: "Vista de contenido",
      onsite_web_view_content: "Vista de contenido en web onsite",
      video_view: "Vista de video",
      omni_view_content: "Vista de contenido omni",
      "offsite_conversion.fb_pixel_view_content": "Conversión fuera de sitio con píxel de Facebook - Vista de contenido",
      post_reaction: "Reacción a publicación",
      link_click: "Clic en enlace"
    }

    const companiesStore = useCompaniesStore()

    // computed
    const actions = computed(() => {
      return companiesStore.metrics.actions
    })

    // return data
    return {
      actions,
      actionsTypes
    }
  }
})
</script>
