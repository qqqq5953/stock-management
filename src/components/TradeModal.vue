<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-8
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                scale-100
                translate-x-0
                bg-white
                shadow-xl
                rounded
              "
            >
              <header class="flex justify-between">
                <div>
                  <DialogTitle
                    class="text-lg font-medium leading-6 text-gray-900"
                    >Add Stock</DialogTitle
                  >
                </div>
                <button class="cursor-pointer" @click="setIsOpen(false)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </header>
              <main class="mt-5 px-4 md:px-0 lg:px-4">
                <form
                  class="
                    flex flex-col
                    gap-y-4
                    justify-between
                    break-words
                    bg-white
                    h-full
                    mx-auto
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
              </main>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle
} from '@headlessui/vue';
import db from '@/firebase/firebaseInit';

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle
  },
  props: {
    isOpen: {
      type: Boolean
    }
  },
  data() {
    return {
      isModalOpen: '',
      trade: {
        ticker: 'vti',
        cost: 12,
        shares: 2,
        date: '2022-03-02'
      }
    };
  },
  methods: {
    setIsOpen(value) {
      this.$emit('close-modal', value);
    },
    addStock() {
      db.ref(`buy/${this.trade.ticker.toUpperCase()}`).push(this.trade);
      // this.$refs.addForm.reset();
    }
  }
};
</script>
