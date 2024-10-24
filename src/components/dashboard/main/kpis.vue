<template>
  <div class="full-width">
    <q-tabs v-model="tab" dense indicator-color="primary" align="justify" narrow-indicator>
      <q-tab name="flow" label="Flujo de caja" />
      <q-tab name="operation" label="Operación" />
      <q-tab name="tracking" label="Tracking" />
      <q-tab name="marketing" label="Marketing" />
      <q-tab name="flow_money" label="Flujo de caja esperado" />
      <q-tab name="pygdelivered" label="P&G ENTREGADO" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <!--tab flujo-->
      <q-tab-panel name="flow">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">INVERSIÓN PAUTA ($)</span><br>
                    <span>
                      {{ utils.formatPrice(metaMetrics.spend) }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">VENTAS SOBRE INVERSIÓN (ROAS)</span><br>
                    <span>
                      {{ roas }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">TOTAL RECAUDO ($)</span><br>
                    <span>
                      {{ utils.formatPrice(totalCollection) }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">PEDIDOS ENTREGADOS ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.totalOrdersDropiDelivered) }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">% FC (RECAUDO SOBRE INVERSIÓN)</span><br>
                    {{ collectionOverInversion }}%
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">Tasa devoluicion Historica</span><br>
                    {{ taxDevolution }}%
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6 q-p-md">
                    <span class="text-bold">Tasa cancelación historica</span><br>
                    {{ taxCancelled }}%
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab flow-->

      <!--tab operacion-->
      <q-tab-panel name="operation">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">VENTAS SHOPIFY($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.shopify.totalShopify) }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">PEDIDOS SHOPIFY</span><br>
                    <span>
                      {{ ordersMetrics.shopify.totalOrderShopify }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-mt-sm">
                    <span class="text-bold">VENTAS ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.totalMoneyInDropi) }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md q-mt-sm">
                    <span class="text-bold">PEDIDOS GENERADOS (QT)</span><br>
                    <span>
                      {{ ordersMetrics.totalDropiOrders }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-l-md q-mt-sm">
                    <span class="text-bold">PEDIDOS SUBIDOS A PLATAFORMA (QT)</span><br>
                    <span>
                      {{ ordersMetrics.totalDropiOrders - ordersMetrics.cancelledAndRejectedOrders -
                        ordersMetrics.guiasAnuladas }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md q-mt-sm">
                    <span class="text-bold">% EFECTIVIDAD CONFIRMACIONES</span><br>
                    <span>
                      {{ ((ordersMetrics.totalDropiOrders - ordersMetrics.cancelledAndRejectedOrders -
                        ordersMetrics.guiasAnuladas) / ordersMetrics.totalDropiOrders * 100).toFixed(2) }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab operacion-->

      <!--tab tracking-->
      <q-tab-panel name="tracking">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">PEDIDOS ENTREGADOS (QT)</span><br>
                    <span>
                      {{ ordersMetrics.deliveredDropiOrders }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">DEVUELTOS (QT)</span><br>
                    <span>
                      {{ ordersMetrics.returnedDropiOrders }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      PENDIENTES (QT)</span><br>
                    <span>
                      {{ ordersMetrics.pendingDropiOrders }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">CANCELADOS (QT)</span><br>
                    <span>
                      {{ ordersMetrics.cancelledDropi }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      PENDIENTES DE CONFIRMACIÓN (QT)</span><br>
                    <span>
                      {{ ordersMetrics.pendingConfirmationDropiOrders }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">RECHAZADOS (QT)</span><br>
                    <span>
                      {{ ordersMetrics.rejectedDropi }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="text-bold">% EFECTIVIDAD ENTREGAS</span><br>
                {{ porcentDelivered }}%
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab tracking-->

      <!--tab flujo-->
      <q-tab-panel name="marketing">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">CPC (Costo por clic)</span><br>
                    <span>
                      ${{ costByClick }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      CTR (CLIC TO RATE)</span><br>
                    <span>
                      {{ clickToRate }}%
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">CVR (TASA DE CONVERSION)</span><br>
                    <span>
                      {{ cvrTax }}%
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">CPM (COSTO X 1000 IMPRESIONES)</span><br>
                    <span>
                      {{ utils.formatPrice(costBy1000) }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="text-bold">CPA (COSTO POR COMPRA)</span><br>
                {{ utils.formatPrice(costBySell) }}
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab flow-->

      <!--tab flujo caja-->
      <q-tab-panel name="flow_money">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">TASA DE DEVOLUCIONES</span><br>
                    <span>
                      {{ devolutionRate }}%
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      TASA DE CANCELACIÓN</span><br>
                    <span>
                      {{ cancelledRate }}%
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">INGRESO ESPERADO ($)</span><br>
                    <span>
                      {{ utils.formatPrice(totalIncoming) }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">SUBIDO A PLATAFORMA ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.totalMoneyInDropi) }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="text-bold">% FC ESPERADO (RECAUDO ESPERADO SOBRE INVERSIÓN)</span><br>
                {{ collectionOverInvertion }}%
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab flow-->

      <!--tab de P&G entregago-->
      <q-tab-panel name="pygdelivered">
        <q-markup-table class="q-pa-none shadow-0">
          <tbody>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">Ingreso ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.totalOrdersDropiDelivered) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      DESC IVA ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.descIva) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      COSTO PRODUCTO ($)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.productCosto) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      IVA A FAVOR</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.ivaAFavor) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      UTILIDAD BRUTA</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.utilidadBruta) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      INVERSIÓN EN PAUTA</span><br>
                    <span>
                      {{ utils.formatPrice(metaMetrics.spend) }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      UTILIDAD BRUTA (CON PAUTA)</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.utilidadBrutaConPauta) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      FLETE</span><br>
                    <span>
                      {{ utils.formatPrice(metaMetrics.flete) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      FLETE DEVOLUCIÓN</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.devolucionFlete) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      FULL FILMENT</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.devolucionFlete) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      COSTO OPERATIVO</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.costoOperativo) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      4 X 1000</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.cuatroPorMil) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      UTILIDAD AI</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.utilidadIa) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      PROVISIÓN ICA</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.provisionIca) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="text-bold">
                      PROVISIÓN RENTA</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.utilidadIa) || 0 }}
                    </span>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <span class="text-bold">
                      UTILIDAD NETA</span><br>
                    <span>
                      {{ utils.formatPrice(ordersMetrics.provisionIca) || 0 }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-tab-panel>
      <!--end tab flow-->
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { Utils } from 'src/utils/utils';
import { computed, defineComponent, ref } from 'vue'
import { useCompaniesStore } from 'src/stores/companies';

export default defineComponent({
  name: 'KpisComponent',
  setup() {
    // references
    const tab = ref<string>('flow');
    const utils = new Utils('dashboard');
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

    const ordersMetrics = computed(() => {
      return companiesStore.metricsOrders;
    });

    const roas = computed(() => {
      const total = (ordersMetrics.value.shopify.totalShopify / metaMetrics.value.spend);
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const collectionOverInversion = computed(() => {
      const total = (ordersMetrics.value.collectionDropi / metaMetrics.value.spend) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const porcentDelivered = computed(() => {
      const total = ((ordersMetrics.value.deliveredDropiOrders / ordersMetrics.value.totalDropiOrders) * 100);
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const clickToRate = computed(() => {
      const total = ((metaMetrics.value.spend / metaMetrics.value.impressions));
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const cvrTax = computed(() => {
      const total = ((ordersMetrics.value.totalDropiOrders / destinyPageView.value));
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const costBy1000 = computed(() => {
      const total = (metaMetrics.value.spend / (metaMetrics.value.impressions / 1000));
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const costBySell = computed(() => {
      const total = (metaMetrics.value.spend / ordersMetrics.value.totalDropiOrders);
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const cancelledRate = computed(() => {
      const total = (ordersMetrics.value.cancelledDropi / ordersMetrics.value.totalDropiOrders) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const devolutionRate = computed(() => {
      const total = (ordersMetrics.value.returnedDropiOrders / ordersMetrics.value.totalDropiOrders) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const totalIncoming = computed(() => {
      const discountRate = cancelledRate.value + devolutionRate.value;
      const total = ordersMetrics.value.totalOrdersDropiDelivered * (1 - (discountRate / 100));
      return total
    });

    const collectionOverInvertion = computed(() => {
      const total = (totalIncoming.value / metaMetrics.value.spend) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const totalCollection = computed(() => {
      const total = ordersMetrics.value.collectionDropi;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const taxDevolution = computed(() => {
      const total = (ordersMetrics.value.totalHistoricalDevolution / (ordersMetrics.value.totalDropiOrders - ordersMetrics.value.cancelledAndRejectedOrders -
        ordersMetrics.value.guiasAnuladas)) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    const taxCancelled = computed(() => {
      const total = (ordersMetrics.value.totalHistoricalCancelled / (ordersMetrics.value.totalDropiOrders - ordersMetrics.value.cancelledAndRejectedOrders -
        ordersMetrics.value.guiasAnuladas)) * 100;
      return total > 0 ? parseFloat(total.toFixed(2)) : 0;
    });

    return {
      tab,
      roas,
      utils,
      cvrTax,
      costBy1000,
      videoViews,
      costBySell,
      metaMetrics,
      costByClick,
      clickOnLink,
      clickToRate,
      totalIncoming,
      cancelledRate,
      ordersMetrics,
      devolutionRate,
      reactionToPost,
      pageEngagement,
      postEngagement,
      destinyPageView,
      porcentDelivered,
      totalCollection,
      taxDevolution,
      taxCancelled,
      collectionOverInvertion,
      collectionOverInversion,
    }
  }
})
</script>
