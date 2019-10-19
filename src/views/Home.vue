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
            class="col-md-4 col-sm-6"
            v-for="work in works"
            :key="work.id"
          >
            <work :work="work" />
          </div>
        </div>
      </div>
    </div>
    <!-- End waht we do section -->

    <!-- Begin parallax -->
    <div class="jumbotron paral paralsec1">
      <h2 class="display-3">Almond oil is an excellent source of vitamin E and contains a small amount of vitamin K</h2>
    </div>
    <!-- End parallax -->

    <!-- new products section -->
    <div class="section what-we-do bg-offwite text-center">
      <div class="p-5">
        <h1 class="section__title"> New products </h1>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            v-for="product in products"
            :key="product.id"
          >
            <product-card :product="product" />
          </div>
        </div>
        <div class="row d-flex align-itemms-center justify-content-center py-3">
          <button class="btn btn-primary btn-lg">
            view all
          </button>
        </div>
      </div>
    </div>
    <!-- End new products section -->

    <!-- Begin team section -->
    <div class="section text-center">
      <div class="p-5">
        <h1 class="section__title"> Team Members </h1>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            v-for="member in members"
            :key="member.id"
          >
            <member :member="member" />
          </div>
        </div>
      </div>
    </div>
    <!-- End team section -->

  </div>
</template>

<script>
import largeHero from '@/components/large-hero'
import fact from '@/components/fact'
import staticData from '@/utils/static-data'
import work from '@/components/work'
import productCard from '@/components/product-card'
import member from '@/components/member'

export default {
  components: {
    largeHero,
    fact,
    work,
    productCard,
    member
  },
  data: () => ({
    facts: staticData.facts,
    works: staticData.works,
    products: staticData.products,
    members: staticData.members
  })

}
</script>