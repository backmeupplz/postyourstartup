<template lang="pug">
  .v-container.pa-4.d-flex.justify-center
    v-layout(
      column
      style='max-width: 600px'
    )
      .display-1.text-center Post your startup
      .headline.pb-6.text-center Curated list of places to post your startup
      p
        | In may 2020 I decided to tell the world about 
        a(href="https://todorant.com") Todorant
        |  — a smart todo list app that tricks the brain into completing tasks. Go check it out! It has web, iOS and Android apps, all built with productivity in mind!
      p 
        | I took the list from 
        a(href="https://www.placestopostyourstartup.com") PlacesToPostYourStartup.com
        |  and began posting 
        a(href="https://todorant.com") Todorant
        |  to as many websites as possible. Around 4 weeks later, I went through the whole list and noted which websites were still functioning, which had free postings and the pricing of paid posts.
      p
        | You can find the results in the Airtable below. Enjoy! And don't forget to give 
        a(href="https://todorant.com") Todorant
        |  a try!
      p
        | Did I miss a place to post your startup or is something out of date? 
        a(href="mailto:postyourstartup@borodutch.com") Email me
        | .


      iframe.airtable-embed(
        src='https://airtable.com/embed/shrTs7B64yWBXzQf3?backgroundColor=blue&viewControls=on'
        frameborder='0'
        onmousewheel=''
        width='100%'
        height='1500'
        style='background: transparent; border: 1px solid #ccc;'
      )

      .caption.text-center.mt-4
        | Made with ❤️ by 
        a(href="https://borodutch.com") @borodutch
      .caption.text-center
        | This page is 
        a(href="https://github.com/backmeupplz/postyourstartup") open-source
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {}
</script>
