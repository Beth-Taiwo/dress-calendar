export default async ({ $axios, store }) => {
  await $axios
    .$get(
      'https://dress-calendar.api.deskree.com/api/v1/rest/collections/clothes'
    )
    .then(({ data }) => {
      // set response in the store
      store.dispatch('collections/setClothes', data)
    })
}
