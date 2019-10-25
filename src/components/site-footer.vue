<template>
  <div class="footer text-white bg-secondary p-4">
    <div class="container p-4">
      <div class="row d-flex align-content-between">

        <footerSection>
          <template v-slot:header>
            About Us
          </template>
          We love what we do and how we do! We put our care, quality and passion into creating our extra virgin olive oil. Our passion pushes us to continually craft the freshest extra virgin olive oil.
          <br><br>
          We use traditional methods to produce oil so when you buy olive oil from us, you buy quality guarantee.
        </footerSection>

        <footerSection>
          <template v-slot:header>
            Information
          </template>
          <p><a
              href="#"
              class="text-light-gray"
            >Home</a></p>
          <p><a
              href="#"
              class="text-light-gray"
            >What we do</a></p>
          <p><a
              href="#"
              class="text-light-gray"
            >Producst</a></p>
          <p><a
              href="#"
              class="text-light-gray"
            >Team members</a></p>
        </footerSection>

        <footerSection>
          <template v-slot:header>
            Contact us
          </template>
            <p class="lh-17">
          888 Broadway
          <br>
          New York, NY, 18813
          <br>
          Phone: 123-456-7890
          <br>
          Fax: 123-456-7890
          <br>
          Email: info@goldenbrand.com
            </p>
            <div class="container d-flex">
              <icon icon="facebook" />
              <icon icon="instagram" />
            </div>
        </footerSection>

      </div>
    </div>
  </div>
</template>

<script>
import footerSection from '@/components/footer-section'
import icon from '@/components/link-icon'

export default {
  components: {
    footerSection,
    icon
  }
}
</script>
