<template>
  <div class="grid-container">
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.spend" :label="'Gasto de campaña'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.impressions" :isPrice="false" :label="'Impresiones totales'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="metaMetrics.clicks" :isPrice="false" :label="'Clic totales'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="costByClick" :isPrice="false" :label="'Costo por Clic'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/yellow-calculator.svg'" :title="'Meta'" :amount="clickOnLink"
        :label="'Click en enlace'" :isPrice="false" :isYellow="true" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="destinyPageView" :isPrice="false" :label="'Vista pagina destino'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="videoViews" :isPrice="false" :label="'Vista video'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="reactionToPost" :isPrice="false" :label="'Reacción publicación'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :title="'Meta'" :amount="pageEngagement" :isPrice="false" :label="'Compromiso página'" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <MainCard :icon="'img:/images/yellow-calculator.svg'" :title="'Meta'" :amount="postEngagement" :isYellow="true"
        :isPrice="false" :label="'Compromiso publicación'" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import MainCard from '../partials/mainCard.vue';
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'MainDashboardComponent',
  components: {
    MainCard
  },
  setup() {
    // references
    const companiesStore = useCompaniesStore();

    // computed
    const metaMetrics = computed(() => {
      return companiesStore.metrics
    });

    const costByClick = computed(() => {
      const total = (metaMetrics.value.spend / metaMetrics.value.clicks);
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const clickOnLink = computed(() => {
      let clickOnLink = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'link_click') {
            clickOnLink = item.value;
          }
          return item;
        });
      }
      return clickOnLink;
    });

    const destinyPageView = computed(() => {
      let viewOnPage = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'landing_page_view') {
            viewOnPage = item.value;
          }
          return item;
        });
      }
      return viewOnPage;
    });

    const videoViews = computed(() => {
      let videoView = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'video_view') {
            videoView = item.value;
          }
          return item;
        });
      }
      return videoView;
    });

    const reactionToPost = computed(() => {
      let reactionPost = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'post_reaction') {
            reactionPost = item.value;
          }
          return item;
        });
      }
      return reactionPost;
    });

    const pageEngagement = computed(() => {
      let engagement = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'page_engagement') {
            engagement = item.value;
          }
          return item;
        });
      }
      return engagement;
    });

    const postEngagement = computed(() => {
      let engagement = 0;
      if (metaMetrics.value && metaMetrics.value.actions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        metaMetrics.value?.actions.map((item: any) => {
          if (item.action_type === 'post_engagement') {
            engagement = item.value;
          }
          return item;
        });
      }
      return engagement;
    });

    // return data
    return {
      videoViews,
      metaMetrics,
      costByClick,
      clickOnLink,
      postEngagement,
      pageEngagement,
      reactionToPost,
      destinyPageView
    }
  }
})
</script>
