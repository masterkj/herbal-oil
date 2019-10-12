<template>
  <div>
    <large-hero />
    <!-- facts -->
    <div class="bg-primary">
      <div class="container-fluid">
        <div class="row">
          <div
            v-for="fact in facts"
            :key="fact.title"
            class="col-sm-6 col-lg-3 col-sm-2"
          >
            <fact :fact="fact" />
          </div>
        </div>
      </div>
    </div>
    <!-- End facts -->

    <!-- waht we do section -->
    <div class="section what-we-do bg-offwite text-center">
      <div class="center-y-x p-5">
        <h1 class="section__title"> Waht we do </h1>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-sm-2"
            v-for="work in works"
            :key="work.id"
          >
            <work :work="work" />
          </div>
        </div>
      </div>
    </div>
    <!-- End waht we do section -->



    <!-- parallax -->
    <div class="parallax">
      <img src="/images/parallax1.jpg" >
      <h1 class="parallax_text">black seed oil can reduce the severity of hand eczema
    </div>
    <!-- End parallax -->

  </div>
</template>

<script>
import largeHero from '@/components/large-hero'
import fact from '@/components/fact'
import staticData from '@/utils/static-data'
import work from '@/components/work'
export default {
  components: {
    largeHero,
    fact,
    work
  },
  data: () => ({
    facts: staticData.facts,
    works: staticData.works
  })

}
</script>