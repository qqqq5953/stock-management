<template>
  <main class="px-4 md:p-10 mx-auto w-full">
    <section class="px-4 md:px-0 lg:px-4 border">
      <h2 class="mb-4 font-semibold text-lg">Top 3 Performance</h2>
      <div class="lg:flex lg:justify-between gap-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
    <section class="mt-5 px-4 md:px-0 lg:px-4">
      <h2 class="mb-4 font-semibold text-lg">Holdings</h2>
      <HoldingTable>
        <template #holding-table-btn>
          <button
            type="button"
            class="
              text-xs
              border border-blue-900
              rounded
              px-2
              py-1
              hover:bg-blue-900 hover:text-white
            "
            @click="openModal"
          >
            Trade
          </button>
        </template>
        <!-- <template #table-title>
          <h2 class="font-semibold text-base text-blueGray-700">Holdings</h2>
        </template> -->
        <template #thead-price>
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
            Price
          </th>
        </template>
        <template #tbody-price>
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
            <span class="sm:hidden font-semibold mr-2">Price:</span>
            <p class="ml-auto text-right">1,200</p>
          </td>
        </template>
      </HoldingTable>
      <div>
        <TradeModal :isOpen="isOpen" @close-modal="closeModal"></TradeModal>
      </div>
    </section>
    <!-- <section class="mt-5 px-4 md:px-0 lg:px-4">
      <h2 class="mb-4 font-semibold text-lg">Add</h2>
      <form
        class="
          flex flex-col
          gap-y-4
          justify-between
          break-words
          mb-6
          p-6
          shadow-lg
          rounded
          bg-white
          h-full
          lg:w-1/2
          mx-auto
          border border-gray-100
        "
        ref="addForm"
        @submit.prevent="addStock"
      >
        <div>
          <label for="ticker">Ticker</label>
          <input
            id="ticker"
            class="
              border border-slate-500
              outline-none
              p-3
              mt-3
              placeholder-gray-500
              text-blueGray-600
              bg-white
              rounded
              text-sm
              shadow
              w-full
              focus:outline-none focus:ring
            "
            placeholder="VTI"
            type="text"
            v-model="trade.ticker"
            required
          />
        </div>
        <div>
          <label for="cost">Cost</label>
          <input
            id="cost"
            class="
              border border-slate-500
              outline-none
              p-3
              mt-3
              placeholder-gray-500
              text-blueGray-600
              bg-white
              rounded
              text-sm
              shadow
              w-full
              focus:outline-none focus:ring
            "
            placeholder="234.56"
            type="number"
            min="0"
            step="0.01"
            v-model="trade.cost"
            required
          />
        </div>
        <div>
          <label for="shares">Shares</label>
          <input
            id="shares"
            class="
              border border-slate-500
              outline-none
              p-3
              mt-3
              placeholder-gray-500
              text-blueGray-600
              bg-white
              rounded
              text-sm
              shadow
              w-full
              focus:outline-none focus:ring
            "
            placeholder="1"
            type="number"
            min="0"
            step="1"
            v-model="trade.shares"
            required
          />
        </div>
        <div>
          <label for="date">Date</label>
          <input
            id="date"
            class="
              border border-slate-500
              outline-none
              p-3
              mt-3
              placeholder-blueGray-300
              text-blueGray-600
              bg-white
              rounded
              text-sm
              shadow
              w-full
              focus:outline-none focus:ring
            "
            type="date"
            v-model="trade.date"
            required
          />
        </div>
        <input
          class="
            bg-indigo-700
            hover:bg-indigo-600
            rounded
            text-white text-lg
            p-2
            mt-4
            cursor-pointer
          "
          type="submit"
          value="Add"
        />
      </form>
    </section> -->

    <!-- <div class="w-full xl:w-6/12 px-4 bg-gray-300">
      <TopThreePerformace></TopThreePerformace>
    </div> -->
    <!-- <HoldingTable></HoldingTable>
    <TopThreePerformace></TopThreePerformace>
    <HoldingTable></HoldingTable>
    <TopThreePerformace></TopThreePerformace>
    <HoldingTable></HoldingTable>
    <TopThreePerformace></TopThreePerformace>
    <HoldingTable></HoldingTable>
    <TopThreePerformace></TopThreePerformace> -->
  </main>
</template>

<script>
import HoldingTable from '@/components/HoldingTable.vue';
import Card from '@/components/CardItem.vue';
import TradeModal from '@/components/TradeModal.vue';
import db from '@/firebase/firebaseInit';
// import TopThreePerformace from '@/components/TopThreePerformace.vue';

export default {
  components: {
    HoldingTable,
    TradeModal,
    // TopThreePerformace
    Card
  },
  data() {
    return {
      trade: {
        ticker: 'vti',
        cost: '3',
        shares: '2',
        date: '2022-03-02'
      },
      isOpen: false
    };
  },
  methods: {
    addStock() {
      db.ref(`buy/${this.trade.ticker.toUpperCase()}`).push(this.trade);
      // this.$refs.addForm.reset();
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal(val) {
      this.isOpen = val;
    }
  }
};
</script>
