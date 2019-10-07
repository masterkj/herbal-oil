<template>
  <div>
    <large-hero />
    <div class="facts">
      <div class="row">
        <div
          v-for="fact in facts"
          :key="fact.title"
          class="col-md-6 col-lg-3 col-sm-2"
        >
          <fact :fact="fact" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import largeHero from '@/components/large-hero'
import fact from '@/components/fact'
export default {
  components: {
    largeHero,
    fact
  },
  data: () => ({
    facts: [
      {
        icon: 'inspired-by-nature',
        title: 'Special oil',
        text: 'The taste, the aroma and the natural ingredients of olive oils are kept unaltered.'
      },
      {
        icon: 'drop',
        title: 'pure oil',
        text: 'The taste, the aroma and the natural ingredients of olive oils are kept unaltered.'
      },
      {
        icon: 'bottle',
        title: 'Health benefits',
        text: 'The taste, the aroma and the natural ingredients of olive oils are kept unaltered.'
      },
      {
        icon: 'bottle1',
        title: 'Health benefits',
        text: 'The taste, the aroma and the natural ingredients of olive oils are kept unaltered.'
      }
    ]
  })

}
</script>