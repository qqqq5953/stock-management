<template>
  <div
    class="
      flex flex-col
      break-words
      w-full
      mb-6
      shadow-lg
      rounded
      bg-white
      h-full
      border border-gray-100
    "
  >
    <!-- head -->
    <div class="rounded-t px-4 py-3 border-0 flex flex-wrap items-center">
      <div class="w-full px-1 max-w-full flex-1">
        <slot name="table-title"></slot>
      </div>
      <slot name="see-all-btn"></slot>
      <slot name="holding-table-btn"></slot>
    </div>

    <!-- body -->
    <div class="block w-full overflow-x-auto pb-5">
      <table class="w-full border-collapse">
        <thead
          class="bg-gray-100 border-t border-b hidden sm:table-header-group"
        >
          <tr>
            <th
              class="
                pl-6
                pr-0
                py-3
                text-blueGray-500
                align-middle
                text-xs
                uppercase
                font-semibold
                text-center
                sm:text-left
              "
            >
              Stocks
            </th>
            <th
              class="
                px-4
                py-3
                text-blueGray-500
                align-middle
                text-xs
                uppercase
                font-semibold
                text-center
                sm:text-right
              "
            >
              Profit / Loss
            </th>
            <slot name="thead-price"></slot>
            <th
              class="
                px-4
                py-3
                text-blueGray-500
                align-middle
                text-xs
                uppercase
                font-semibold
                text-center
                sm:text-right
              "
            >
              Avg. Cost
            </th>
            <th
              class="
                px-4
                py-3
                text-blueGray-500
                align-middle
                text-xs
                uppercase
                font-semibold
                text-center
                sm:text-right
              "
            >
              Shares
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="flex flex-col sm:table-row mx-2 mb-3 rounded"
            v-for="item in holdingsArranged"
            :key="item.ticker"
          >
            <th
              class="
                px-6
                pr-6
                pt-5
                pb-0
                text-xs
                whitespace-nowrap
                text-center
                sm:text-left
              "
            >
              <span class="mx-auto">{{ item.ticker }}</span>
            </th>
            <td
              class="
                px-4
                pt-5
                pb-0
                border-b border-gray-100
                sm:border-0
                text-xs
                whitespace-nowrap
                flex
                items-center
                sm:table-cell
              "
            >
              <span class="sm:hidden font-semibold mr-2">P / L:</span>
              <div class="ml-auto text-right">
                <i class="fas fa-arrow-up mr-1"></i>
                <span>46,53%</span>
                <p class="mt-0.5">1,230</p>
              </div>
            </td>
            <slot name="tbody-price"></slot>
            <td
              class="
                px-4
                pt-5
                pb-0
                border-b border-gray-100
                sm:border-0
                text-xs
                whitespace-nowrap
                flex
                items-center
                sm:table-cell
              "
            >
              <span class="sm:hidden font-semibold mr-2">Average Cost:</span>
              <p class="ml-auto text-right">
                {{ item.averageCost.toFixed(2) }}
              </p>
            </td>
            <td
              class="
                px-4
                pt-5
                pb-0
                border-b border-gray-100
                sm:border-0
                text-xs
                whitespace-nowrap
                flex
                items-center
                sm:table-cell
              "
            >
              <span class="sm:hidden font-semibold mr-2">Share:</span>
              <p class="ml-auto text-right">{{ item.totalShares }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/firebaseInit';

export default {
  data() {
    return {
      holdingsFromDB: [],
      holdingsArranged: []
    };
  },
  methods: {
    async getHoldingsFromDB() {
      // 監聽資料庫
      db.ref('buy').on('value', (snapshot) => {
        // 清空陣列
        this.holdingsFromDB = [];

        // 取得資料
        snapshot.forEach((childSnapshot) => {
          this.holdingsFromDB.push({
            ticker: childSnapshot.key,
            record: childSnapshot.val()
          });
        });

        // 整理資料
        this.arrangeStockInfo();
      });
    },
    arrangeStockInfo() {
      // 清空陣列
      this.holdingsArranged = [];

      // 取得資料
      this.holdingsFromDB.forEach((item) => {
        const record = item.record;
        let totalCost = null;
        let totalShares = null;

        Object.entries(record).forEach(([key, value]) => {
          totalCost += value.cost * value.shares;
          totalShares += value.shares;
        });

        this.holdingsArranged.push({
          ticker: item.ticker,
          averageCost: totalCost / totalShares,
          totalShares
        });
      });
    }
  },
  created() {
    this.getHoldingsFromDB();
  }
};
</script>
