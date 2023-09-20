import { writable } from 'svelte/store'

type Order = Partial<{
  preferences: string
  beanType: string
  quantity: string
  grindOption: string
  deliveries: string
}>

function createOrder() {
  const { subscribe, update, set } = writable<Order>({})

  return {
    subscribe,
    set: (key: string, value: string) => {
      update(object => {
        object[key as keyof Order] = value
        return object
      })
    },
    clear: () => set({})
  }
}

const order = createOrder()

export default order
