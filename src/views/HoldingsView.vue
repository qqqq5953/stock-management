<template>
  <main class="px-4 md:p-10 mx-auto w-full">
    <section class="px-4 md:px-0 lg:px-4">
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
              hidden
              md:block
              lg:hidden
            "
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
        <template #thead-trade>
          <th class="px-4 py-3 md:hidden lg:block"></th>
        </template>
        <template #tbody-trade>
          <td
            class="
              px-4
              pt-5
              pb-0
              md:hidden
              lg:block
              text-xs
              block
              sm:table-cell
            "
          >
            <button
              type="button"
              class="
                border border-blue-900
                rounded
                px-2
                py-1
                hover:bg-blue-900 hover:text-white
                ml-auto
                block
              "
            >
              Trade
            </button>
          </td>
        </template>
      </HoldingTable>
    </section>

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
// import TopThreePerformace from '@/components/TopThreePerformace.vue';
import Card from '@/components/CardItem.vue';
export default {
  components: {
    HoldingTable,
    // TopThreePerformace
    Card
  }
};
</script>
