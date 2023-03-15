export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})

// export default defineNuxtPlugin(nuxtApp => {
//   const { helloWorld } = useUtils()
//   helloWorld()
//   console.log("Hello from my plugin")
// })