<template>
  <div class="row q-mt-lg" v-if="actions && actions.length > 0">
    <div class="col-12">
      <span class="text-primary text-h5 text-weight-semi-bold">
        Metricas de acciones en la campaña
      </span>
    </div>
    <div class="col-12">
      <q-table :pagination="initialPagination" flat bordered grid :rows="actions" :columns="columns" row-key="name"
        hide-header>
        <template v-slot:top-right>
        </template>
      </q-table>
    </div>
  </div>
</template>
<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'ActionMainComponent',
  setup() {
    // references
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
      link_click: "Clic en enlace",
      "consite_conversion.total_messaging_connection": 'Conexión de mensaje'
    };
    const columns: any = [
      {
        name: 'desc',
        required: false,
        label: 'Acción',
        align: 'left',
        field: (row: any) => actionsTypes[row.name],
        sortable: false
      },
      {
        name: 'valor',
        align: 'center',
        field: (row: any) => `${actionsTypes[row.action_type] ? actionsTypes[row.action_type] : row.action_type.split('.').pop()}: ${row.value}`,
        sortable: false
      },
    ];
    const companiesStore = useCompaniesStore();
    const initialPagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 8
    });

    // computed
    const actions = computed(() => {
      return companiesStore.metrics.actions
    })

    // return data
    return {
      columns,
      actions,
      actionsTypes,
      initialPagination,
    }
  }
})
</script>
